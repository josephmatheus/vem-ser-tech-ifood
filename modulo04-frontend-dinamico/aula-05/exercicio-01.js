// Crie uma função assincrona usando settimeout e callback

function delay(timeout, callback) {
  console.log("Chamada da função assíncrona");

  setTimeout(() => {
    console.log("Inicio da operação assíncrona");

    setTimeout(() => {
      console.log("Fim da operação assíncrona");

      callback();
    }, timeout);
  }, timeout);
}

delay(2000, () => {
  console.log("Chamada do callback");
});
