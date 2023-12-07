# Programação Orientada a Objetos

## Aulas, Carga horária e Duração

|             | 2x na semana | 3x na semana |
| :---------: | :----------: | :----------: |
| **Aulas**   | 8            | 9            |
| **Carga**   | 24h          | 27h          |
| **Duração** | 4 semanas    | 3 semanas    |

## Planejamento

### Objetivos

- Compreender os conceitos envolvendo abstração de entidades da vida real para o código (TAD, modelos UML, ou qualquer conceito anterior à Orientação a Objetos).
- Compreender os conceitos envolvendo o paradigma de Programação Orientada a Objetos (POO).
- Compreender as diferenças entre o paradigma Funcional e o paradigma Orientado a Objetos.
- Conhecer os conceitos de classe e objeto e como estes se aplicam a Javascript.
- Conhecer os conceitos de construtor, atributos e métodos e como estes se aplicam a Javascript.
- Conhecer os conceitos de encapsulamento, getters e setters (métodos de acesso) e como estes se aplicam a Javascript.
- Conhecer os conceitos de herança e polimorfismo e como estes se aplicam a Javascript.
- Aprofundar os conceitos referentes ao Prototype, aplicando em diferentes classes já existentes (Array, Math, Date, dentre outras).
- Construir um projeto utilizando os conceitos vistos no módulo, juntamente com os dos módulos anteriores.

### Conteúdos

- Conceitos referentes à abstração de dados e entidades reais (TAD, modelos UML, ou qualquer conceito anterior à Orientação a Objetos).
- Conceitos de classe e objeto, através de vários exemplos.
- Conceitos de construtor, atributos e métodos, estendendo os exemplos já mostrados.
- Conceitos de encapsulamento e getters e setters, estendendo os exemplos já mostrados.
- Conceitos de herança e polimorfismo, estendendo os exemplos já mostrados.
- Conceitos de prototype de uma classe, ou seja, como criar novos métodos dentro de classes já existentes (Array, Math, Date, dentre outras).
- Exemplos práticos de projetos em Javascript utilizando Orientação a Objetos.

### Bibliografia

- Links:
  - <https://www.devmedia.com.br/poo-trabalhando-com-classes-e-objetos-em-javascript/28434>
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes>
  - <https://www.w3schools.com/js/js_classes.asp>

### Metodologia

- Realização de exemplos em sala em conjunto com os alunos.
- Debates e enquetes.
- Dinâmicas e desafios.
- Exercícios práticos.
- Estimular a cooperação, a competitividade saudável e a participação dos alunos durante a aula e durante a realização dos exercícios.

### Avaliação

- Projetos práticos, tanto de escopo fechado (atividades de fixação) quanto de escopo aberto (atividades principais)
- Perguntar durante as aulas para estimular a lembrança do conteúdo da aula anterior ou de conteúdos de módulos anteriores

### Observações

- Os requisitos mínimos para este módulo são os conteúdos vistos nos módulos:
  - FE-JS-001 Front-End Estático (JS/TS)
  - FE-JS-002 Lógica de Programação I (JS/TS)

---

## Plano de Aulas

### [Aula 1](./aula-01/)

- Problema Gerador:
  - Montar um diagrama UML Simplificado e começar a construir uma classe com atributos

- Conceitos:
  - Apresentação da metodologia do módulo
  - Mostrar como conseguimos representar entidades atualmente no código (limitação do paradigma funcional)
  - Explicação sobre TADs e abstração de dados no geral
  - Atributos como características que ajudam a definir um objeto, uma instância, de uma classe
  - Atributos existentes podem ser acessados e sobrescritos, enquanto novos podem ser adicionados a objetos, porém não à classe
  - Diferença entre objetos e instâncias de uma classe
  - Espaço para a realização da atividade de fixação

- Metodologia:
  - Estudo de caso:
    - Modelar e Implementar as classes carro, cachorro, etc.
  - Prático:
    - Atividade de fixação 1 (escopo fechado):
      - Criar uma classe para pelo menos três entidades que representam formas geométricas
      - Cada classe deve possuir atributos dentro do construtor (valores padrão devem ser passados para os parâmetros necessários)

---

### [Aula 2](./aula-02/)

- Problema Gerador:
  - Como representar ações relacionadas a uma entidade?

- Conceitos:
  - Apresentação do conceito de métodos
  - Espaço para a realização da atividade de fixação

