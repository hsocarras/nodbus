/*
*@author Hector E. Socarras
*@brief
*Se implementa la funcion 0x04 del protocolo de modbus.
*Debuelve un objeto pdu con el valor de los registros solicitados.
*
*@param objeto pdu
*/

var PDU = require('../pdu');

var ReadInputRegister = function (pdu) {

    var respPDU = new PDU();

    //registro inicial ejemplo el registro 10 direccionado como 0x09 (9)
    var initRegister = pdu.modbus_data.readUInt16BE(0);

    //Verificando q el registro solicitado exista
    if(initRegister >= this.inputRegisters.size){
        //Creando exception 0x02
        respPDU.modbus_function = pdu.modbus_function | 0x80;
        respPDU.modbus_data[0] = 0x02;

        //this.emit('modbus_exception','ILLEGAL DATA ADDRESS');
    }
    else{
        //cantidad de registros a leer
        var numberOfRegisters =  pdu.modbus_data.readUInt16BE(2);

        ////Calculando cantidad de bytes de la respuesta
        var byte_count=2*numberOfRegisters;


        respPDU.modbus_data = Buffer.alloc(byte_count+1);
        respPDU.modbus_function = 0x04;
        respPDU.modbus_data[0]=byte_count;

        for(var i = 0; i < numberOfRegisters; i++){
          this.inputRegisters.EncodeRegister(initRegister + i).copy(respPDU.modbus_data, 1 + 2*i)
        }


    }

    return respPDU;


}


module.exports = ReadInputRegister;
