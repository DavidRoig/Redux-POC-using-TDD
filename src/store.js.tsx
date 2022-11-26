import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter";

export function createAppStore() {
  const reducer = combineReducers({ counter: counterReducer });
  return createStore(reducer as any, 0);
}
