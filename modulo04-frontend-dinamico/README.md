# Front End Dinâmico

## Aulas, Carga horária e Duração

|             | 2x na semana | 3x na semana |
| :---------: | :----------: | :----------: |
| **Aulas**   | 8            | 9            |
| **Carga**   | 24h          | 27h          |
| **Duração** | 4 semanas    | 3 semanas    |

## Planejamento

### Objetivos

- Compreender o funcionamento dos diferentes tipos seletores
- Compreender como é feita a manipulação de DOM a partir dos seletores
- Compreender os eventos presentes nos elementos HTML (input, button, dentre outros)
- Compreender como é feita a adição e remoção de classes e estilização através do Javascript
- Entender como persistir os dados em arquivos separados e principalmente nas áreas de armazenamento do browser (LocalStorage e SessionStorage)
- Entender a diferença entre os tipos de armazenamento (LocalStorage e SessionStorage)
- Compreender sobre chamdas assíncronas em Javascript
- Entender o funcionamento das funções setInterval / setTimeout e como elas se aplicam no contexto de chamadas assíncronas
- Apresentação do conceito de Promises e suas callbacks
- Compreender a utilização de Promises no contexto de chamadas assíncronas e suas variações (Promise.all e Promise.race)
- Compreender as diferenças, vantagens e desvantagens do uso de callbacks, Promises e async/await

### Conteúdos

- Conceitos referentes à abstração de dados e entidades reais (TAD, modelos UML, ou qualquer conceito anterior à Orientação a Objetos)
- Conceitos de classe e objeto, através de vários exemplos
- Conceitos de construtor, atributos e métodos, estendendo os exemplos já mostrados
- Conceitos de encapsulamento e getters e setters, estendendo os exemplos já mostrados
- Conceitos de herança e polimorfismo, estendendo os exemplos já mostrados
- Conceitos de prototype de uma classe, ou seja, como criar novos métodos dentro de classes já existentes (Array, Math, Date, dentre outras)
- Exemplos práticos de projetos em Javascript utilizando Orientação a Objetos

### Bibliografia

- Links:
  - <https://www.w3schools.com/js/js_htmldom.asp>
  - <https://developer.mozilla.org/en-US/docs/Web/API/Document>
  - <https://www.w3schools.com/js/js_callback.asp>
  - <https://www.w3schools.com/js/js_asynchronous.asp>
  - <https://www.w3schools.com/js/js_promise.asp>
  - <https://www.w3schools.com/js/js_async.asp>
  - <https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage>
  - <https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>

### Metodologia

- Realização de exemplos em sala em conjunto com os alunos
- Debates e enquetes
- Dinâmicas e desafios
- Exercícios práticos
- Estimular a cooperação, a competitividade saudável e a participação dos alunos durante a aula e durante a realização dos exercícios

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
  - Como alterar o HTML utilizando o Javascript?

- Conceitos:
  - Apresentação da metodologia do módulo
  - Representações da Janela e do DOM no Javascript (objetos window e document)
  - Acessando um elemento HTML através do seu id (getElementById)
  - Acessando elementos HTML através de suas classes (getElementsByClassname)
  - Apresentação de exemplos com outros seletores e querySelectors (diferenças, vantagens e desvantagens)
  - Apresentação de exemplos com outros seletores e querySelectors (diferenças, vantagens e desvantagens)
  - Acessando e manipulando o conteúdo dentro de uma tag HTML
  - Apresentação de exemplos do evento de onclick (principalmente de um botão)

- Metodologia:
  - Estudo de caso:
    - Implementar um contador com botões de + e -
    - Implementar um formulário simplificado e mostrar validação através do Javascript
  - Prático:
    - Atividade de fixação 1 (escopo fechado):
      - Implementar um formulário com pelo menos 5 inputs de tipos diferentes
      - Cada input deve ser validado através do Javascript, após o clique no botão de submissão do formulário

---

### Aula 2

- Problema Gerador:
  - Como deixar um formulário ou um site reativo usando JS Vanilla?

