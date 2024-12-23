const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./database/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = (req, res) => {
  server.handle(req, res);
};