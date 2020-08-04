const http = require('http'),
  path = require('path'),
  fs = require('fs'),
  base = '/home/examples/public_html',
  port = process.env.PORT || 8080;

http.createServer((req, res) => {
  const pathname = base + req.url;
  console.log(pathname);
  path.exists(pathname, function (exists) {
    if (exists) {
      // insert code to process requests
    } else {
      res.writeHead(404);
      res.write('Bad Request 404 \n');
      res.end();
    }
  })
}).listen(port);

console.log(`Server running at ${port}`);
