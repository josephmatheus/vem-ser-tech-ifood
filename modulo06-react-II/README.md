# Framework de Front End II (React)

## Aulas, Carga horária e Duração

|             | 2x na semana | 3x na semana |
| :---------: | :----------: | :----------: |
| **Aulas**   | 8            | 9            |
| **Carga**   | 24h          | 27h          |
| **Duração** | 4 semanas    | 3 semanas    |

## Planejamento

### Objetivos

- Compreensão de conceitos de paradigmas de programação
- Criação e manipulação de componentes funcionais na biblioteca React
- Gestão de rotas em uma aplicação SPA
- Gestão de estilização CSS em aplicação React
- Criação e manipulação de hooks
- Criação e manipulação de contextos
- Gestão de ciclo de vida de componentes
- Compreensão e utilização dos conceitos de persistência e memoização
- Identificação e tratamento de erros em aplicação React e JavaScript
- Otimização de desempenho
- Build da aplicação para ambiente de produção
- Manipulação do JavaScript utilizando boas práticas junto à biblioteca React

### Conteúdos

- Paradigma funcional
- Componentização funcional vs classe
- Escopo de função em JavaScript
- Utilização do JSX
- Estrutura de decisão, loop e keys no JSX
- CSS Import e CSS Modules
- Bibliotecas de estilização CSS
- Importação e manipulação de assets (imagens, JSON, módulos JavaScript)
- Introdução aos hooks
- Utilização do state hook
- Utilização do efect hook
- Utilização do ref hook
- Utilização do memo hook
- Utilização do callback hook
- Utilização do context hook
- Criação, customização e manipulação de hooks
- Composição de hooks
- Tratamento de erros e otimização de desempenho
- Carregamento "lazy"
- Build da aplicação

### Bibliografia

- Links:
  - Documentação oficial da biblioteca React. Acesso em <https://pt-br.reactjs.org/docs/getting-started.html>
  - Documentação oficial da Mozila - JavaScript. Acesso em <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Language_Resources>
  - Documentação oficial W3C - JavaScript. Acesso em <https://www.w3schools.com/js/>

- Bibliografia complementar:
  - Links:
    - ECMAScript International. Acesso em <https://www.ecma-international.org/technical-committees/tc39/?tab=published-standard>
  - Livros:
    - MARTIN, Robert C. et al. Código Limpo: Habilidades Práticas do Agile Software, 1ª ed. Rio de Janeiro, RJ: Alta Books, 2011.

### Metodologia

- Listas de exercícios práticos individuais
- Estudos de caso em duplas
- Pesquisa individual na documentação
- Debate com e sem enquete

### Avaliação

- Listas de exercícios
- Prova teórico-prática
- Projeto integrador

### Observações

- Requisitos mínimos para aula:
  - [FE-JS-001] FRONT END ESTÁTICO
  - [FE-JS-002] LÓGICA DE PROGRAMAÇÃO I
  
A matéria é complementar à [FE-JS-005] FRAMEWORK FRONT END I, logo, esta não é de fato um requisito para esta matéria.

---

## Plano de Aulas

### Aula 1

- Problema Gerador:
  - Componentização
  - Introdução ao react

- Conceitos:
  - Inicializar um projeto React
  - Paradigma funcional
  - Componentização funcional vs classe
  - Escopo de função em JavaScript
  - Utilização do JSX
  - Estrutura de decisão, loop e keys no JSX

- Metodologia:
  - Estudo de caso:
    - Como criar um componente funcional que expõe de forma dinâmica algum parâmetro e que utiliza composição de componentes e defensivas para padronização de elementos?
  - Expositiva:
    - Biblioteca de componentes web (input, button, form) e algoritmo de diferenciação
  - Pesquisa individual:
    - Descobrir como expor todas as propriedades de uma única vez
  - Prático:
    - Exercícios de fixação (criação de template utilizando componente funcional e fazer um mock de dados em tela)

---

### Aula 2

- Problema Gerador:
  - Estilização de componentes
  - Manipulação de recursos complementares do projeto (assets)

- Conceitos:
  - CSS Import e CSS Modules
  - Bibliotecas de estilização CSS
  - Importação e manipulação de assets (imagens, JSON, módulos JavaScript)

