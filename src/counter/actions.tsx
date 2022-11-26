export interface ICounterAction {
  type: string;
  amount: number;
}

export const INCREMENT = "counter/INCREMENT";
export const increment = (amount: number): ICounterAction => ({
  type: INCREMENT,
  amount,
});

export const RESET = "counter/RESET";
export const reset = (amount: number): ICounterAction => ({
  type: RESET,
  amount,
});
