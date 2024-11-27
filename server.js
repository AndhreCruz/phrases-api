const jsonServer = require('json-server'); // Importa JSON Server
const server = jsonServer.create(); // Crea una instancia de JSON Server
const router = jsonServer.router('phrases.json'); // Crea un router usando el archivo JSON
const middlewares = jsonServer.defaults(); // Carga middlewares predeterminados (logger, static, cors y no-cache)

// Usa el puerto proporcionado por Railway
const port = process.env.PORT || 3000; // Define el puerto en el que se ejecutará el servidor

server.use(middlewares); // Carga middlewares
server.use(router); // Carga el router

server.listen(port, () => { // Inicia el servidor
  console.log(`JSON Server is running on port ${port}`); // Muestra un mensaje en la consola
});