- Metodologia:
  - Estudo de caso:
    - Implementar métodos nas classes usadas como exemplo na aula anterior
  - Prático:
    - Atividade de fixação 2 (escopo fechado):
      - Criar métodos úteis para o contexto de cada forma geométrica;
      - No mínimo 2 funções que calculam área e perímetro da forma geométrica;

---

### [Aula 3](./aula-03/)

- Problema Gerador:
  - Como garantir a segurança na alteração dos valores de atributos?

- Conceitos:
  - É possível criar variáveis privadas em JS?
  - Métodos de acesso como solução para acessar e editar atributos "privados", ou para deixar mais intuitivo para quem está utilizando

- Metodologia:
  - Estudo de caso:
    - Implementar encapsulamento nas classes utilizadas nas aulas anteriores
  - Prática:
    - Atividade de fixação 3 (escopo fechado):
    - Criar métodos getters e setters úteis para o contexto de cada forma geométrica;

---

### [Aula 4](./aula-04/)

- Problema Gerador:
  - Como criar uma classe genérica e fazer outras classes "herdarem" propriedades dela?

- Conceitos:
  - Conceitos de herança e polimorfismo mostrados através de múltiplos exemplos (veículos, animais, entre outros)
  - Conceitos de atributo/variável estática de uma classe
  - Mostrar o funcionamento do prototype e aprofundar sobre como ele funciona de fato

- Metodologia:
  - Estudo de caso:
    - Implementar uma classe que herde de outra, usando as classes utilizadas nas aulas anteriores
    - Implementar algum exemplo válido de variável estática
  - Prática:
    - Atividade principal 1 (escopo aberto):
    - **PRINCIPAL**
      - Pensem em um catálogo/cardápio digital em HTML;
      - Modelem as entidades necessárias imaginando possibilidade de compra, cadastro, edição e deleção de itens (entregar o UML simplificado);
      - Utilizar todos os conceitos vistos em sala de aula até o momento, de forma que faça sentido para o contexto do projeto
      - Criar pelo menos uma função utilizando prototype;
    - **EXTRA**
      - Criar um HTML para mostrar o catálogo;
      - Deve possuir um formulário para cadastro de produtos.

---

### Aula 5

- Problema Gerador:
  - Como criar uma To-Do List do zero?

- Conceitos:
  - Abordar todos os conceitos de OO, e os principais de lógica de programação, já vistos para estruturar este projeto
  - O projeto deve abordar todas as etapas de um CRUD
  - Montar junto com os alunos em sala de aula

- Metodologia:
  - Estudo de caso:
    - Implementar um projeto de To-Do List usando OO
    - Implementar algum exemplo válido de variável estática
  - Prática:
    - Atividade de fixação 4 (escopo fechado):
      - Criar um botão para executar a função de edição;
      - O botão deve levar a uma página com os campos preenchidos.

---

### Aula 6

- Problema Gerador:
  - Como criar uma To-Do List do zero?

- Conceitos:
  - Reforçar conceitos já apresentados

- Metodologia:
  - Estudo de caso:
    - Continuar com a implementação da aula anterior
  - Prática:
    - Sem exercício de fixação. Pode ser aberto um espaço para a implementação do trabalho de escopo aberto proposto na Aula 04.

---

### Aula 7

- Problema Gerador:
  - Aula dedicada à implementação da atividade, de preferência em grupo

- Conceitos:

- Metodologia:
  - Prática:
    - Atividade principal 2 (escopo aberto):
    - **PRINCIPAL**
      - Criar um jogo da forca usando OO;
      - Pelo menos três classes para três entidades presentes no sistema do jogo (GameController, Player e Match);
      - O usuário deve poder chutar a palavra de uma vez;
      - O usuário deve poder jogar/tentar novamente (reiniciar);
      - Deve haver uma dica ou tema visualmente indicados;
      - O jogo deve possuir pontuação;
    - **EXTRA**
      - Buscar as palavras em uma API externa;
      - Criar um teclado virtual (manipulação do DOM).

---

### Aula 8

~ *Aula dedicada à implementação da atividade, de preferência em grupo, proposta na aula anterior* ~

---

### Aula 9

- *Aula dedicada à devolutiva da avaliação por rubrica / auto-avaliação*

- *Opcional: correção síncrona da Atividade Principal 02*

- *Opcional: desenvolver uma dinâmica no Kahoot com perguntas a respeito do conteúdo do módulo*

- *Opcional: dinâmica no MENTI para perguntar sobre o que os alunos acharam do módulo e da metodologia aplicada*

---
