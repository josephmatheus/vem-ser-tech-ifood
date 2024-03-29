import { useState } from "react";

interface CaixaItemRestauranteProps {
  item: {
    nome: string;
    descricao: string;
    preco: number;
  };
  max?: number;
}

export default function CaixaItemRestaurante(props: CaixaItemRestauranteProps) {
  const {
    item: { nome, descricao, preco },
    max = 10,
  } = props;

  const [quantidade, definirQuantidade] = useState(0);

  function aumentarQuantidade() {
    if (quantidade >= max) return;
    definirQuantidade(quantidade + 1);
  }
  function diminuirQuantidade() {
    if (quantidade === 0) return;
    definirQuantidade(quantidade - 1);
  }

  if (!nome) return <></>;

  return (
    <li>
      <h3>
        {nome} / <small>R${preco},00</small>
      </h3>
      <p>{descricao}</p>
      {preco > 0 ? (
        <div className="counter">
          <button onClick={diminuirQuantidade}>-</button>
          <span>{quantidade}</span>
          <button onClick={aumentarQuantidade}>+</button>
        </div>
      ) : (
        "Indisponível no momento"
      )}
    </li>
  );
}
