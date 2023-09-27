const express = require("express");
const app = express();

// static assets (index.html possui form que envia dados para "/login")
app.use(express.static("./methods-public"));

// Necessário configurar um middleware para ter acesso os dados do body da requisição
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  // Informaçãoes enviadas pelo form serão enviadas no body da requisição
  // console.log(req.body);
  // output: { name: 'Marcos' } //nome da propriedade é name, como definido no HTML

  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  } else {
    res.status(401).send("INFORMATION NOT POSTED");
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
