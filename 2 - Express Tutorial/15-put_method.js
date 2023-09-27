const express = require("express");
const app = express();

let { people } = require("./data");

// Necessário configurar um middleware para receber dados JSON
app.use(express.json());

// Método PUT atualiza dados já existentes (enviado utilizando Postman)
app.put("/api/people/:id", (req, res) => {
  // ID do dado que será modificado é passado como parâmetro
  const { id } = req.params;
  //
  // Recebimento do dado (novo nome para aquele ID)
  const { name } = req.body;

  // Econtrar dados relacionados àquele ID
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

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
