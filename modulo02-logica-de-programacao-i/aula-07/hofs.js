// MAP
    // modificar o array
    // retorna um novo array com a mesma quantidade de posições que o array original podendo personalizar 100% o conteúdo de cada posição deste array.
    // editar

    saida = ["banana","maça","laranja"].map(()=>{
        return 1
    })
   


// FILTER
    // saber se tem uma informação dentro de um array
    // novo array filtrado 
    // busca
    // retorna um novo array com a quantidade de items variáveis com base em uma condição.


// FILTER + MAP (encadeamento)
    const numeros = [1, 2, 3, 4, 5, 6];

    saida = numeros.map((e) => {
        if (e < 4) {
            return e
        }
    }).filter((e) => e != undefined)
    
    // retorno -> saida:  [ 1, 2, 3 ]

// FIND
    // Retorna um array com um único, sendo este item o primeiro que retornar TRUE na condição.
    // Quando queremos retornar um array com um único item 
    saida = numeros.find((e) => e > 3)

    // retorno -> saida:  4

// SOME
    // Busca um elemento dentro do array. Se existe este elemento retorna TRUE, caso contrário FALSE
    saida = numeros.some((e) => e == 3);

    // retorno -> saida:  true

// EVERY 
    // Retorna sempre um booleano.
    // Se todos os itens do array passarem na condição retorna TRUE, caso contrário FALSE
    saida = numeros.every((e) => e < 10);

    // retorno -> saida:  true

// REDUCE
    // const numeros = [1, 2, 3, 4, 5, 6];
    saida = numeros.reduce((acumulador, atual) => {
        // console.log("acumulador: ", acumulador);
        return acumulador + atual
    })

    // retorno -> saida: 21

// SORT
    // 
    const frutas = ["Banana", "Abacate", "Pêssego"];
    saida = frutas.sort()
    saida = numeros.sort((a, b) => b - a)

    console.log("saida: ", saida)
    