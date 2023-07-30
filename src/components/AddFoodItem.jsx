function AddFoodItem({ foodItem }) {
  const { label } = foodItem.food;
  const { ENERC_KCAL, CHOCDF, PROCNT, FAT } = foodItem.food.nutrients;

  return (
    <div className="rounded-none border border-slate-600 bg-slate-800 mt-4 h-20">
      <div className="collapse-title text-l font-bold font-medium">
        <p>{label}</p>
        <p className="flex justify-between">
          Calories: {Math.round(ENERC_KCAL)} | Protein: {Math.round(PROCNT)} |
          Carbohydrates: {Math.round(CHOCDF)} | Fat: {Math.round(FAT)}{" "}
          <button className="btn btn-ghost border-none normal-case text-2xl cursor-pointer hover:text-slate-400 hover:bg-transparent pb-4">
            +
          </button>
        </p>
      </div>
    </div>
  );
}

export default AddFoodItem;
