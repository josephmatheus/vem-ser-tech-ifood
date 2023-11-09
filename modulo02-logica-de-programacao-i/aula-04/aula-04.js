// ESTRUTURAS
  // CONDICIONAIS

  let meuNum = 10;
  let saida = meuNum % 2 === 0;

  if (saida) {
    console.log("é par");
  } else {
    console.log("é impar");
  }

  let login = null
//   if(!login) console.log("true");

  // Operador Ternário
  saida = login ? console.log("true") : console.log("false");

  let idadeUsuario = 21;

  if (idadeUsuario < 18) {
    console.log("menor");
  } else if (idadeUsuario >= 18 && idadeUsuario < 60) {
    console.log("adulto");
  } else {
    console.log("idoso");
  }

  let key = 5
    switch (key) {
        case 2:
            console.log("caiu no 2");
            break;
        case 5:
            console.log("caiu no 5");
            break;

        default:
            console.log("caiu no default");
            break;
    }

// EXERCICIO
    // digitar o nome do usuario que quer remover
    console.log("pessoas antes: ", pessoas);

    let nomeRemover = "Matheus";
    if (pessoas[0]["Primeiro Nome"] === nomeRemover) {
        pessoas.shift();
    } else if (pessoas[1]["Primeiro Nome"] === nomeRemover) {
        pessoas.splice(1, 1);
    } else if (pessoas[2]["Primeiro Nome"] === nomeRemover) {
        pessoas.pop();
    }

    console.log("pessoas depois: ", pessoas);