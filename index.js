const SerialPort = require('serialport');
portName = process.argv[2];

const port = new SerialPort(portName, {
  baudRate: 9600,
  parser: SerialPort.parsers.readline("\n")
});

port.on('open', showPortOpen);
port.on('data', sendSerialData);
port.on('close', showPortClose);
port.on('error', showError);

function showPortOpen() {
  console.log('port open. Data rate: ' + port.options.baudRate);
}

function sendSerialData(data) {
  console.log(data);
}

function showPortClose() {
  console.log('port closed.');
}

function showError(error) {
  console.log('Serial port error: ' + error);
}
