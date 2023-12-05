import { useState } from "react";

const Input = () => {
  const [userName, setUserName] = useState("");
  const [isP, setIsP] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <p>Inserisci il tuo nome</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setIsP(true);
          setUserName(inputValue);
          setInputValue("");
        }}
      >
        Invia
      </button>

      {isP && <p>Saluti da {userName}</p>}
    </div>
  );
};

export default Input;
