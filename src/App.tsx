import { Counter } from "./counter";
import { Provider } from "react-redux";
import { useMemo } from "react";
import { createAppStore } from "./store";

export default function App() {
  const store = createAppStore();
  // const store = useMemo(createAppStore, []);

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
