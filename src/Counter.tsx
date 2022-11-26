import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>Count: {counter}</div>
      <button onClick={() => setCounter(1)}>+1</button>
    </>
  );
}
