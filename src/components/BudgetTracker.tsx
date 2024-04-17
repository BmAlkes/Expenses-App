import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplat";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetTracker = () => {
  const { state, dispatch } = useBudget();

  const spend = useMemo(
    () => state.expenses.reduce((acc, item) => (acc += item.amount), 0),
    [state.expenses]
  );

  const available = useMemo(() => state.budget - spend, [state.expenses]);
  const percentage = +((spend / state.budget) * 100).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage >= 85 ? "#dc2626" : "#3b82f6",
            trailColor: "#f5f5f5",
            textSize: 8,
            textColor: "#3b82f6",
          })}
          text={`${percentage}% expenses`}
        />
      </div>
      <div className="flex flex-col items-center gap-8 justify-center">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
          onClick={() => dispatch({ type: "reset-app" })}
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
