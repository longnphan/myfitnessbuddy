import MealItem from "./MealItem";
import RemainingCals from "./RemainingCals";

function MealDisplay() {
  const meals = ["Breakfast", "Lunch", "Dinner", "Snacks"];

  const renderMeals = meals.map(item => (
    <MealItem key={crypto.randomUUID()} meal={item} />
  ));

  return (
    <>
      <RemainingCals />
      {renderMeals}
    </>
  );
}

export default MealDisplay;
