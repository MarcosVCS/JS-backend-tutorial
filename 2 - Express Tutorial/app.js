/*
Boas práticas aconselham criar uma pasta "routes" contendo as rotas

Ver os arquivos dessa pasta (people.js / auth.js)
*/

const express = require("express");
const app = express();

// Necessário importar o router contendo as rotas "people"
const people = require("./routes/people");

// Necessário importar o router contendo as rotas "auth"
const auth = require("./routes/auth");

app.use(express.json());

// Vincular as rotas "/api/people" ao router "people"
app.use("/api/people", people);

// Vincular as rotas "/login" ao router "auth"
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
