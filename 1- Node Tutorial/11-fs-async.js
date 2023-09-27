const { readFile, writeFile } = require("fs");

// Acessando arquivo de maneira assíncrona (utilizando callback-function)
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result); //output: "Hello this is first text file"
});

// Acessando dois arquivos e escrevendo um terceiro de maneira assíncrona (utilizando callback-functions)
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result); //será undefined (não esperamos um retorno)
      }
    );
  });
});
