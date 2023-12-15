class Partida {
  static MAXIMO_ERROS = 6;

  #palavra;
  #letrasUtilizadas = [];
  #pontuacao = 0;
  #erros = 0;
  #resultado = [];

  constructor(palavra) {
    this.#palavra = palavra?.toLowerCase();
    this.#resultado = "_".repeat(this.#palavra.length).split("");
  }

  chutar(valor) {
    if (valor?.length === 1) {
      this.#chutarLetra(valor);
    } else {
      this.#chutarPalavra(valor);
    }
  }

  get finalizada() {
    const atingiuLimiteDeErros = this.#erros === Partida.MAXIMO_ERROS;
    const acertouPalavra = !this.#resultado.includes("_");

    return atingiuLimiteDeErros || acertouPalavra;
  }

  get resultado() {
    return this.#resultado.join(" ");
  }

  #chutarLetra(letra) {
    letra = letra?.toLowerCase();

    const letraJaFoiUtilizada = this.#letrasUtilizadas.includes(letra);
    if (letraJaFoiUtilizada) return;

    this.#letrasUtilizadas.push(letra);

    const letraCorreta = this.#palavra.includes(letra);
    if (letraCorreta) {
      this.#pontuacao += 5;
      this.#manipularResultado(letra);
    } else {
      this.#erros++;
    }
    this.#verificarPartidaFinalizada();
  }

  #chutarPalavra(palavra) {
    palavra = palavra?.toLowerCase();

    const palavraCerta = this.#palavra === palavra;

    if (palavraCerta) {
      const qtdLacunas = this.#resultado.filter((item) => item === "_").length;

      if (qtdLacunas <= 1) {
        this.#pontuacao += 5 + 10;
      } else {
        this.#pontuacao += qtdLacunas * 7 + 10;
      }

      this.#resultado = palavra.split("");
    } else {
      this.#erros++;
    }
  }

  #manipularResultado(letra) {
    const caracteresPalavra = this.#palavra.split("");
    caracteresPalavra.forEach((item, indice) => {
      if (letra === item) {
        this.#resultado[indice] = item;
      }
    });
  }

  #verificarPartidaFinalizada() {
    const existeLacuna = this.#resultado.includes("_");
    if (!existeLacuna) {
      this.#pontuacao += 10;
    }
  }
}

class ControladorJogo {
  #palavras = [];
  #partida;

  constructor(palavras) {
    this.#palavras = palavras;
    this.#iniciarPartida();
  }

  chutar(valor) {
    if (this.#partida.finalizada) {
      throw new Error("A partida já está finalizada");
    }

    this.#partida.chutar(valor);
    console.log(this.#partida.resultado);
  }

  #iniciarPartida() {
    const palavraAleatoria = this.#obterPalavraAleatoria();
    this.#partida = new Partida(palavraAleatoria);
  }

  #obterPalavraAleatoria() {
    const indiceAleatorio = Math.floor(
      Math.random() * (this.#palavras.length - 1)
    );

    return this.#palavras[indiceAleatorio];
  }
}
