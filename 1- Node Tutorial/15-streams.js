// Código que utilizei para criar arquivo grande para ser lido em pedaços (stream)
// const { writeFileSync } = require("fs");

// for (let i = 0; i <= 10000; i++) {
//   writeFileSync("./content/big.txt", `Hello this is line no: ${i}\n`, {
//     flag: "a",
//   });
// }

// Leitura utilizando stream (leitura acontecerá em blocos de 64 kilobytes)
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", { encoding: "utf8" });
// É possível controlar o tamanho dos blocos de dado, alterando o padrão, ao passar dentro do objeto do segundo parâmetro "highWaterMark: 90000" (nesse caso, 90kb)

// Receber os dados
stream.on("data", (result) => {
  console.log(result);
});
// Se o encoding não fosse passado quando se criou a instância stream, seria exibido os blocos de dados

// Caso haja algum erro, este código será rodado (está escutando eventos em que haja erro)
stream.on("error", (result) => {
  console.log(result);
});
