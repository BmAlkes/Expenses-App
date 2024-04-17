import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import { ChangeEvent, useEffect, useState } from "react";
import { DraftExpanse, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

const ExpansesForm = () => {
  const { dispatch, state } = useBudget();
  const [expense, setExpanse] = useState<DraftExpanse>({
    amount: 0,
    category: "",
    date: new Date(),
    expenseName: "",
  });

  useEffect(() => {
    if (state.editingId) {
      const editingExpense = state.expenses.filter(
        (currentExpense) => currentExpense.id === state.editingId
      )[0];
      setExpanse(editingExpense);
    }
  }, [state.editingId]);
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const isAmoutField = ["amount"].includes(name);
    setExpanse({
      ...expense,
      [name]: isAmoutField ? +value : value,
    });
  };

  const handleChangeDate = (value: Value) => {
    setExpanse({
      ...expense,
      date: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(expense).includes("")) {
      setError("All the fields are required");
      return;
    }
    // add new expanses
    if (state.editingId) {
      dispatch({
        type: "update-expense",
        payload: { expense: { id: state.editingId, ...expense } },
      });
    } else {
      dispatch({ type: "add-expanse", payload: { expense } });
    }

    setExpanse({
      amount: 0,
      category: "",
      date: new Date(),
      expenseName: "",
    });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend className="uppercase text-center text-2xl font-black border-b-2 border-blue-500 py-2">
        {state.editingId ? "Edit expense " : " New Expense"}
      </legend>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Name Expanse:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="add expanses name"
          className="bg-slate-200 p-2 placeholder:text-black rounded-md"
          name="expenseName"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Quantity:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="add amount expanse"
          className="bg-slate-200 p-2 placeholder:text-black rounded-md"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Categorie:
        </label>
        <select
          id="category"
          className="bg-slate-200 p-2 placeholder:text-black rounded-md"
          name="category"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="">---Selection---</option>
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
              className="text-black"
            >
              {category.name}
            </option>
          ))}
        </select>
        <div className="flex flex-col gap-2">
          <label htmlFor="expenseName" className="text-xl">
            Date expanse :
          </label>
          <DatePicker
            className="bg-slate-100 p-2 border-0"
            value={expense.date}
            onChange={handleChangeDate}
          />
        </div>
        <input
          type="submit"
          className="bg-blue-600 hover:bg-blue-400 w-full p-2 text-white uppercase font-bold rounded-lg cursor-pointer mt-3"
          value={`${
            state.editingId ? " Save Changes " : "Register New Expanse"
          }`}
        />
      </div>
    </form>
  );
};

export default ExpansesForm;
