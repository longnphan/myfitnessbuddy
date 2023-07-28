import { useSelector } from "react-redux";

function MealItem({ meal }) {
  const lowercaseMeal = meal.toLowerCase();
  const mealData = useSelector(state => state.user[lowercaseMeal]);

  return (
    <>
      <div className="rounded-none border border-slate-600 bg-slate-800 mt-6">
        <div className="collapse-title text-xl font-bold font-medium">
          {meal}
        </div>
      </div>

      {mealData.length > 0 && (
        <div className="rounded-none border border-slate-600 bg-slate-800">
          <div className="collapse-title text-xl font-medium">
            Food Items...
          </div>
        </div>
      )}

      <div className="rounded-none border border-slate-600 bg-slate-800">
        <div className="collapse-title text-xl text-blue-500 font-medium cursor-pointer">
          ADD FOOD
        </div>
      </div>
    </>
  );
}

export default MealItem;
