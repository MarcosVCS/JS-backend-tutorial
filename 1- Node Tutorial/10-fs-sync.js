const { readFileSync, writeFileSync } = require("fs"); //fs = file system (módulo para acessar arquivos)

//LER UM ARQUIVO
const first = readFileSync("./content/first.txt", "utf8");
// primeiro parâmetro é o caminho para o arquivo; segundo é o decodificador
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
// "Hello this is first text file"
console.log(second);
// "Hello this is second text file"

//ESCREVER UM NOVO ARQUIVO:
writeFileSync(
  "./content/result-sync.txt", // Primeiro parâmetro: caminho e arquivo (se não existir, Node cria; se existir, Node escreve em cima)
  `Here is the result: ${first}, ${second}` // Segundo parâmetro: conteúdo
);

//Adicionar informações a um arquivo (necessário passar uma flag como terceiro parâmetro)
writeFileSync("./content/result-sync.txt", "New text", { flag: "a" });
