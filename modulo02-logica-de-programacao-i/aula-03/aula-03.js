// ARRAY

const cursoAngular = "Angular";
let meuArray = [cursoAngular, 20, "React", false, ["oi", 2, 3], null];

saida = meuArray[4][0];

saida = meuArray.length;
saida = Array.from(meuArray);
saida = meuArray.slice(1, 6);
// saida = meuArray.pop();
saida = meuArray.shift();
saida = meuArray.push("Vue");
saida = meuArray.unshift("Next");

// copiar arrays
// saida = meuArray.slice();
// saida.pop()

saida = meuArray;
saida.pop();

// unir arrays
saida = [...meuArray, ...meuArray];

// console.log("Array de saída: ", saida);
// console.log("Array original: ", meuArray);

// OBJETOS

const pessoa = {
  "Primeiro Nome": "Joseph",
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

// saida = pessoas.primeiroNome;
// saida = pessoa["primeiroNome"];
// pessoa.idade = 28;
// pessoa.altura = 1.78;

// saida = Object.keys(pessoa);

// Desestruturação
// const { idade: _idade } = pessoa; // mudando o nome de uma variável

// console.log("cadastro inicial: ", pessoas);

let resposta;

// resposta = prompt("Add pessoa1");
const { ...usuario1 } = pessoa;
usuario1["Primeiro Nome"] = resposta;
pessoas.push(usuario1);

// resposta = prompt("Add pessoa2");

// console.log("usuarios cadastrados: ", pessoas);

// OPERADORES DE COMPARAÇÃO
// ==, !=, >, <, >=, <=, ===

saida = 5 == 5;
saida = 5 != 5;
saida = "murilo" == "Murilo";
saida = 10 > 10;
saida = 10 < 10;
saida = 10 >= 10;
saida = 10 <= 10;

saida = 10 == 10; //true
saida = 10 == "10"; //true
saida = 10 === "10"; //false

//exercicio, verificar se numero é par
const meuNum = 5;
saida = meuNum % 2 === 0;

// OPERADORES LÓGICOS
// ||, &&

saida = 2 == 2 && 4 > 5; // false
saida = 2 == 2 && 4 < 5; // true

saida = 2 == 2 || 4 > 5; // true

saida = !(2 == 2) || 4 > 5; // false

// Exemplo de uso do NOT - toggle
let estado;
estado = !estado;

//exercicio - verificar se uma palavra inicia com a vogal
const palavra = "Apple";
const letra = palavra.charAt(0).toLowerCase();
const vogal = "a" == letra || "e" == letra || "i" == letra || "o" == letra || "u" == letra;

console.log("SAÍDA: ", vogal);
