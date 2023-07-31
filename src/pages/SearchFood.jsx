import { useState } from "react";
import { searchFoods } from "../utils/API";
import AddFoodItem from "../components/AddFoodItem";

function SearchFood() {
  const [searchInput, setSearchInput] = useState("");
  const [foodData, setFoodData] = useState([]);

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
      <form
        className="mx-auto form-control w-full max-w-xs py-7"
        onSubmit={handleSubmit}
      >
        <label className="label" htmlFor="search">
          <span className="label-text">Search Food</span>
        </label>

        <input
          id="search"
          type="text"
          placeholder="Search for food item"
          className="input input-bordered input-info w-full max-w-xs"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />

        <button className="btn btn-primary w-1/3 mt-7 mx-auto">Search</button>
      </form>

      {renderFoodItems}

      <h1 className="py-6 text-2xl mx-auto">History</h1>
    </div>
  );
}

export default SearchFood;
