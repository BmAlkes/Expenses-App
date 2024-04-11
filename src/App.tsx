import logo from "../public/budgeting_8467260.svg";
import bg from "../public/313 (1).jpg";
import BudgetForm from "./components/BudgetForm";
function App() {
  return (
    <>
      <header className="bg-blue-600 py-8 max-h-96 mb-4">
        <div className="flex items-center justify-center gap-3 mb-5">
          <img src={logo} alt="logo" className="max-h-14" />
          <h1 className="uppercase text-center font-black text-4xl text-white">
            Expense Planner{" "}
          </h1>
        </div>
        <img
          src={bg}
          alt="background"
          className="max-h-72 w-full object-cover"
        />
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  );
}

export default App;
