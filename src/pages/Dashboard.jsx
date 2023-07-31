import { useState } from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const [caloriesActive, setCaloriesActive] = useState(true);

  const breakfastMeals = useSelector(state => state.user.breakfast);
  const lunchMeals = useSelector(state => state.user.lunch);
  const dinnerMeals = useSelector(state => state.user.dinner);
  const snackMeals = useSelector(state => state.user.snacks);

  const activeClass =
    "inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white";
  const unactiveClass =
    "inline-block border border-slate-600 rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3";

  const lunchMacros = () => {
    let carbs = 0;
    let protein = 0;
    let fat = 0;

    console.log("this is lunch meals in Dashboard", lunchMeals);
    for (let item of lunchMeals) {
      carbs += item.carbs;
      protein += item.protein;
      fat += item.fat;
    }
    console.log("total carbs:", carbs);
    console.log("total proteins:", protein);
    console.log("total fats:", fat);
  };

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

      <div className="card w-3/5 mx-auto lg:card-side bg-slate-600 shadow-xl mt-7 py-7 cursor-pointer">
        <figure className="p-6">
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
        </div>
      </div>
    </>
  );
}

export default Dashboard;
