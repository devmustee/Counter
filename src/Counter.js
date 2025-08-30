// Counter.js
import React, { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
