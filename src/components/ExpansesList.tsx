import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpensesDetail from "./ExpensesDetail";

const ExpansesList = () => {
  const { state } = useBudget();

  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);
  return (
    <div className="mt-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">
          Dont have any expenses
        </p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Expenses List</p>
          {state.expenses.map((expenses) => (
            <ExpensesDetail key={expenses.id} expense={expenses} />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpansesList;
