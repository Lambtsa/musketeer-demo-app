const http = require('http');
const routes = require('./server');

const port = 3000;
const resources = (req, res) => routes.all(req, res);

const server = http
  .createServer(resources)
  .listen(port);

module.exports.server = server;
