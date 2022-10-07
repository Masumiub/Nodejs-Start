var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('index.html', function(err, data){
    if(err){
    return console.log("File read error");
    }
    res.end(data);
    });

});

server.listen(3000, 'localhost', function(){

    console.log('Server running');

});