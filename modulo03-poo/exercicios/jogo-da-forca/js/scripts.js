console.log("===== JOGO DA FORCA =====");

let controlador;

async function carregarDados() {
    const resposta = await fetch("./dados.json");
    const dados = await resposta.json();

    return dados
}

carregarDados().then(dados => {
    controlador = new ControladorJogo(dados.palavras);
})
