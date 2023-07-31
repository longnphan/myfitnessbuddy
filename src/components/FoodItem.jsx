import { useState } from "react";
import { Link } from "react-router-dom";

function FoodItem({ foodData }) {
  const [isHover, setIsHover] = useState(false);
  const { calories, food_name, id, meal } = foodData;

  return (
    <>
      <div
        className={`w-3/5 mx-auto rounded-none border border-slate-600 bg-slate-800 cursor-pointer ${
          isHover && "hover:bg-slate-700"
        }`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Link to={`/details/${meal}&${id}`}>
          <div className="flex justify-between collapse-title text-l font-medium">
            <p>{food_name}</p>
            <p>{calories}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default FoodItem;
