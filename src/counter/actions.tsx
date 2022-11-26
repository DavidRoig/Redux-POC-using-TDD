export interface ICounterAction {
  type: string;
  amount?: number;
}

export const INCREMENT = "INCREMENT";
export const increment = (amount: number): ICounterAction => ({
  type: INCREMENT,
  amount,
});

export const RESET = "RESET";
export const reset = (): ICounterAction => ({
  type: RESET,
});
