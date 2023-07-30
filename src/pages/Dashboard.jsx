import { useSelector } from "react-redux";
import MacrosPieChart from "../components/MacrosPieChart";

function Dashboard() {
  const breakfastMeals = useSelector(state => state.user.breakfast);
  const lunchMeals = useSelector(state => state.user.lunch);
  const dinnerMeals = useSelector(state => state.user.dinner);
  const snackMeals = useSelector(state => state.user.snacks);

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
      <MacrosPieChart />
      <button className="btn" onClick={() => lunchMacros}>
        Click me
      </button>
    </>
  );
}

export default Dashboard;
