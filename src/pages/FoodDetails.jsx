import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { removeFood } from "../store/userSlice";
import FoodDetailCard from "../components/FoodDetailCard";

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
    <FoodDetailCard foodItem={foodItem} handleClick={handleClick}  />
  );
}

export default FoodDetails;
