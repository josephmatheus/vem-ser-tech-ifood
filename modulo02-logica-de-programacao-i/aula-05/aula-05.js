// ESTRUTURAS DE REPETIÇÃO

    // WHILE
    let contador = 0;
    // while (contador < 10) {
    //     console.log("contador: ",contador);
    //     contador = contador + 1
    // }

    let frutas = ["Maçã", "Pera", "Melancia"];

    // do {
    //     console.log("fruta: ", frutas[contador]);
    //     contador = contador + 1;
    // } while (contador < frutas.length);

    // for (criar variavel ; expressao ; modificar variavel)
    for (let index = 0; index < frutas.length; index++) {
        const element = frutas[index];

        // console.log("element: ", element);
    }

    // EXERCICIO

    let palavra = "Computador";
    let vogais = ["a", "e", "i", "o", "u"];
    let qtdVogais = 0;

    for (let index = 0; index < palavra.length; index++) {
    let letra = palavra[index].toLowerCase();
    if (vogais.includes(letra)) {
        qtdVogais++;
    }
    }

    // console.log("Quantidade de vogais: ", qtdVogais);

    const pessoa = {
        "Primeiro Nome": "Matheus",
        ultimoNome: "Lima",
        idade: 25,
        corOlhos: "Castanho-escuro",
        habilidades: ["Javascript", "HTML", "CSS"],
        níveis: {
          css: 8,
          javascript: 10,
          html: 10,
        }
      };

    //? Adicionar pessoa
    // console.log("cadastro inicial: ", [...pessoas]);

    let continuar = true;
    
    // while (continuar) {
    //     let resposta = prompt("Digite o nome da pessoa a ser adicionada:")
    //     const {...usuario} = pessoa;
    //     usuario["Primeiro Nome"] = resposta;
    //     pessoas.push(usuario);

    //     continuar = confirm("Continuar?");
    // }

    // console.log("cadastro final: ", pessoas);

    //? remover pessoa
    // console.log("cadastro inicial: ", [...pessoas]);

    // let nomeRemover = "Araújo";

    // for (let i = 0; i < pessoas.length; i++) {
    //     if (pessoas[i]["Primeiro Nome"] === nomeRemover) {
    //         pessoas.splice(i, i);
    //     } 
    // }

    // console.log("cadastro final: ", pessoas);

    //? Atualizar habilidade pessoa

    // console.log("cadastro inicial: ", JSON.parse(JSON.stringify(pessoas)));

    // let nomeAtualizar = "Matheus";
    // let novaHabilidade = "React";

    // for (let i = 0; i < pessoas.length; i++) {
    //     if (pessoas[i]["Primeiro Nome"] === nomeAtualizar) {
    //         pessoas[i].habilidades.push(novaHabilidade);
    //     } 
    // }

    // console.log("cadastro final: ", pessoas);

    // const numeroSorteado = Number.parseInt(Math.random() * pessoas.length);
    // let pessoaSorteada;

    // for (let i = 0; i < pessoas.length; i++) {
    //     if (i === numeroSorteado) {
    //         pessoaSorteada = pessoas[i]["Primeiro Nome"];
    //     }
    // }
    
    // console.log("numeroSorteado: ", numeroSorteado);
    // console.log("Pessoa sorteada: ", pessoaSorteada);



// FUNÇÕES
      // guardar código que não deve ser executado imediatamente
      // ser executada repetidas vezes em qualquer parte do código
      // escopo próprio
      // pode receber dados obrigatórios e/ou dados não obrigatórios
      // devolver dados (return)

      let testandoEscopo = "escopo";
      
        function minhaFuncao(param1, param2, param3 = 10) {
            return param1 + param2 + param3;
        }
        
        let calculo = minhaFuncao(2,5);
        console.log("calculo: ", calculo);

        function gerarNumerosAleatorios(min, max) {
            return Math.random() * (max - min) + min;
        }

        const numeroGerado = gerarNumerosAleatorios(50, 52);
        console.log("numeroGerado: ", numeroGerado);


        const minhaFuncao2 = () => {}

