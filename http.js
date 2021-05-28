const http = require('http');

http.createServer((req, res) => {
 if (req.url === '/') return res.end('Hello');
}).listen(4400);
