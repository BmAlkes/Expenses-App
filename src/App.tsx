import logo from "../public/budgeting_8467260.svg";
import bg from "../public/313 (1).jpg";
import BudgetForm from "./components/BudgetForm";
import { useBudget } from "./hooks/useBudget";
import { useEffect, useMemo } from "react";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpanseModel";
import ExpansesList from "./components/ExpansesList";

function App() {
  const { state } = useBudget();

  const isValid = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem("budget", state.budget.toString());
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
  }, [state]);
  return (
    <>
      <header className="bg-blue-600 py-8 max-h-96 mb-4">
        <div className="flex items-center justify-center gap-3 mb-5">
          <img src={logo} alt="logo" className="max-h-14" />
          <h1 className="uppercase text-center font-black text-4xl text-white">
            Expense Planner
          </h1>
        </div>
        <img
          src={bg}
          alt="background"
          className="max-h-72 w-full object-cover"
        />
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValid ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {isValid && (
        <main className="max-w-3xl mx-auto py-10">
          <ExpansesList />
          <ExpenseModal />
        </main>
      )}
    </>
  );
}

export default App;
