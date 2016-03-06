/**
 * Created by ajt on 2/15/2016.
 */
//Working...
var express = require('express');
var spawn = require("child_process").spawn;
var app = express();


app.use(express.static('./.'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/on', function(req, res) {
    var process = spawn('python',['on.py']);
    console.log('turn Onnnn');
});
app.post('/off', function(req, res) {
    var process = spawn('python',['off.py']);
    console.log('turn Off');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});