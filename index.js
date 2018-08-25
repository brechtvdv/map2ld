const http = require('http');
const fs = require('fs');

const server = http.createServer({}, (req, res) => {
  try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Content-Type', 'text/turtle');
      res.setHeader('Cache-Control', 'public, max-age=360000');
      res.end(map);
  } catch (e) {
    // console.error(e);
    res.writeHead(500, {});
    res.end('Failure')
  }
});

server.on('error', (err) => console.error(err));
process.on('uncaughtException', function (err) {
  console.error(err.stack);
  console.log("Node NOT Exiting...");
});
server.listen(3001);

let map;

fs.readFile('signalgroup4.ttl', (err, data) => {
  if (err) throw err;
  map = data;
});
