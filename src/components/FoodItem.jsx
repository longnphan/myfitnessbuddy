function FoodItem({ foodData }) {
  const { calories, food_name } = foodData;

  return (
    <>
      <div className="w-3/4 mx-auto rounded-none border border-slate-600 bg-slate-800">
        <div className="flex justify-between collapse-title text-l font-medium">
          <li className="pl-6">{food_name}</li>
          <p>{calories}</p>
        </div>
      </div>
    </>
  );
}

export default FoodItem;
