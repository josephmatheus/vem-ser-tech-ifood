class Contato {
  static contador = 0;

  constructor(valorDoNome, valorDoTelefone, valorDaDataNascimento) {
    if (!valorDoNome || !valorDoTelefone || !valorDaDataNascimento) {
      throw new Error("Nome, Telefone e Data de Nascimento são obrigatórios");
    }
    this.nome = valorDoNome;
    this.telefone = valorDoTelefone;
    this.dataNascimento = valorDaDataNascimento;
    Contato.contador++;
  }
}

class Agenda {
  constructor() {
    this.contatos = [];
  }

  adicionarContatos(contato) {
    // se o parametro contato for de tipo diferente de Contato, retornar mensagem de erro
    if (!(contato instanceof Contato)) {
      throw new Error("Somente contatos podem ser adicionados à agenda");
    }
    this.contatos.push(contato);
  }

  buscarContato(nome) {
    const contatosEncontrados = [];
    this.contatos.map((contato) => {
      if (nome.toLowerCase() === contato.nome.toLowerCase()) {
        contatosEncontrados.push(contato);
        console.log("contatos encontrados: ", contatosEncontrados);
      } else {
        console.log("Contato não encontrado");
      }
    });
  }

  removerContato(nome) {
    this.contatos.map((contato, index) => {
      if (nome.toLowerCase() === contato.nome.toLowerCase()) {
        this.contatos.splice(index, 1);
        console.log(this.contatos);
      } else {
        console.log("Contato não encontrado");
      }
    });
  }
}

class Utils {
    static calcularIdade(dataNascimento) {
        const anoAtual = new Date().getFullYear();
        const anoContato = Number(dataNascimento.split("-")[2])

        return anoAtual - anoContato;
    }

    static naoEVazio(valor) {
        // != null
        // != undefined
        // Se String != ""
        if (valor !== null && valor !== undefined && valor !== "") {
            return "Não é vazio"
        } else {
            return "Vazio"
        }
    }
}
