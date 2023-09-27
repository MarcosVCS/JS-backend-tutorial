const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("../content/first.txt", "utf8");
    const second = await readFilePromise("../content/second.txt", "utf8");
    await writeFilePromise(
      "./content/result-mind-granade.txt",
      `This is awesome: ${first}/ ${second}`
    );
    console.log("Arquivo criado");
  } catch (error) {
    console.log(error);
  }
};

start(); // Será lido depois (assíncrono)
console.log("teste"); // Será lido primeiro
