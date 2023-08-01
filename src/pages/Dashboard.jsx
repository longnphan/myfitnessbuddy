import { useState } from "react";
import { useSelector } from "react-redux";
import MacrosDashboard from "./MacrosDashboard";
import CaloriesDashboard from "./CaloriesDashboard";

function Dashboard() {
  const [caloriesActive, setCaloriesActive] = useState(true);

  const activeClass =
    "bg-secondary text-neutral rounded border-2 border-slate-300 py-1 px-3 hover:bg-accent";
  const unactiveClass =
    "bg-slate-300 rounded border-none hover:border-gray-200 text-slate-500 hover:bg-accent py-1 px-3";

  return (
    <>
      <ul className="flex justify-center mt-7">
        <li className="mr-3">
          <div
            className={caloriesActive ? activeClass : unactiveClass}
            onClick={() => setCaloriesActive(true)}
          >
            Calories
          </div>
        </li>
        <li className="mr-3">
          <div
            className={!caloriesActive ? activeClass : unactiveClass}
            onClick={() => setCaloriesActive(false)}
          >
            Macros
          </div>
        </li>
      </ul>

      <div className="card w-3/5 mx-auto lg:card-side bg-primary shadow-xl mt-7">
        {caloriesActive ? <CaloriesDashboard /> : <MacrosDashboard />}
      </div>
    </>
  );
}

export default Dashboard;
