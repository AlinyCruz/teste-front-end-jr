import { useState } from 'react';

function InputModal() {
  const [valor, setValor] = useState(0);

  const incrementar = () => {
    setValor(valor + 1);
  };

  const decrementar = () => {
    if (valor > 0) {
      setValor(valor - 1);
    }
  };

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <input type="text" value={valor} readOnly />
      <button onClick={incrementar}>+</button>
    </div>
  );
}

export default InputModal;
