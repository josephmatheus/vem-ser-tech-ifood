// Resolução de exercicio da aula anterior

/**
 * Presentear os alunos com bolsas de estudos no curso de React. Alunos menores de 18 anos ganharão bolsas de 100% e maiores de 18 que estejam aptos para bolsas ganharão desconto de 50%. O valor do curso é de 250 reais. A bolsa será ofertada somente aos alunos que já estejam matriculados nos cursos de html, css e javascript. Será necessário gerar um relatório com uma lista dos alunos matriculados neste novo curso, ordenando do menor para o maior, com base nos níveis de conhecimento em javascript. O relatório também deverá contem o valor total de investimento da instituição.
 */

const matriculas = ["css", "html", "javascript"];

const listaFinal = pessoas.filter((pessoa) => {
  const regra1 = matriculas.every((curso, i) => curso == pessoa.matriculas[i]);
  const regra2 = pessoa.niveis.javascript > 5;

  return regra1 && regra2;
}).map((pessoa) => {
    pessoa.matriculas.push("react");
    return pessoa
}).sort((a, b) => a.niveis.javascript - b.niveis.javascript)

console.log("relatório: ", listaFinal);

const insvestimento = listaFinal.map((pessoa) => {
    let resultado;
    pessoa.idade < 18 ? resultado = 250 : resultado = 250 / 2;
    return resultado;
}).reduce((acumulador, atual) => {
    
    return acumulador + atual
});

console.log("investimento: ", insvestimento);