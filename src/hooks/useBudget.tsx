import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export const useBudget = () => {
  const { dispatch, state } = useContext(BudgetContext);
  return {
    state,
    dispatch,
  };
};
