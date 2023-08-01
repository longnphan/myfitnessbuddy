import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addFood } from "../store/userSlice";

function AddFoodItem({ foodItem }) {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { label } = foodItem.food;
  const { ENERC_KCAL, CHOCDF, PROCNT, FAT } = foodItem.food.nutrients;

  const handleClick = () => {
    dispatch(
      addFood({
        id: crypto.randomUUID(),
        food_name: label,
        calories: Math.round(ENERC_KCAL),
        carbs: Math.round(CHOCDF),
        protein: Math.round(PROCNT),
        fat: Math.round(FAT),
        meal: params.meal,
      })
    );

    navigate("/tracker");
  };

  return (
    <div className="w-3/4 mx-auto rounded-none border border-slate-600 bg-primary mt-4 h-20 hover:bg-secondary">
      <div className="collapse-title text-l font-bold text-neutral font-medium">
        <p>{label}</p>
        <p className="flex justify-between">
          Calories: {Math.round(ENERC_KCAL)} | Protein: {Math.round(PROCNT)} |
          Carbohydrates: {Math.round(CHOCDF)} | Fat: {Math.round(FAT)}{" "}
          <button
            className="btn btn-ghost border-none normal-case text-2xl hover:text-accent hover:bg-transparent pb-4"
            onClick={handleClick}
          >
            +
          </button>
        </p>
      </div>
    </div>
  );
}

export default AddFoodItem;
