import AmountDisplay from "./AmountDisplat";

const BudgetTracker = () => {
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
        <AmountDisplay label="budget" amount={300} />
        <AmountDisplay label="available" amount={4000} />
        <AmountDisplay label="spent" amount={2000} />
      </div>
    </div>
  );
};

export default BudgetTracker;
