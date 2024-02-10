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

  const [quantidade, setQuantidade] = useState(0);

  function aumentarQuantidade() {
    if (quantidade >= max) return;
    setQuantidade(quantidade + 1);
  }

  function diminuirQuantidade() {
    if (quantidade === 0) return;
    setQuantidade(quantidade - 1);
  }

  if (!nome) return <></>

  return (
    <li>
      <h3>{nome}</h3>
      <p>
        {descricao} / R${preco},00
      </p>
      <div className="counter">
        {preco > 0 ? (
          <>
            <button onClick={diminuirQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={aumentarQuantidade}>+</button>
          </>
        ) : (
          "Indisponível no momento"
        )}
      </div>
    </li>
  );
}
