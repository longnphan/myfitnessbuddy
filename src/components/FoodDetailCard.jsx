import { useNavigate } from "react-router-dom";

function FoodDetailCard({ foodItem, handleClick }) {
  const navigate = useNavigate();
  const { carbs, fat, protein, food_name } = foodItem;

  return (
    <div className="card w-3/5 mx-auto lg:card bg-primary text-neutral shadow-xl mt-7 h-72">
      <p
        className="text-2xl pl-2 text-neutral hover:text-accent cursor-pointer"
        onClick={() => navigate("/tracker")}
      >
        &#8592;
      </p>
      <div className="mx-auto mt-2 font-medium space-y-1">
        <h1 className="text-2xl underline">{food_name}</h1>
        <p>Carbohydrate: {carbs}</p>
        <p>Protein: {protein}</p>
        <p>Fat: {fat}</p>
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

export default FoodDetailCard;
