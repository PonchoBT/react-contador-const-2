import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);

  const increment2 = () => {
    setCount(count + 1);
    setCounts(count + 2);
  };

  const onClearAll = () => {
    setCount(0);
    setCounts(0);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <p>Contador: {counts}</p>
      <button onClick={increment2}>Incrementar</button>
      <button onClick={onClearAll}>Limpiar todo</button>
    </div>
  );
}

export default Counter;
