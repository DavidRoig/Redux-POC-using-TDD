import { INCREMENT, RESET, ICounterAction } from "./actions";

export const initialState = 0;

export const counterReducer = (
  state: number = initialState,
  action: ICounterAction
) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.amount;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
