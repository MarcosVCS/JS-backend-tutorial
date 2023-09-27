const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // Terminada da lógica, há duas opções (obrigatório):
  // 1) passar um res.send()
  // 2) permitir a execução de outros códigos:
  next();
};

module.exports = logger;
