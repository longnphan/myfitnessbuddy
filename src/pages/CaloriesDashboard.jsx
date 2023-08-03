import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

function CaloriesDashboard() {
  const { breakfast, lunch, dinner, snacks } = useSelector(state => state.user);
  const bfMeals = breakfast.reduce((acc, food) => acc + food.calories, 0);
  const lunchMeals = lunch.reduce((acc, food) => acc + food.calories, 0);
  const dinnerMeals = dinner.reduce((acc, food) => acc + food.calories, 0);
  const snackMeals = snacks.reduce((acc, food) => acc + food.calories, 0);

  const data = [
    ["Calories", "Percentage"],
    ["Breakfast", bfMeals],
    ["Lunch", lunchMeals],
    ["Dinner", dinnerMeals],
    ["Snacks", snackMeals],
  ];

  const options = {
    title: "Daily Calories",
    colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f"],
    backgroundColor: "",
  };

  const isFoodAdded = () => {
    if (bfMeals || lunchMeals || dinnerMeals || snackMeals) {
      return (
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"450px"}
        />
      );
    } else {
      return (
        <p className="mx-auto text-neutral text-s sm:text-xl h-40 pt-14 ">
          Please add food item to tracker
        </p>
      );
    }
  };

  return isFoodAdded();
}

export default CaloriesDashboard;
