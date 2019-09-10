const fs = require('fs');
const http = require('http');

http.createServer((req, res )=> {
  res.write('hello world!');
  res.end();
}).listen(3000);
