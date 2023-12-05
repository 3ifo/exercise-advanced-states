import { useState } from "react";

const Listaa = () => {
  const [lista, setLista] = useState(["leo", "laura"]);
  return (
    <div>
      <input type="text" />
      <button>Aggiungi</button>
      <ul>
        {lista.map((elem, i) => {
          return <li key={`invitato${i}`}>{elem}</li>;
        })}
      </ul>
    </div>
  );
};

export default Listaa;
