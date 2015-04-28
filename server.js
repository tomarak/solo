var app = require("./server-config.js")
var http = require('http').Server(app);
var io = require('socket.io')(http);

port = process.env.PORT || 4568;

io.on('connection', function(socket){
  console.log('a user connected');
});

io.listen(app.listen(port));

console.log("Server now listening on port " + port)