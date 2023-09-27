const http = require("http");

// Montando servidor com callback function
// Primeiro parâmetro da callback function é o pedido do cliente, segundo é a resposta do servidor
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    // Caso tenha acessado uma página que não existe (não é nem "/" nem "/about")
    res.end(`
  <h1>Oops!</h1>
  <p>We can't find the page you are looking for</p>
  <a href="/>Back to home</a>
  `);
  }
});

server.listen(5000); //porta em que estará ativo o servidor (possível acessar em http://localhost:5000/)
