import { useState } from "react";
import { searchFoods } from "../utils/API";
import AddFoodItem from "../components/AddFoodItem";
import SearchFoodCard from "../components/SearchFoodCard";

function SearchFood() {
  const [searchInput, setSearchInput] = useState("");
  const [foodData, setFoodData] = useState([]);

  const handleOnChange = e => {
    setSearchInput(e.target.value);
  };

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
      <SearchFoodCard
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        searchInput={searchInput}
      />
      {renderFoodItems}
    </div>
  );
}

export default SearchFood;
