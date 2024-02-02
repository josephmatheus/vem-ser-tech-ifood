# Framework de Front End I (React)

## Aulas, Carga horária e Duração

|             | 2x na semana | 3x na semana |
| :---------: | :----------: | :----------: |
| **Aulas**   | 8            | 9            |
| **Carga**   | 24h          | 27h          |
| **Duração** | 4 semanas    | 3 semanas    |

## Planejamento

### Objetivos

- Entendimento do que é a biblioteca react, sua utilização na construção de aplicações dinâmicas e motivações para utilizá-la
- Saber o que são e como utilizar componentes
- Possibilidade de estruturação da arquitetura de uma aplicação react moderna
- Saber o que é um componente funcional e o que é um componente de classe
- Aprofundar no entendimento do que é um componente de classe
- Utilização da estrutura fornecida pelo JSX
- Prática na interação entre componentes
- Integração de componentes para conclusão de uma aplicação funcional
- Criação de componentes dinâmicos
- Habilidade de reconhecer as responsabilidades de cada componente
- Capacidade de utilizar os elementos já conhecidos de HTML no novo contexto
- Entendimento e manutenção do estado da aplicação e de seus componentes

### Conteúdos

- Componentes e componentização
- Componentização de interface estática
- Interpolações e fundamentos de JSX
- Eventos
- Props
- Passagem de props em componentes funcionais
- Class components
- Vantagens e diferenças de class components
- Passagem de props em class components
- PropTypes
- Principais PropTypes
- DefaultProps
- State
- Constructor
- Bind de funções
- Utilização de state
- State lifting
- Renderização condicional
- Formas de realizar renderização condicional
- Renderização de listas
- Formas de realizar renderização de listas
- Conceito de rotas
- React routing
- Criação de rotas simples
- Criação de rotas aninhadas
- Criação de rotas com parâmetros
- Problema de props drilling
- Composição de componente
- Correção de props drilling com componentes compostos
- Componente composto do início
- Forms
- Dinamizando formulários
- Validações simples de campos
- Métodos de ciclo de vida
- Utilização de métodos de ciclo de vida
- Aprofundamento nos métodos de ciclo de vida principais

### Bibliografia

- Links:
  - <https://pt-br.reactjs.org/docs/getting-started.html>
  - <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript>
  - <https://www.w3schools.com/>
  - <https://www.ecma-international.org/>
  - <https://reactrouter.com/>
  - <https://www.npmjs.com/package/prop-types>

### Metodologia

- Realização de exemplos em sala em conjunto com os alunos
- Debates e enquetes
- Exercícios práticos e desafiadores
- Pesquisa individual e guiada na documentação

### Avaliação

- Projeto final (integrar todo o conteúdo)
- Avaliação breve ao final de cada aula com perguntas básicas sobre o conteúdo passado

### Observações

- Requisitos mínimos para aula:
  - [FE-JS-001] FRONT END ESTÁTICO
  - [FE-JS-002] LÓGICA DE PROGRAMAÇÃO I
  - [FE-JS-004] FRONT END DINÂMICO

---

## Plano de Aulas

### Aula 1

- Problema Gerador:
  - Componentização
  - Introdução ao react

- Conceitos:
  - O que são componentes
  - Motivação para componentizar
  - Apresentação das bibliotecas principais
  - Inicialização de um projeto react
  - Arquitetura de componentes em pastas
  - Criação de componentes funcionais

- Metodologia:
  - Estudo de caso:
    - Como componentizar um site estático de página única utilizando react?
  - Expositiva:
    - Site estático componentizado com react
  - Pesquisa individual:
    - Revisão de criação de projeto e componentes na documentação
  - Prático:
    - Criação de aplicação simples e estática com uma página e reutilização de componentes

---

### Aula 2

- Problema Gerador:
  - Props e PropTypes

- Conceitos:
  - Interpolação para inserção de JavaScript na estrutura HTML
  - Eventos básicos
  - Introdução a class components
  - Comunicação entre componentes
  - O que são props
  - Utilização de props em componentes funcionais
  - Utilização de props em class components
  - O que são PropTypes
  - Principais PropTypes

