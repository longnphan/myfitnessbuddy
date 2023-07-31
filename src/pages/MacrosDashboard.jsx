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
    for (let item of allMeals) {
      setCarbs(carbs + item.carbs);
      setprotein(protein + item.protein);
      setFat(fat + item.fat);
    }
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

export default MacrosDashboard;