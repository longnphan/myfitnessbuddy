import { Chart } from "react-google-charts";

function MacrosPieChart() {
  const data = [
    ["Macros", "Grams"],
    ["Carbohydrate", 200],
    ["Protein", 130],
    ["Fat", 45],
  ];

  const options = {
    title: "Daily Macros",
    backgroundColor: "#e2e8f0",
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

export default MacrosPieChart;
