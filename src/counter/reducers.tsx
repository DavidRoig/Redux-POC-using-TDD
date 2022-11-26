import { INCREMENT, RESET, ICounterAction } from "./actions";

export const initialState = 0;
export const counterReducer = (state: number, action: ICounterAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + (action.amount ?? 0);
    case RESET:
      return initialState;
    default:
      return state;
  }
};
