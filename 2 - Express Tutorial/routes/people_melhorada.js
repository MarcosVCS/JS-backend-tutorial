/*
Boas práticas indicam criar uma pasta chamada "controllers" contendo as funções que serão
chamadas nas rotas

aplicação -> router -> controllers
*/

const express = require("express");

// Criar objeto router
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// Primeira maneira de estruturar as rotas
// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

// Segunda maneira de estruturar as rotas
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

// Necessário exportar o objeto router
module.exports = router;
