const { readFile } = require("fs");

const getText = (path, enc) => {
  return new Promise((resolve, reject) => {
    readFile(path, enc, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("../content/first.txt", "utf8")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Teste"); // Será processaod antes
