const express = require("express");
const app = express();

// Middleware:
// req => middleware (funcionalidade) => res

// Função middleware que loga informações importantes sobre requisição
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // Terminada da lógica, há duas opções (obrigatório):
  // 1) passar um res.send()
  // 2) permitir a execução de outros códigos:
  next();
};

// Funções middleware devem ser declaradas entre o URL e a callback function
// Não é necessário invocar a middleware function (Express se encarrega disso)
app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

// Observação, para passar dois ou mais middleware functions por um path
// utilize um array contendo esses middlewares como parâmetro
// Exemplo:
const test = (req, res, next) => {
  res.send("Test successeful");
  next();
};

app.get("/api", [logger, test], (req, res) => {
  res.send("About");
});

// Setup servidor
app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
