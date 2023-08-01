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
    <div className="card w-3/5 mx-auto lg:card bg-primary text-neutral shadow-xl mt-7 h-72">
      <p
        className="text-2xl pl-2 text-neutral hover:text-accent cursor-pointer"
        onClick={() => navigate("/tracker")}
      >
        &#8592;
      </p>
      <div className="mx-auto mt-2 font-medium space-y-1">
        <h1 className="text-2xl underline">{foodItem.food_name}</h1>
        <p>Carbohydrate: {foodItem.carbs}</p>
        <p>Protein: {foodItem.protein}</p>
        <p>Fat: {foodItem.fat}</p>
      </div>
      <div className="mx-auto">
        <div
          className="btn py-4 mt-6 rounded btn-neutral text-white hover:bg-accent"
          onClick={handleClick}
        >
          DELETE
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
