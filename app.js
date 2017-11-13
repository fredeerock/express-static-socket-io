var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var serveStatic = require('serve-static');

server.listen(8080);

app.use(serveStatic('./'));

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});