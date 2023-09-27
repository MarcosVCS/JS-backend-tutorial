const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // primeiro parâmetro é o URL
  res.status(200).send("Home Page");
  // se o status não fosse passado manualmente e se a requisição fosse um sucesso
  // seria passado status 200 como padrão
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

// Caso em que não se encontra a página demandada
app.all("*", (req, res) => {
  // * significa todos os caminhos
  res.status(404).send("<h1>Resource not found!</h1>");
  // passado um status 404, para que não seja enviado um status 200, o que poderia gerar confusão
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all - é executado com todos os verbos http (listados acima)
// app.use
// app.listen
