import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";

function MealItem({ meal }) {
  const lowercaseMeal = meal.toLowerCase();
  const mealData = useSelector(state => state.user[lowercaseMeal]);

  const calcCalories = () => {
    return mealData.reduce((acc, cal) => acc + cal.calories, 0) || "";
  };

  const renderFoodItems = mealData.map(item => (
    <FoodItem key={item.id} foodData={item} />
  ));

  return (
    <>
      <div className="w-3/4 mx-auto rounded-none border border-slate-600 bg-slate-800 mt-6">
        <div className="flex justify-between collapse-title text-xl font-medium">
          <p>{meal}</p>
          <p>{calcCalories()}</p>
        </div>
      </div>

      {/* Conditionally renders food items if they exists */}
      {mealData.length > 0 && renderFoodItems}

      {/* Add food button */}
      <div className="w-3/4 mx-auto rounded-none border border-slate-600 bg-slate-800">
        <Link to={`/searchfood/${lowercaseMeal}`}>
          <p className="collapse-title text-xl text-blue-500 font-medium cursor-pointer">
            ADD FOOD
          </p>
        </Link>
      </div>
    </>
  );
}

export default MealItem;
