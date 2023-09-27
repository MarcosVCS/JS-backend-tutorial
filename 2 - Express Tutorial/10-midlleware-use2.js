const express = require("express");
const app = express();
const logger = require("./logger");

// Ver arquivo 11-auth.js (tutorial continua lá)
const auth = require("./11-auth.js");

app.use([logger, auth]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
