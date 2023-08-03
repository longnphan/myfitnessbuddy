import { useState } from "react";
import MacrosDashboard from "./MacrosDashboard";
import CaloriesDashboard from "./CaloriesDashboard";

function Dashboard() {
  const [caloriesActive, setCaloriesActive] = useState(true);

  const activeClass =
    "bg-secondary text-neutral rounded border-2 border-slate-300 py-1 px-3 hover:bg-info";
  const unactiveClass =
    "bg-slate-800 rounded border-none hover:border-gray-200 text-slate-500 hover:bg-info py-1 px-3";

  return (
    <>
      <div className="flex justify-center gap-2 mt-7">
        <button
          className={caloriesActive ? activeClass : unactiveClass}
          onClick={() => setCaloriesActive(true)}
        >
          Calories
        </button>
        <button
          className={!caloriesActive ? activeClass : unactiveClass}
          onClick={() => setCaloriesActive(false)}
        >
          Macros
        </button>
      </div>

      <div className="card w-3/5 mx-auto lg:card-side bg-primary shadow-xl mt-7">
        {caloriesActive ? <CaloriesDashboard /> : <MacrosDashboard />}
      </div>
    </>
  );
}

export default Dashboard;
