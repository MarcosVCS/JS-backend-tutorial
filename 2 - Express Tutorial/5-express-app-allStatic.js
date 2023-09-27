const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));
// Não é necessário configurar a página inicial, uma vez que o index.html
// já consta da pasta /public
// O Express entende que se trata da página inicial ("/")

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