- Metodologia:
  - Estudo de caso 1:
    - Como inserir JavaScript na estrutura HTML?
  - Estudo de caso 2:
    - O que são class components?
  - Estudo de caso 3:
    - Como comunicar diferentes componentes utilizando props?
  - Estudo de caso 4:
    - Como garantir props corretas com PropTypes?
  - Expositiva 1:
    - Interpolações JSX
  - Expositiva 2:
    - Class components
  - Expositiva 3:
    - Utilização de props em componentes funcionais e class components
  - Expositiva 4:
    - Validação de props com PropTypes
  - Pesquisa individual:
    - Descoberta dos variados tipos de PropTypes na documentação
  - Prático:
    - Criação de componentes que se comunicam com props;

---

### Aula 3

- Problema Gerador:
  - State e state lifting

- Conceitos:
  - Conceito de state
  - Constructor
  - Bind de funções
  - Aplicação de state
  - Conceito de state lifting
  - Aplicação de state lifting

- Metodologia:
  - Estudo de caso 1:
    - Como manter e alterar o estado de um componente?
  - Estudo de caso 2:
    - Como delegar a responsabilidade do estado do filho para o pai?
  - Expositiva 1:
    - Criação de componentes com state
  - Expositiva 2:
    - Refatoração de componente com state lifting
  - Pesquisa individual:
    - Estudo sobre utilização de state em diferentes situações
  - Prática:
    - Criação de aplicação com gerenciamento de estado de componentes

---

### Aula 4

- Problema Gerador:
  - Roteamento com react router

- Conceitos:
  - O que são rotas
  - Instalação do react router
  - Configuração do react router
  - Roteamento simples
  - Roteamento aninhado
  - Roteamento com parâmetros
  - Funções do react router

- Metodologia:
  - Estudo de caso:
    - Como escalar minha aplicação para que ela tenha múltiplas páginas?
  - Expositiva:
    - Configuração e utilização do react router
  - Pesquisa individual:
    - Leitura da documentação do react router
  - Prática:
    - Criação de aplicação com roteamento aninhado e com parâmetros

---

### Aula 5

- Problema Gerador:
  - Renderização condicional
  - Renderização de listas

- Conceitos:
  - Renderização condicional com variáveis
  - Renderização condicional no JSX
  - Renderização de listas com variáveis
  - Renderização de listas no JSXsíncrono

- Metodologia:
  - Estudo de caso 1:
    - Como exibir um componente na tela somente quando uma condição for atingida?
  - Estudo de caso 2:
    - Como exibir uma lista na tela?
  - Expositiva 1:
    - Componente com renderização condicional
  - Expositiva 2:
    - Componente com renderização de lista
  - Pesquisa individual:
    - Observação prática de utilização de renderização condicional e renderização de listas
  - Prático:
    - Criar aplicação que renderize uma lista condicionalmente

---

### Aula 6

- Problema Gerador:
  - Composição de componentes

- Conceitos:
  - Problemas de prop drilling
  - Componentes compostos com children

- Metodologia:
  - Estudo de caso:
    - Como evitar prop drilling e melhorar a leitura do meu componente?
  - Expositiva:
    - Criação de componente genérico com composição
  - Pesquisa individual:
    - Procurar exemplos de componentes compostos
  - Prático:
    - Criação de componente composto genérico e reutilização e aplicação

---

### Aula 7

- Problema Gerador:
  - Formulários

- Conceitos:
  - Criação de formulários em react
  - Validação simples de formulários em react

- Metodologia:
  - Estudo de caso:
    - Como criar um formulário com validação?
  - Expositiva:
    - Criação de um formulário com validação de dados
  - Pesquisa individual:
    - Leitura da documentação sobre formulários em react
  - Prático:
    - Criação de aplicação que lida com formulários e valida os dados

---

### Aula 8

- Problema Gerador:
  - Ciclo de vida de um componente react

- Conceitos:
  - Funcionamento do ciclo de vida de um componente
  - Principais métodos de ciclo de vida

- Metodologia:
  - Estudo de caso:
    - Como funcionam os ciclos de vida do react e quais são seus principais?
  - Expositiva:
    - Demonstração de ciclos de vida de um componente com foco nos mais utilizados
  - Prático:
    - Criar aplicação que utilize todos os ciclos de vida ensinados em aula

---

### Aula 9

- *Aula dedicada à devolutiva da avaliação por rubrica / auto-avaliação*

---
