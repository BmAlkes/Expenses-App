import { useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

const BudgetForm = () => {
  const { dispatch } = useBudget();
  const [budget, setBudget] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "add-budget", payload: { budget: budget } });
  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-blue-600 font-bold text-center">
          Set Assumption
        </label>
        <input
          type="number"
          className=" w-full bg-white border border-gray-200 p-2 rounded-md"
          placeholder="Set Assumption"
          name="budget"
          id="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>
      <input
        disabled={isValid}
        type="submit"
        value="Set Assumption"
        className="bg-blue-600 hover:bg-blue-500 cursor-pointer w-full p-2 text-white font-black uppercase rounded-md disabled:opacity-40 disabled:cursor-not-allowed"
      />
    </form>
  );
};

export default BudgetForm;
