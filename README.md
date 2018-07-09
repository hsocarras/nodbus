# Nodbus-Plus

A nodejs modbus library fully writed in javascript.

## Getting Started
* ### Install
#### installing nodbus-plus as a node package
    $ npm install nodbus-plus
#### installing nodbus from source

* ### Basic Usage:

Create a modbus tcp server.

      var ModbusTcpServer = require('nodbus-plus').ModbusTcpServer;
      var Slave = new ModbusTcpServer(502);
      Slave.Start();
or use function CreateSlave:

      var nodbus = require('nodbus-plus');
      var ModbusTcpServer = nodbus.CreateSlave(502);

  Create a modbus serial slave over tcp.

        var ModbusSTcpServer = require('nodbus-plus').ModbusSTcpServer;
        var Slave = new ModbusSTcpServer(502, 1);
        Slave.Start();

  or use function CreateSlave:

        var nodbus = require('nodbus-plus');
        var ModbusSTcpServer = nodbus.CreateSlave(502, 1);

Create a modbus tcp client.

    var ModbusTcpClient = require('nodbus-plus').ModbusTcpClient;
    var client = new ModbusTcpClient();

## Documentation and Tutorials
See: https://github.com/hsocarras/nodbus-plus/wiki
## Contributing

If you have a suggestion or found a issue, let us known and [create an issue](https://github.com/hsocarras/nodbus-plus/issues)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
