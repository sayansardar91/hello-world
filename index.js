const http = require('http');
http.createServer(function (req, res) {
  // server code
  console.log(`${req.method} ${req.url}`);
  res.end('hello world!');
}).listen(80);
console.log('Server listening on port 80');
