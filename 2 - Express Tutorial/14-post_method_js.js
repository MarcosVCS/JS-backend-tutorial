const express = require("express");
const app = express();

let { people } = require("./data");

// static assets (dados enviados por aplicação ("javascript.html"))
app.use(express.static("./methods-public"));

// Necessário configurar um middleware para receber dados JSON
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// Aplicação envia JSON para esse endereço
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

// Post enviado pelo Postman (exatamente mesmo setup)
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  // Adiciona uma pessoa ao JSON "people"
  res.status(201).json({ success: true, data: [...people, name] });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
