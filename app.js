const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  
  res.end('Hello Kanhaiya welcome to node js programming');
});

server.listen(port, hostname, () => {

  
  console.log(`Server running at http://${hostname}:${port}/`);
});