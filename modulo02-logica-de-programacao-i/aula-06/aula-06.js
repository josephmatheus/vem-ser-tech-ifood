//? CONTINUAÇÃO FUNÇÕES...
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
        // console.log("calculo: ", calculo);

        // const minhaFuncao2 = function gerarNumerosAleatorios(min, max) {
        function gerarNumerosAleatorios(min, max, callback) {
            // console.log("executou a funcao");
            const resposta = Math.random() * (max - min) + min;

            callback();

            return resposta;
        }

        // saida = gerarNumerosAleatorios(90, 95, function(){ console.log("callback foi chamado") });
        // console.log("saida: ", saida);


        function mostrarModal(mensagem) {
          setTimeout(function () {
            mensagem();
          }, 5000);
        }
        
        // mostrarModal(function(){ console.log("parabens você foi premiado") });


        const minhaArrow = (num1, num2) => num1 + num2;
        const minhaArrow2 = texto => texto + "!!!!!";

        saida = minhaArrow(5, 10);
        // console.log("saida: ", saida);


        // Exercicio

        const pessoa = {
          "Primeiro Nome": "Araújo",
          ultimoNome: "Lima",
          idade: 25,
          corOlhos: "Castanho-escuro",
          habilidades: ["Javascript", "HTML", "CSS"],
          níveis: {
            css: 8,
            javascript: 10,
            html: 10,
          },
        };

        //TODO - ADICIONAR PESSOA
        
        // console.log("antes de adicionar: ", JSON.parse(JSON.stringify(pessoas)));
        
        let resposta = "Lima"
        function addPessoa(nome) {
            const { ...usuario } = pessoa;
            usuario["Primeiro Nome"] = nome;
            pessoas.push(usuario);
        }
        
        
        addPessoa(resposta);
        
        // console.log("depois de adicionar: ", JSON.parse(JSON.stringify(pessoas)));

        //TODO - REMOVER PESSOA
        
        function removerPessoa(nome) {
            for (let i = 0; i < pessoas.length; i++) {
                if (pessoas[i]["Primeiro Nome"] === nome) {
                    pessoas.splice(i, 1);
                }
            }
        }
        
        resposta = "Joseph"

        removerPessoa(resposta);

        // console.log("depois de remover: ",JSON.parse(JSON.stringify(pessoas)));

        //TODO - ATUALIZAR PESSOA

        let nomeAtualizar = "Matheus";
        let novaHabilidade = "React";

        function atualizarHabilidade(nome, callback) {
          for (let i = 0; i < pessoas.length; i++) {
            if (pessoas[i]["Primeiro Nome"] === nome) {
              callback(pessoas[i], novaHabilidade);
            }
          }
        }

        function newSkill(pessoa, skill){
          pessoa.habilidades.push(skill);
        }

        atualizarHabilidade(nomeAtualizar, newSkill);

        // console.log("depois de atualizar: ",JSON.parse(JSON.stringify(pessoas)));


// INTRODUÇÃO A HOF's ( Higher Order Functions )

    let minhasFrutas = ["Banana", "Melancia", "Laranja", "Laranja-Cravo"];

    // minhasFrutas.forEach(function(e, i, a){
    //     console.log("e", e);
    //     console.log("i", i);
    //     console.log("a", a);
    //     console.log("--------------");
    // });

    minhasFrutas.forEach((e, i, a) => {
        console.log("e", e);
        console.log("i", i);
        console.log("a", a);
        console.log("--------------");
    });

    // find() some() map() sort() findIndex() filter() every() call() bind() reduce() sort()


