const http = require("http");

// Montando servidor com callback function
// Primeiro parâmetro da callback function é o pedido do cliente, segundo é a resposta do servidor
const server = http.createServer((req, res) => {
  console.log(res);
  res.write("Welcome to our home page");
  res.end();
});

server.listen(5000); //porta em que estará ativo o servidor (possível acessar em http://localhost:5000/)
