const http = require('http'); // 'http' module 
const fileSystem = require('fs'); //file system
const { fork } = require('child_process');

const hostname = '127.0.0.1'; // ip for localhost
const port = 5500; //port

const server = http.createServer(function (req, res) {
  fileSystem.readFile('text.txt', function(error, data) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();  
  });
});

server.listen(port, hostname,() => {
    console.log(`HTTP server listening at http://${hostname}:${port}`);
});