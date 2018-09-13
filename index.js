var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/js/script.js', function(req, res){
  res.sendFile(__dirname + '/js/script.js');
});

io.on('connection', function(socket){
    socket.on('video', function(data){
      console.log("conectado");
      io.emit('src', data);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});