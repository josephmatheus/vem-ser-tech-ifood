// TIPOS PRIMITIVOS

    // undefined
    let saida;
    // null
    saida = null;
    // boolean
    saida = true;
    // string
    saida = "Joseph";
    // number
    saida = 5;
    // NaN
    saida = "texto" - 5;

// operadores aritmeticos

    saida = 1 + 1;
    saida = 5 * 1;
    saida = 5 / 1;
    saida = 5 + 5 / 10
    saida = (5 + 5) / 10
    saida = 10 % 2

    // ex: MEDIA
    const [n1, n2, n3] = [5, 7, 5];
    saida = (n1 + n2 + n3) / 3;

    // FUNÇÕES E PROPRIEDADES NATIVAS
    // Strings
    let nome = "Angular";
    
    saida = nome.length;
    saida = nome.charAt(0);
    saida = nome.includes("gu");
    saida = nome.indexOf("gu");
    saida = nome.toLocaleLowerCase();
        // Ex: capitalized
        saida = nome.charAt(0).toUpperCase() + nome.slice(1);
    
    // numbers
    let peso = 70.5567;
    let idade = "37 anos";
    let altura = "1.70";

    saida = peso.toFixed(2);
    saida = Number.parseInt(peso);
    saida = Number.parseFloat(idade);

// MATH
    saida = Math.ceil(peso);
    saida = Math.floor(peso);
    saida = Math.abs(100 - 500);
    saida = Math.min(100, 500);
    saida = Math.max(100, 500);
    saida = (Math.random() * 50).toFixed(0);
    
    // const minimo = parseFloat(prompt("qual o valor minimo?"));
    // const maximo = parseFloat(prompt("qual o valor máximo?"));
    // saida = Math.floor(Math.random() * (maximo - minimo) + minimo);

    // Ex: numero randomico
    // Exemplo numero randomico com prompt
    // Exercicio numero randomico minimo e maximo
    // alert(saida);
// ARRAY

    const cursoAngular = "Angular";
    let meuArray = [ cursoAngular, 20, "React", false, ["oi", 2, 3], null ];

    saida = meuArray[4][0];
    console.log(saida);
    // Exercicio -> capturar notas com prompt e mostrar media.