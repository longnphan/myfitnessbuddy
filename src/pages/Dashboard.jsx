import { useState } from "react";
import { useSelector } from "react-redux";
import MacrosDashboard from "./MacrosDashboard";
import CaloriesDashboard from "./CaloriesDashboard";

function Dashboard() {
  const [caloriesActive, setCaloriesActive] = useState(true);

  const activeClass =
    "inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white cursor-pointer";
  const unactiveClass =
    "inline-block border border-slate-600 rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3 cursor-pointer";

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

      <div className="card w-3/5 mx-auto lg:card-side bg-slate-600 shadow-xl mt-7">
        {/* <figure className="p-6">
          <div
            className="radial-progress"
            style={{ "--value": "80", "--size": "12rem", "--thickness": "6px" }}
          >
            <p className="mx-auto">1000</p>
            <p className="mx-auto">Remaining</p>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Base Goal</h2>
          <h2 className="card-title">Food</h2>
        </div> */}

        {caloriesActive ? <CaloriesDashboard /> : <MacrosDashboard />}
      </div>
    </>
  );
}

export default Dashboard;
