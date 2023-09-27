const express = require("express");

// Criar objeto router
const router = express.Router();

let { people } = require("../data");

router.get("/", (req, res) => {
  // Observação: não é necessário indicar a rota completa, uma vez que esse router
  // já foi vinculado às rotas iniciadas com "/api/people"
  // O endereço acima é o complemento do que já está designado
  res.status(200).json({ success: true, data: people });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  res.status(201).json({ success: true, data: [...people, name] });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;

  const { name } = req.body;

  const person = people.find((person) => {
    return person.id === Number(id);
  });

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

router.delete("/:id", (req, res) => {
  const person = people.find((person) => {
    return person.id === Number(req.params.id);
  });
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter((person) => {
    return person.id !== Number(req.params.id);
  });
  return res.status(200).json({ success: true, data: newPeople });
});

// Necessário exportar o objeto router
module.exports = router;
