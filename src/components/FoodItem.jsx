import { Link } from "react-router-dom";

function FoodItem({ foodData }) {
  const { calories, food_name, id, meal } = foodData;

  return (
    <>
      <div className="w-3/5 mx-auto rounded-none border border-slate-600 bg-primary cursor-pointer hover:bg-secondary">
        <Link to={`/details/${meal}&${id}`}>
          <div className="flex justify-between collapse-title text-l text-neutral font-medium">
            <p>- {food_name}</p>
            <p>{calories}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default FoodItem;
