import { useState } from "react";

export default function Avaliacoes(props: {avaliacao?: number}) {
  const { avaliacao } = props;
  const [nota, setNota] = useState(0);

  if (avaliacao) return <>{avaliacao}</>;

  return (
    <>
      {nota ? (
        "Nota: " + nota
      ) : (
        <>
          <button onClick={() => setNota(1)}>1</button>
          <button onClick={() => setNota(2)}>2</button>
          <button onClick={() => setNota(3)}>3</button>
          <button onClick={() => setNota(4)}>4</button>
          <button onClick={() => setNota(5)}>5</button>
        </>
      )}
    </>
  );
}
