// started operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process

/*
Mesmo que o tempo de espera seja 0, a tarefa contida no setTimeout()
será concluída depois de todas as outras tarefas síncronas
*/
