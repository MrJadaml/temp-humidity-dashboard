$(function() {
  var socket = io();

  socket.on('climate data', function(data) {
    $('body').append( $('<div>').text(data));
  });
});
