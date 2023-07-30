function FoodItem({ foodData }) {
  const { calories, food_name } = foodData;

  return (
    <>
      <div className="rounded-none border border-slate-600 bg-slate-800">
        <div className="flex justify-between collapse-title text-l font-medium">
          <p>{food_name}</p>
          <p>{calories}</p>
        </div>
      </div>
    </>
  );
}

export default FoodItem;
