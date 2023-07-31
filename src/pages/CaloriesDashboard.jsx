import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

function CaloriesDashboard() {
  const breakfastMeals = useSelector(state =>
    state.user.breakfast.reduce((acc, food) => acc + food.calories, 0)
  );
  const lunchMeals = useSelector(state =>
    state.user.lunch.reduce((acc, food) => acc + food.calories, 0)
  );
  const dinnerMeals = useSelector(state =>
    state.user.dinner.reduce((acc, food) => acc + food.calories, 0)
  );
  const snackMeals = useSelector(state =>
    state.user.snacks.reduce((acc, food) => acc + food.calories, 0)
  );

  const data = [
    ["Calories", "Percentage"],
    ["Breakfast", breakfastMeals],
    ["Lunch", lunchMeals],
    ["Dinner", dinnerMeals],
    ["Snacks", snackMeals],
  ];

  const options = {
    title: "Daily Calories",
    backgroundColor: "#1D232A",
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
  );
}

export default CaloriesDashboard;
