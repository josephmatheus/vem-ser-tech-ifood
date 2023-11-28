# Lógica de Programação I

## Aulas, Carga horária e Duração

|             | 2x na semana | 3x na semana |
| :---------: | :----------: | :----------: |
| **Aulas**   | 8            | 9            |
| **Carga**   | 24h          | 27h          |
| **Duração** | 4 semanas    | 3 semanas    |

## Planejamento

### Objetivos

- Apropriação das técnicas de uso da memória volátil do computador (RAM)
- Entendimento do funcionamento do sistema de tipos da linguagem
- Apropriação das técnicas de endereçamento de variáveis e constantes com múltiplos valores (vetores/matrizes) e tipos chave-valor
- Apropriação das técnicas de aritmética computacional e de funções básicas
- Apropriação das técnicas de uso de condicionais e quebras de fluxos
- Apropriação das técnicas de uso de laços de repetição condicionais e numéricos
- Apropriação das técnicas de uso de laços de repetição para percorrer vetores e matrizes
- Entendimento de princípios e apropriação de técnicas para reaproveitamento e modularização de código
- Entendimento de segregação de responsabilidades e sua aplicação em programas estruturados
- Apropriação das técnicas de criação e uso de funções e de assinaturas, composição e encadeamento de funções
- Entendimento da importância e apropriação das técnicas de tratamento e lançamento de erros
- Entendimento e apropriação de uso de softwares de versionamento (GIT) para desenvolvimento em times

### Conteúdos

- Sistema de Tipos (type system) da linguagem
- Estados
- Constantes e Variáveis (valores únicos) e sua relação com o conceito matemático
- Uso de funções nativas da linguagem
- Coerções (mudança de tipos)
- Operadores e aritmética
- Vetores e Matrizes (valores múltiplos) e sua relação com o conceito matemático
- Dicionários / Objetos
- Quebra de fluxo e tomada de decisão
- Condicionais ``IF/ELSE``
- Condicionais ``SWITCH``
- Condicional ternário
- Operadores de Coalescência
- Laços de repetição condicionais (``WHILE DO-WHILE``)
- Laços de repetição numéricos (``FOR, FOR-IN, FOR-OF``)
- Busca simples em vetores e matrizes
- Funções e assinaturas
- Parametrização de funções
- Composição e encadeamento (pipe) de funções
- Funções de alta-ordem
- Tratamento de erros try-catch-finally

### Bibliografia

- Links:
  - <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference>

- Livros:
  - Javascript: The Definitive Guide: Master the World's Most-Used Programming Language
  - Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming

### Metodologia

- Listas de exercícios individuais
- Estudos de Caso em duplas (mini-projeto)
- Pesquisa individual na documentação

### Avaliação

- Listas de exercícios
- Prova teórico-prática
- Projeto

### Observações

- Se [FE-TS-001] o foco deve ser em frontend usando navegador.
- Se [BE-TS-001] o foco deve ser em backend usando nodejs.

---

## Plano de Aulas

### [Aula 1](./aula-01/)

- Problema Gerador:
  - Médias e Médias Ponderadas

- Conceitos:
  - Sistema de Tipos (type system) da linguagem
  - Estados
  - Constantes e Variáveis (valores únicos) e sua relação com o conceito matemático
  - Uso de funções nativas da linguagem e IO
  - Coerções (mudança de tipos)
  - Operadores e aritmética

- Metodologia:
  - Estudo de caso:
    - Como fazer um programa que calcule médias e médias ponderadas a partir da entrada do usuário?
  - Expositiva:
    - Sistema de Tipos e Tipos nativos do JS
  - Pesquisa individual:
    - Descobrir na documentação/fóruns quais são as funções de coerção de tipos do
  - Prático:
    - Exercícios de fixação (Variáveis/Constantes/Aritmética)

---

### [Aula 2](./aula-02/)

- Problema Gerador:
  - Médias e Médias Ponderadas (usando listas)

- Conceitos:
  - Vetores e Matrizes (valores múltiplos) e sua relação com o conceito matemático

- Metodologia:
  - Estudo de caso:
    - Como fazer um programa que calcule médias e médias ponderadas, de três notas a partir das entradas do usuário (sem laço)?
  - Expositiva:
    - Vetores e Matrizes em JS e funções básicas
  - Pesquisa individual:
    - Descobrir na documentação/fóruns as demais funções de array
  - Prático:
    - Exercícios de fixação (Vetores/Matrizes)

