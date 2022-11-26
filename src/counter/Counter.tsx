import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "./actions";
import { selectCounter } from "./selectors";

export function Counter() {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <>
      <div>Count: {counter}</div>
      <button onClick={() => dispatch(increment(1))}>+1</button>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(reset(0))}>reset</button>
    </>
  );
}
