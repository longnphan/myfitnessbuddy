import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

function MacrosDashboard() {
  const [carbs, setCarbs] = useState(0);
  const [protein, setprotein] = useState(0);
  const [fat, setFat] = useState(0);

  const breakfastMeals = useSelector(state => state.user.breakfast);
  const lunchMeals = useSelector(state => state.user.lunch);
  const dinnerMeals = useSelector(state => state.user.dinner);
  const snackMeals = useSelector(state => state.user.snacks);

  const allMeals = [
    ...breakfastMeals,
    ...lunchMeals,
    ...dinnerMeals,
    ...snackMeals,
  ];

  const calcMacros = () => {
    let newCarbs = 0;
    let newProtein = 0;
    let newFat = 0;

    for (let item of allMeals) {
      newCarbs += item.carbs;
      newProtein += item.protein;
      newFat += item.fat;
    }

    setCarbs(newCarbs);
    setprotein(newProtein);
    setFat(newFat);
  };

  useEffect(() => {
    calcMacros();
  }, []);

  const data = [
    ["Macros", "Grams"],
    ["Carbohydrates", carbs],
    ["Protein", protein],
    ["Fat", fat],
  ];

  const options = {
    title: "Daily Macros",
    colors: ["#e0440e", "#e6693e", "#ec8f6e"],
    backgroundColor: "",
  };

  return (
    <Chart
      className="mx-auto my-auto"
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"450px"}
    />
  );
}

export default MacrosDashboard;
