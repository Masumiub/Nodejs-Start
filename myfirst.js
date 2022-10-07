var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Punorjonmo 3" + dt.myDateTime());
    res.write("Rafsan Haquer Ranna Kharap hotey pare na...")
    res.end();
    //res.end('Hello world, node js!');
}).listen(8080);