import { useReducer } from "react";
import { increment, reset } from "./actions";
import { counterReducer, initialState } from "./reducers";

export function Counter() {
  const [counter, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <div>Count: {counter}</div>
      <button onClick={() => dispatch(increment(1))}>+1</button>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}
