/**
 * Created by ajt on 2/15/2016.
 */
/*
var app = require("express")();
var http = require('http').Server(app);
var io = require("socket.io")(http);
var spawn = require("child_process").spawn;

var PORT = 8080;

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

function handleRequest(request, response) {
    response.end('yay ' + request.url);
    var process = spawn('python',['../on.py']);

}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log('server listening on port' + PORT);
});*/

var express = require('express');
var spawn = require("child_process").spawn;
var app = express();


app.use(express.static('/home/pi/piLights/'));
app.use(express.static('./.'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('10.0.0.16:3000/on', function(req, res) {
    var process = spawn('usr/bin/python',['on.py']);
    console.log('turn Onnnn');
});
app.post('/off', function(req, res) {
    var process = spawn('usr/bin/python',['/home/pi/piLights.off.py']);
    console.log('turn Off');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});