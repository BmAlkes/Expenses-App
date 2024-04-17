import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplat";

const BudgetTracker = () => {
  const { state } = useBudget();

  const spend = useMemo(
    () => state.expenses.reduce((acc, item) => (acc += item.amount), 0),
    [state.expenses]
  );

  const available = useMemo(() => state.budget - spend, [state.expenses]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt=" graphic expanses" />
      </div>
      <div className="flex flex-col items-center gap-8 justify-center">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
        >
          Reset App
        </button>
        <AmountDisplay label="budget" amount={state.budget} />
        <AmountDisplay label="available" amount={available} />
        <AmountDisplay label="spent" amount={spend} />
      </div>
    </div>
  );
};

export default BudgetTracker;
