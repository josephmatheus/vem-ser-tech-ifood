console.log("===== AULA 08 =====");

// function carregarDados() {
//   return fetch("./dados.json")
//     .then((resp) => resp.json()) // 1. converter para JSON
//     .then((resp) => console.log(resp)) // 2. logar a resposta
//     .catch((error) => console.error("Erro ao carregar dados"));
// }

// function consumirDados() {
//     carregarDados().then((resp) => console.log(resp));
//     // console.log("Dados", dados);
// }

async function carregarDados() {
    const resposta = await fetch("./dados.json")
    const dados = await resposta.json()

    console.log(dados);
}

carregarDados()