const express = require("express");
const app = express();

let { people } = require("./data");

// Necessário configurar um middleware para receber dados JSON
app.use(express.json());

app.delete("/api/people/:id", (req, res) => {
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

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
