const fs = require("fs");
const http = require("http");

// Abordagem ruim para transmissão de dados via http
http
  .createServer(function (req, res) {
    text = fs.ReadFileSync("./content/big.txt", "utf8");
    res.end("text");
  })
  .listen(3000);

// Abordagem correta, utilizando streams
http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream(".content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res); // Método que puxa de ReadStream para WriteStream (escreve dados em blocos na resposta)
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
