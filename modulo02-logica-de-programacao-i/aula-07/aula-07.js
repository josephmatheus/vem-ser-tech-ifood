// INTRODUÇÃO A HOF's ( Higher Order Functions )

let minhasFrutas = ["Banana", "Melancia", "Laranja", "Laranja-Cravo"];

// minhasFrutas.forEach(function(e, i, a){
//     console.log("e", e);
//     console.log("i", i);
//     console.log("a", a);
//     console.log("--------------");
// });

// minhasFrutas.forEach((e, i, a) => {
//     console.log("e", e);
//     console.log("i", i);
//     console.log("a", a);
//     console.log("--------------");
// });

// find() some() map() sort() findIndex() filter() every() call() bind() reduce() sort()

//? Festa - Lista de convidados - Idade - Nome

const listaConvidados = [
    {
        nome: "Samuel",
        idade: 25
    },
    {
        nome: "Cássia",
        idade: 18
    },
    {
        nome: "Eduardo",
        idade: 57
    },
    {
        nome: "Vitor",
        idade: 15
    },
    {
        nome: "José",
        idade: 82
    }
]

// Quem for menor de 18 não pode beber
// Quem for maior de 18 não pode ir nos brinquedos
// quem for maior de 18 e menor de 75 pode tomar energético

console.log("Lista de convidados");
console.table(listaConvidados);

let pessoasQuePodeBeber = listaConvidados.filter((convidado, index, array) => {
    if (convidado.idade >= 18) {
        return true;
    } else {
        return false;
    }
});

// let pessoasQuePodeBeber = listaConvidados.filter(el => el.idade >= 18);

let pessoasQuePodemIrNosBrinquedos = listaConvidados.filter((convidado, index, array) => {
    if (convidado.idade < 18) {
        return true;
    } else {
        return false;
    }
})

let pessoasQuePodemBeberEnergetico = listaConvidados.filter((convidado, index, array) => {
    if (convidado.idade >= 18 && convidado.idade < 75) {
        return true;
    } else {
        return false;
    }
})

// listaConvidados.forEach((convidado, index, array) => {
//     if (convidado.idade >= 18) {
//         pessoasQuePodeBeber.push(convidado);
//     }
// })


// console.log("Convidados que podem beber:");
// console.table(pessoasQuePodeBeber);

// console.log("Convidados que podem ir nos brinquedos:");
// console.table(pessoasQuePodemIrNosBrinquedos);

// console.log("Convidados que podem tomar energético:");
// console.table(pessoasQuePodemBeberEnergetico);

// const listaDePresenca = listaConvidados.map((convidado, index, array) => {
//     const presente = prompt(`O convidado ${convidado.nome} apareceu? (S/N)`).toUpperCase();
//     return {
//         ...convidado,
//         nome: convidado.nome.toUpperCase(),
//         presente: presente
//     }
// })

// console.log("Lista de presença");
// console.table(listaDePresenca);


// EXERCICIO PARA PROXIMA AULA

/**
 * Presentear os alunos com bolsas de estudos no curso de React. Alunos menores de 18 anos ganharão bolsas de 100% e maiores de 18 que estejam aptos para bolsas ganharão desconto de 50%. O valor do curso é de 250 reais. A bolsa será ofertada somente aos alunos que já estejam matriculados nos cursos de html, css e javascript. Será necessário gerar um relatório com uma lista dos alunos matriculados neste novo curso, ordenando do menor para o maior, com base nos níveis de conhecimento em javascript. O relatório também deverá contem o valor total de investimento da instituição.
 */
