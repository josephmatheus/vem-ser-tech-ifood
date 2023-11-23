// this.minhaPropriedade = "conteudo propriedade";

// console.log(this.minhaPropriedade);

this.frutas = ["laranja", "maçã", "melancia"]

function minhaFuncao(){
    this.minhaPropriedade = "conteudo propriedade";
    console.log("dentro frutas --> ", this.frutas);
}

const minhaFuncao2 = () => {
    this.minhaPropriedade = "conteudo propriedade";
    // console.log("dentro frutas --> ", this.frutas);
};

minhaFuncao()
minhaFuncao2()

console.log("dentro da funcao --> ", this.minhaPropriedade);