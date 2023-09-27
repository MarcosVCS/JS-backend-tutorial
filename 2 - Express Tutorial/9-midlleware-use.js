const express = require("express");
const app = express();
const logger = require("./logger");

// Funções middleware que serão utilizadas em todas as rotas abaixo (as que
// estiverem acima, não invocarão essa função middleware
app.use(logger);

// Possível delimitar as rotas que utilizarão esse middleware
// app.use('/api', logger) // funcionará em todas as rotas que começarem com '/api'

// Para passar mais de uma função middleware, deve-se passá-las em um array
// Observação: elas serão executadas em ordem do array
// app.use([logger, exemplo2])

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
