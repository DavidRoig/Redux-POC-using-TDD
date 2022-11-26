import { Counter } from "./counter";
import { Provider } from "react-redux";
import { useMemo } from "react";
import { createAppStore } from "./store.js";

export default function App() {
  const store = useMemo(createAppStore, []);

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
