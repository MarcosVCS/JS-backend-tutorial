const path = require("path"); // módulo path presente no Node

console.log(path.sep); // retorna separador utilizado pelo SO (no caso do windows: "\")

const filePath = path.join("/content", "subfolder", "test.txt");
// retorna caminho de documento dentro da pasta 'subfolder' que está dentro da pasta 'folder'

console.log(filePath);
// resultado: "\content\subfolder\test.txt"

const base = path.basename(filePath); // retorna nome do arquivo no caminho indicado

console.log(base);
// resultado: "test.txt"

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
// retorna caminho absoluto (não só a partir da página do projeto, mas no servidor/computador como um todo)

console.log(absolute);
// resultado: "C:\Users\marco\OneDrive\Desktop\Node Tutorial\content\subfolder\test.txt"

console.log(path.resolve(__dirname, __filename));
// resultado: "C:\Users\marco\OneDrive\Desktop\Node Tutorial\app.js"
