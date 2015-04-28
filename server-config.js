var express = require('express');
var path = require('path');
//var morgan = require('morgan');
var mongoose = require('mongoose')
var http = require('http').Server(app);
var io = require('socket.io')(http);

//var partials = require('express-partials');
//var handler = require('./lib/request-handler')

var app = express();


app.configure(function(){
  app.use(express.bodyParser());
 // app.use(morgan('dev'));
  app.use(express.static(__dirname + '/public/client'));
})


app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/client/index.html');
})





module.exports = app;