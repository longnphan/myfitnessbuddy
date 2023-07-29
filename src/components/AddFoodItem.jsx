function AddFoodItem({ foodItem }) {
  const { brand, knownAs } = foodItem.food;
  const { ENERC_KCAL, CHOCDF, PROCNT, FAT } = foodItem.food.nutrients;

  return (
    <div className="rounded-none border border-slate-600 bg-slate-800 mt-4">
      <div className="collapse-title text-l font-bold font-medium">
        <p>
          {brand}: {knownAs} , Calories: {ENERC_KCAL}, Protein: {PROCNT},
          Carbohydrates: {CHOCDF}, Fat: {FAT}
        </p>
      </div>
    </div>
  );
}

export default AddFoodItem;