---

### [Aula 3](./aula-03/)

- Problema Gerador:
  - Agenda de contatos
  - Dicionário de sinônimos

- Conceitos:
  - Dicionários / Objetos

- Metodologia:
  - Estudo de Caso 1:
    - Como fazer uma agenda de contatos que armazene vários contatos em um array, modelando o "contato" como um objeto?
  - Estudo de Caso 2:
    - Como fazer um dicionário de sinônimos usando um array associativo ou usando Map no js?
  - Expositiva:
    - Conceito de Array associativo e Map Conceito de objeto
  - Prático:
    - Exercícios de fixação (objetos, arrays associativos, Map).

---

### [Aula 4](./aula-04/)

- Problema Gerador:
  - Médias que dizem "passou" ou "não passou"
  - Agenda de contatos com validação dos dados

- Conceitos:
  - Quebra de fluxo e tomada de decisão
  - Condicionais IF/ELSE
  - Condicionais SWITCH
  - Condicional ternário (``? :``)
  - Operadores de Coalescência (``??`` e ``?.``)
  - Conceito de Truthy/Falsy
  - Operadores Lógicos (``&& ||``)

- Metodologia
  - Estudo de Caso 1:
    - Como fazer um programa que calcule médias e diga se o aluno passou ou não a partir de uma nota de corte pré-estabelecida. E se adicionarmos presenças?
  - Estudo de Caso 2:
    - Como adicionar validações na agenda?
  - Expositiva:
    - Operadores condicionais, Lógicos e Ternários
  - Pesquisa individual:
    - Descobrir na documentação/fóruns o conceito de Truthy/Falsy
  - Prático:
    - Exercícios de fixação (``if/else e switch``).

---

### [Aula 5](./aula-05/)

- Problema Gerador:
  - Jogo da adivinhação (responder até acertar o número sorteado)
  - Agenda de contatos com validação dos dados, imputar até ser válido

- Conceitos:
  - Laços de repetição condicionais (``WHILE DO-WHILE``)

- Metodologia:
  - Estudo de Caso 1:
    - Como fazer um programa que sorteia um número entre dois inteiros e mantém o usuário respondendo até que ele acerte, provendo um feedback se o número chutado foi maior ou menor que o sorteado?
  - Estudo de Caso 2:
    - Como adicionar validações, que solicitam os dados novamente até que sejam válidos?
  - Expositiva:
    - While / Do while (semelhanças e diferenças)
  - Prático:
    - Exercícios de fixação (``while/do-while``).

---

### [Aula 6](./aula-06/)

- Problema Gerador:
  - Jogo de dados
  - Busca linear

- Conceitos:
  - Laços de repetição numéricos ``for, for-in, for-of``

- Metodologia:
  - Estudo de Caso 1:
    - Como fazer um simulador de rolagem de dados, que receba como input N dados de M lados e mostre as rolagens individuais e a soma dos valores?
  - Estudo de Caso 2:
    - Como fazer uma busca simples em um vetor de tamanho N?
  - Expositiva:
    - For
  - Pesquisa individual:
    - For para percorrer indices e for para percorrer valores
  - Prático:
    - Exercícios de fixação (``for/for-in/for-of``).

---

### [Aula 7](./aula-07/)

- Problema Gerador:
  - Transformar o jogo de dados em uma funcionalidade reaproveitável

- Conceitos:
  - Funções e assinaturas
  - Parametrização de funções
  - Composição e encadeamento (pipe) de funções

- Metodologia:
  - Estudo de Caso 1:
    - Como transformar o jogo dos dados em uma funcionalidade que possa ser usada por um sistema?
  - Expositiva:
    - Funções e Assinaturas
  - Prático:
    - Exercícios de fixação (funções).

---

### [Aula 8](./aula-08/)

- Problema Gerador:
  - Como evitar que seu sistema exploda?

- Conceitos:
  - Tratamento de erros
  - ``try / catch / finally``

- Metodologia:
  - Estudo de Caso 1:
    - Como capturar os erros e decidir se o sistema deve continuar ou parar?
    - Como criar meus próprios erros?
  - Expositiva:
    - ``try / catch / finally / Error Object``
  - Prático:
    - Exercícios de fixação (tratamento de erros).

---

### Aula 9

~ *Aula dedicada à devolutiva da avaliação por rubrica / auto-avaliação* ~

---
