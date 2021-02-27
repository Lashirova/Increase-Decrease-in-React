// implement a counter
import React, { useState } from "react";

function App() {
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
