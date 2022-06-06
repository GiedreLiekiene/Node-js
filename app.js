const http = require('http'); // 'http' module 
const myMod = require('./mymodule');

const hostname = '127.0.0.1'; // ip for localhost
const port = 5500; //port

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello Giedre 123 ' + myMod.dateTime());
});

server.listen(port, hostname,() => {
    console.log(`HTTP server listening at http://${hostname}:${port}`);
});