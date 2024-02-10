import { useState } from "react";
import "./App.scss";
import CaixaItemRestaurante from "./components/CaixaItemRestaurante";
import CaixaRestaurante from "./components/CaixaRestaurante";
import restaurantes from "./data/restaurantsAndItems.json"

function App() {
  const [restauranteEscolhido, definirRestauranteEscolhido] = useState("")
  function escolherRestaurante(restauranteEscolhido: string) {
    definirRestauranteEscolhido(restauranteEscolhido)
  }
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <span>Boas vindas, [nome da pessoa]</span>
            <div className="shopping-cart">
              carrinho de compras
              <span className="badge">0</span>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <section>
          <h2>Restaurantes</h2>
          <ul className="grid" role="list">
            {restaurantes.map((restaurante) => (
              <button onClick={() => escolherRestaurante(restaurante.nome)}>
              <CaixaRestaurante key={restaurante.nome} restaurante={restaurante} />
              </button>
            ))}
          </ul>
        </section>
        {restauranteEscolhido !== "" ? (
          <section>
          <h2>Itens do Restaurante {restauranteEscolhido}</h2>
          <ul
            className="grid"
            role="list"
            style={{ "--max": "200px" } as React.CSSProperties}
          >
            
          </ul>
        </section>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
