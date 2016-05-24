var express = require('express'); //use the express module downloaded
var spawn = require("child_process").spawn; //will be used to run the on and off python scripts
var app = express(); //create a server

app.use(express.static('./.')); // use the current directory

app.get('/', function (req, res) { //will be used to server a static optional html page
    res.sendFile(__dirname + '/index.html');
});

app.post('/on', function(req, res) { //when the post request for /on is called
    var process = spawn('python',['on.py']); //run the on script
    console.log('turn Onnnn');
});
app.post('/off', function(req, res) {
    var process = spawn('python',['off.py']); //run the off script
    console.log('turn Off');
});

app.listen(3000, function () { //port number
    console.log('Example app listening on port 3000!');
});
