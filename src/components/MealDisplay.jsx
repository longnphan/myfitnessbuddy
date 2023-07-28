import MealItem from "./MealItem";

function MealDisplay() {
  const meals = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  const renderMeals = meals.map(item => (
    <MealItem key={crypto.randomUUID()} meal={item} />
  ));
  return <>{renderMeals}</>;
}

export default MealDisplay;
