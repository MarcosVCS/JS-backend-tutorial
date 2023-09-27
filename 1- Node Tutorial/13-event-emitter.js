const EventEmitter = require("events");

const customEmitter = new EventEmitter();

/*
Events:
on - listen for an event
emit - emit an event
*/

customEmitter.on("response", () => {
  console.log(`data recieved`);
});
// Primeiro parâmetro do método ".on()": nome do evento

customEmitter.emit("response"); // Parâmetro: nome do evento
// Será o método ".emit" que irá acionar o código contigo na callback function do método ".on()"
// Por isso, o nome do evento deve ser igual nos dois
// Primeiro se "escuta" (listen) o evento e depois se emite uma resposta

// Possível ter duas ou mais escutas para um mesmo evento
customEmitter.on("response2", () => {
  console.log(`Data 2 recieve`);
});
customEmitter.on("response2", () => {
  console.log(`Outra lógica`);
});
customEmitter.emit("response2");

// Passar argumentos para callback function (passados no método ".emit()")
customEmitter.on("response3", (name, age) => {
  console.log(`${name}, ${age} anos`);
});
customEmitter.emit("response3", "Marcos", 31);
