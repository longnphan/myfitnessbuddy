import { useState } from "react";
import { searchFoods } from "../utils/API";
import AddFoodItem from "../components/AddFoodItem";
import { useNavigate } from "react-router-dom";

function SearchFood() {
  const [searchInput, setSearchInput] = useState("");
  const [foodData, setFoodData] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const foodResult = await searchFoods(searchInput);
    setFoodData(foodResult);
  };

  const renderFoodItems = foodData.map(item => (
    <AddFoodItem key={crypto.randomUUID()} foodItem={item} />
  ));

  return (
    <div>
      <div className="card w-3/5 mx-auto rounded bg-primary mt-6">
        <p
          className="text-2xl pl-2 text-neutral hover:text-accent cursor-pointer"
          onClick={() => navigate("/tracker")}
        >
          &#8592;
        </p>
        <div className="card-body items-center text-center -mt-2">
          <form
            className="mx-auto form-control w-full max-w-xs"
            onSubmit={handleSubmit}
          >
            <input
              id="search"
              type="text"
              placeholder="Search for food item"
              className="input input-bordered bg-opacity-100 input-info bg-base-100 w-full max-w-xs"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />

            <button className="btn btn-neutral hover:bg-accent w-1/3 mt-7 mx-auto">
              Search
            </button>
          </form>
        </div>
      </div>

      {renderFoodItems}
    </div>
  );
}

export default SearchFood;
