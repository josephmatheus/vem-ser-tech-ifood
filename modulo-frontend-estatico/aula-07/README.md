# Aula 7

## O que vamos aprender nessa aula

- Responsividade.
- Medias queries CSS.
- Introdução ao Bootstrap.

### **Responsividade no Desenvolvimento Web com CSS**

A responsividade no desenvolvimento web é a capacidade de um site se adaptar e ser exibido corretamente em diferentes dispositivos e tamanhos de tela. Isso é especialmente importante hoje em dia, considerando a variedade de dispositivos utilizados para acessar a internet, como smartphones, tablets e desktops.

No desenvolvimento web, a responsividade é alcançada principalmente por meio de media queries CSS. As media queries permitem aplicar estilos diferentes com base nas características do dispositivo, como tamanho da tela, orientação e resolução. Com as media queries, é possível definir regras de estilo personalizadas para cada tipo de dispositivo, garantindo que o conteúdo se ajuste adequadamente.

Ao criar um design responsivo, é importante considerar a disposição dos elementos, a flexibilidade das imagens e a legibilidade do texto em diferentes tamanhos de tela. Além disso, é fundamental testar o site em vários dispositivos e realizar ajustes necessários para garantir uma experiência de usuário consistente e agradável.

### **Media Queries CSS**

As media queries são uma parte essencial da responsividade no desenvolvimento web. Elas permitem aplicar estilos diferentes com base nas características do dispositivo, como tamanho da tela, orientação e resolução.

Para utilizar media queries, é necessário definir um conjunto de regras de estilo que serão aplicadas quando determinadas condições forem atendidas. Por exemplo, podemos definir estilos específicos para dispositivos com tela menor que 600 pixels de largura, ou para dispositivos em modo paisagem.

Aqui estão alguns exemplos de media queries CSS:

```css
/* Estilos para dispositivos móveis com tela estreita */
@media (max-width: 768px) {
  /* Seus estilos para celular aqui */
}

/* Estilos para tablets com telas de tamanho médio */
@media (min-width: 768px) and (max-width: 1024px) {
  /* Seus estilos para tablet aqui */
}

/* Estilos para desktops com telas largas */
@media (min-width: 1025px) {
  /* Seus estilos para desktop aqui */
}
```

Nesses exemplos, estamos criando medias queries para dispositivos pequenos (celulares), médios (tablet) e grandes (desktop).

Existe outras diversas variações para as medias queries, como `landscape` para dispositivos no modo paisagem, entre outros.

## **Introdução ao Bootstrap**

O Bootstrap é um framework front-end popular e amplamente utilizado que facilita o desenvolvimento de sites responsivos e com aparência profissional. Ele fornece uma coleção de componentes pré-estilizados, estilos CSS e JavaScript para agilizar o processo de criação de interfaces de usuário.

### Vantagens de utilizar o Bootstrap

1. **Facilidade de uso:** O Bootstrap oferece uma sintaxe simples e intuitiva, permitindo que desenvolvedores criem layouts e componentes de forma rápida e eficiente.
2. **Responsividade:** O Bootstrap é conhecido por sua capacidade de criar sites responsivos. Ele possui um sistema de grid flexível que permite adaptar o layout do site a diferentes tamanhos de tela, proporcionando uma experiência consistente em dispositivos móveis e desktops.
3. **Componentes pré-estilizados:** O Bootstrap disponibiliza uma ampla variedade de componentes prontos para uso, como botões, formulários, barras de navegação, carrosséis e muito mais. Esses componentes são estilizados e responsivos, o que ajuda a economizar tempo no desenvolvimento e garante uma aparência consistente em todo o site.
4. **Compatibilidade entre navegadores:** O Bootstrap é compatível com os principais navegadores, garantindo que o site funcione de maneira consistente em diferentes plataformas.
5. **Comunidade ativa:** O Bootstrap possui uma comunidade grande e ativa, o que significa que há uma vasta quantidade de recursos, documentação e suporte disponíveis. Isso facilita a resolução de problemas e o aprendizado contínuo do framework.
6. **Personalização:** O Bootstrap permite personalizar facilmente a aparência do site, seja ajustando as variáveis de estilo, adicionando classes personalizadas ou criando estilos CSS adicionais. Isso possibilita a criação de designs únicos e personalizados.

Em resumo, o Bootstrap é uma ferramenta poderosa para o desenvolvimento web que oferece uma ampla gama de recursos e vantagens. Ao utilizá-lo, os desenvolvedores podem criar sites responsivos, estilizados e compatíveis com vários navegadores de forma rápida e eficiente.

### Como utilizar o Bootstrap

Navegando pela documentação podemos ver qual as formas de utilizar o bootstrap nos nossos projetos.

### Alguns componentes

- Botão:

```html
<button class="btn btn-primary">Botão</button>
```

- Formulário:

```html
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Endereço de Email</label>
    <input
      type="email"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="nome@exemplo.com"
    />
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Exemplo de Seleção</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Opção 1</option>
      <option>Opção 2</option>
      <option>Opção 3</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Exemplo de Área de Texto</label>
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
    ></textarea>
  </div>
</form>
```

- Barra de navegação:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Logo</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Início</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sobre</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contato</a>
      </li>
    </ul>
  </div>
</nav>
```

- Tabela:

```html
<table class="table table-striped">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Nota</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Restaurante 1</td>
      <td>4.5</td>
      <td>Comida italiana deliciosa em um ambiente acolhedor.</td>
    </tr>
    <tr>
      <td>Restaurante 2</td>
      <td>4.2</td>
      <td>Comida mexicana autêntica em um local animado.</td>
    </tr>
    <tr>
      <td>Restaurante 3</td>
      <td>4.0</td>
      <td>Variedade de pratos asiáticos em um ambiente moderno.</td>
    </tr>
    <tr>
      <td>Restaurante 4</td>
      <td>4.8</td>
      <td>Steakhouse de alta qualidade com vistas deslumbrantes.</td>
    </tr>
  </tbody>
</table>
```
