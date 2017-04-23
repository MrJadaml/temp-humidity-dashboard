const SerialPort = require('serialport');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const connections = [];
const portName = process.argv[2];
const port = new SerialPort(portName, {
  baudRate: 9600,
  parser: SerialPort.parsers.readline("\r\n")
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname, + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

io.on('connection', socketConnection);
port.on('open', showPortOpen);
port.on('data', sendSerialData);
port.on('close', showPortClose);
port.on('error', showError);

function socketConnection(socket) {
  connections.push(socket);
  socket.on('close', removeConnection);
}

function removeConnection(socket) {
  const index = connections.indexOf(socket);
  connections.splice(index, 1);
}

function showPortOpen() {
  console.log('port open. Data rate: ' + port.options.baudRate);
}

function sendSerialData(climateData) {
  if (connections.length > 0) {
    broadcast(climateData);
  }
}

function broadcast(climateData) {
  for (connection in connections) {
    connections[connection].emit('climate data', parse(climateData));
  }
}

function showPortClose() {
  console.log('port closed.');
}

function showError(error) {
  console.log('Serial port error: ' + error);
}

function parse(climateData) {
  const dataArray = climateData.split(',');
  const result = {};

  result[dataArray[0]] = dataArray[1];
  result[dataArray[2]] = dataArray[3];

  return result;
}

server.listen(3333, () => {
  console.log('Hosting at http://localhost:3333');
});
