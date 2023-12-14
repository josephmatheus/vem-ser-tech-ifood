class ControladorJogo {
  #palavrasSorteadas = ["javascript", "html", "react", "ifood"];

  comecarPartida() {
    let palavraSorteada =
      this.#palavrasSorteadas[
        Math.floor(Math.random() * (this.#palavrasSorteadas.length - 1))
      ];

    console.log("Partida iniciada!");

    return new Partida(palavraSorteada);
  }
}

class Partida {
  #letrasRecebidas = [];
  #palavra = [];
  #forca = [];
  #contadorErros = 0;
  #pontuacao = 0;

  constructor(palavraSorteada) {
    this.#palavra = palavraSorteada.toLowerCase();
    for (let index = 0; index < this.#palavra.length; index++) {
      this.#forca[index] = "_";
    }
  }

  chutarLetra(letra) {
    if (!letra) {
      console.warn("É obrigatório chutar uma letra");
    }
    if (this.#letrasRecebidas.includes(letra)) {
      console.warn("A letra já foi informada!");
    }
    this.#verificaChute(letra.toLowerCase());
    if (this.#contadorErros == 6) {
      throw new Error("O jogo acabou!");
    }
    this.exibePontuacao();
  }

  #verificaChute(letra) {
    if (letra.length > 1) {
      if (letra === this.#palavra) {
        let lacunas = this.#forca.filter((item) => item == "_");
        if (lacunas.length == 1) {
          this.#pontuacao += 15;
        } else {
          this.#pontuacao += lacunas.length * 7 + 10;
        }

        this.#forca = letra.split("");
      }
    } else {
      if (this.#palavra.includes(letra)) {
        this.#letrasRecebidas.push(letra);
        this.#pontuacao += 5;
        let lacunas = this.#forca.filter((item) => item == "_");
        let array = this.#palavra.split("");
        this.#forca.map((item, index) => {
          if (array[index] == letra) {
            this.#forca[index] = letra;
          }

          return item;
        });
        if (lacunas == 0) {
          return console.log(
            "Parabéns, você venceu o jogo. Sua pontuação foi:",
            this.exibePontuacao()
          );
        }
      } else {
        this.#letrasRecebidas.push(letra);
        this.#contadorErros++;
      }
    }
  }
  
  exibePontuacao() {
    console.log(this.#pontuacao, this.#forca);
  }
}
