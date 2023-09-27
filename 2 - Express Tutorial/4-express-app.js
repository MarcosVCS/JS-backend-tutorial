const express = require("express");
const path = require("path");
const app = express();

// Setup static and middleware
app.use(express.static("./public"));
// método para conexão com arquivos CSS, JS, imagens, etc.
// por convenção (embora não obrigatória), esses arquivos devem estar numa pasta "public"
// express.static() indica que são arquivos que o servidor não tem que modificar

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