- Conceitos:
  - Apresentação de diferentes tipos de eventos complementares ao onclick (oninput, onblur, dentre outros)
  - Apresentar como adicionar classes e estilização através do Javascript

- Metodologia:
  - Estudo de caso:
    - Utilizar os mesmos exemplos da aula anterior, adicionando mais interações com eventos
    - Aplicar estilização nas validações e para casos específicos (o valor do contador deve ficar vermelho se for menor que zero, e verde caso contrário)
    - Adicionar novos elementos e mostrar a lista no DOM a partir do Form
  - Prático:
    - Atividade de fixação 2 (escopo fechado):
      - Criar um Form simples para criação de um item;
      - Adicionar o item a uma lista e mostrar no DOM;

---

### Aula 3

- Problema Gerador:
  - Como persistir os dados além do código?

- Conceitos:
  - Apresentação de salvamento em arquivos de texto/JSON
  - Apresentação de salvamento no localStorage
  - Apresentação de salvamento no sessionStorage
- Metodologia:
  - Estudo de caso:
    - Persistir dados dos exemplos das aulas anteriores
  - Prática:
    - Atividade de fixação 3 (escopo fechado):
    - Persistir dados da lista de itens no localStorage/sessionStorage;

---

### Aula 4

- Problema Gerador:
  - Como trabalhar com acesso a APIs externas

- Conceitos:
  - Ao invés de puxar dados localmente, trabalhar com acesso a dados externos

- Metodologia:
  - Estudo de caso:
    - Implementar uma listagem de Pokémons acessando uma lista estática;
    - Simular uma demora (setTimeout) para receber os dados dessa lista;
    - Mostrar solução para o problema anterior através do uso de callbacks;
    - Consultar a API da Pokédex para alimentar a listagem de Pokémons;
  - Prática:
    - Atividade principal 1 (escopo aberto):
    - **PRINCIPAL**
      - Pensar em um catálogo/cardápio digital em HTML;
      - Deve haver um formulário para adicionar um item novo;
      - O mesmo formulário deve servir para atualizar um item;
      - Remover um item do catálogo através de um botão;
    - **EXTRA**
      - Salvar dados relevantes no localStorage/sessionStorage;
      - Puxar estes dados de uma API externa;

---

### Aula 5

- Problema Gerador:
  - Existem outras formas de trabalhar com chamadas assíncronas?

- Conceitos:
  - Aprofundar no conceito de Promises
  - Mostrar um exemplo de callback hell e como Promises já facilitam nesse contexto
  - Mostrar como o async/await pode fazer algo assíncrono se assemelhar com algo síncrono
- Metodologia:
  - Estudo de caso:
    - Implementar um projeto de To-Do List usando OO
    - Implementar algum exemplo válido de variável estática
  - Prática:
    - Atividade de fixação 4 (escopo fechado):
      - Implementar a mesma pokédex da aula passada;
      - Alterar chamadas assíncronas com Promise para o uso de async/await.

---

### Aula 6

- Problema Gerador:
  - Como criar um CRUD completo com acesso a uma API?

- Conceitos:
  - Reforçar conceitos já apresentados através do novo exemplo

- Metodologia:
  - Estudo de caso:
    - Construir o exemplo de um CRUD junto com os alunos

---

### Aula 7

- Problema Gerador:
  - Aula dedicada à implementação da atividade, de preferência em grupo

- Conceitos:

- Metodologia:
  - Prática:
    - Atividade principal 2 (escopo aberto):
    - **PRINCIPAL**
      - Criar um jogo da forca;
      - O usuário deve poder chutar a palavra de uma vez;
      - O usuário deve poder jogar/tentar novamente (reiniciar);
      - Deve haver uma dica ou tema visualmente indicados;
      - Buscar as palavras em uma API externa;
      - Criar um teclado virtual (manipulação do DOM)
    - **EXTRA**
      - Jogo deve possuir pontuação com base no tempo e na quantidade de acertos;
      - Salvar as preferências do jogador localmente/no browser.

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
