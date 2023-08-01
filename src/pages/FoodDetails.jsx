import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { removeFood } from "../store/userSlice";

function FoodDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams().food.split("&");
  const meal = params[0];
  const id = params[1];
  const foodItem = useSelector(state =>
    state.user[meal].find(item => item.id === id)
  );

  const handleClick = () => {
    dispatch(removeFood(foodItem));
    navigate("/tracker");
  };

  return (
    <div className="card w-3/5 mx-auto lg:card bg-primary text-neutral shadow-xl mt-7 h-80">
      <div className="mx-auto mt-6 font-medium space-y-1">
        <h1 className="text-2xl">{foodItem.food_name}</h1>
        <p>Carbohydrate: {foodItem.carbs}</p>
        <p>Protein: {foodItem.protein}</p>
        <p>Fat: {foodItem.fat}</p>
      </div>
      <div className="flex mx-auto gap-2">
        <div
          className="btn py-4 mt-6 inline-block border border-blue-500 rounded btn-secondary text-neutral hover:bg-accent"
          onClick={() => navigate("/tracker")}
        >
          Go Back
        </div>
        <div
          className="btn py-4 mt-6 inline-block border border-blue-500 rounded btn-secondary text-neutral hover:bg-accent"
          onClick={handleClick}
        >
          DELETE
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
