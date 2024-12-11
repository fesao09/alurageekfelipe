const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./database/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = (req, res) => {
  console.log('Request received');
  server(req, res, (err) => {
    if (err) {
      console.error('Error occurred:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Request handled successfully');
    }
  });
};