- Metodologia:
  - Estudo de caso 1:
    - Como evitar conflitos de classes CSS entre componentes?
  - Estudo de caso 2:
    - Como manipular, importar e utilizar arquivos distintos no JSX?
  - Expositiva 1:
    - Criação de CSS sem conflitos entre componentes
  - Expositiva 2:
    - Utilização de arquivos complementares do projeto
  - Pesquisa individual:
    - Pesquisa de tipos de bibliotecas CSS e modos de importação e exportação em JavaScript
  - Prático:
    - Exercícios de fixação (criação de componentes personalizados com CSS e manipulação de assets)

---

### Aula 3

- Problema Gerador:
  - Introdução aos hooks
  - Regras dos hooks

- Conceitos:
  - Hooks de forma resumida
  - Utilização do state hook

- Metodologia:
  - Estudo de caso:
    - Como alterar informações apresentadas na tela, em tempo real, de acordo com estímulo de ações?
  - Expositiva:
    - Aplicação reativa utilizando useState
  - Pesquisa individual:
    - Busca na documentação oficial React sobre conceitos de hooks
  - Prático:
    - Exercícios de fixação (manipulação de estados utilizando hook)

---

### Aula 4

- Problema Gerador:
  - Utilização do effect hook

- Conceitos:
  - Gerenciamento de ciclo de vida de componentes

- Metodologia:
  - Estudo de caso 1:
    - Como alterar um estado após a modificação de outro estado?
  - Estudo de caso 2:
    - Como iniciar um estado após o carregamento de um componente?
  - Estudo de caso 3:
    - Como executar uma ação na finalização da renderização de um componente?
  - Expositiva:
    - Manipulação de ciclos de vida com useEffect hook
  - Prático:
    - Exercícios de fixação (manipular ciclos de vida com hook)

---

### Aula 5

- Problema Gerador:
  - Persistência e memoização
  - Utilização do ref hook
  - Utilização do memo hook
  - Utilização do callback hook

- Conceitos:
  - Persistência de valores entre as renderizações de componentes
  - Programação baseada em desempenho

- Metodologia:
  - Estudo de caso:
    - Como não re-renderizar a aplicação toda vez que alterar uma referência, estado ou função?
  - Expositiva 1:
    - Gestão de componentes utilizando useRef
  - Expositiva 2:
    - Gestão de renderização utilizando useMemo e useCallback
  - Prático:
    - Exercícios de fixação (gerir referências de componente e garantir renderização desnecessária para garantia de desempenho)

---

### Aula 6

- Problema Gerador:
  - Manipulação de props entre componentes
  - Utilização do context hook

- Conceitos:
  - Gerenciamento de contextos e props de componentes

- Metodologia:
  - Estudo de caso:
    - Como evitar passar propriedades por muitos níveis (superior e/ou inferior) em componentes?
  - Expositiva:
    - Criação e utilização de contextos utilizando useContext
  - Prático:
    - Exercícios de fixação (criação e utilização de contextos)

---

### Aula 7

- Problema Gerador:
  - Criação de hooks personalizados

- Conceitos:
  - Criação, customização e manipulação de hooks
  - Composição de hooks

- Metodologia:
  - Estudo de caso:
    - Como reaproveitar uma lógica específica utilizada por diversos componentes?
  - Expositiva:
    - Criação e utilização de hook personalizado
  - Pesquisa individual:
    - Identificação de lógicas que podem ser reaproveitadas
  - Prático:
    - Exercícios de fixação (criação e utilização de hook)

---

### Aula 8

- Problema Gerador:
  - Tratamento de erros e otimização de desempenho
  - Carregamento "lazy"
  - Build da aplicação

- Conceitos:
  - Identificação e correção de erros
  - Alocação de memória
  - Geração de aplicação para exposição em ambiente de produção

- Metodologia:
  - Estudo de caso 1:
    - Como gerir e corrigir erros comuns de React e JavaScript?
  - Estudo de caso 2:
    - Como carregar importações em tempo de uso?
  - Estudo de caso 3:
    - Como gerar uma aplicação para colocar em produção?
  - Expositiva:
    - Gestão de erros, memória e build de aplicação
  - Prático:
    - Exercícios de fixação (tratamento de erros, gestão de memória e criação de build)

---

### Aula 9

- *Aula dedicada à devolutiva da avaliação por rubrica / auto-avaliação*

---
