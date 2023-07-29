import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MealItem({ meal }) {
  const navigate = useNavigate();

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
        <div
          className="collapse-title text-xl text-blue-500 font-medium cursor-pointer"
          onClick={() => navigate("/searchfood")}
        >
          ADD FOOD
        </div>
      </div>
    </>
  );
}

export default MealItem;
