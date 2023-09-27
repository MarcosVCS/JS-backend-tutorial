const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "marcos") {
    // condição só será verdadeira se URL possuir "?user=marcos"
    req.user = { name: "marcos", id: 3 };
    // adicionada propriedade user ao JSON web-token, a qual poderá ser consultada
    // pelo sistema em qualquer rota que utilize esse middleware
    next();
  } else {
    res.status(401).send("unauthorize");
  }
};

module.exports = authorize;
