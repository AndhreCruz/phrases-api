const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('phrases.json');
const middlewares = jsonServer.defaults();

// Usa el puerto proporcionado por Railway
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
