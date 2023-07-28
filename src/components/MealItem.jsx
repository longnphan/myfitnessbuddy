function MealItem() {
  return (
    <>
      <div className="rounded-none border border-slate-600 bg-slate-800 mt-10">
        <div className="collapse-title text-xl font-bold font-medium">
          Breakfast
        </div>
      </div>
      <div className="rounded-none border border-slate-600 bg-slate-800">
        <div className="collapse-title text-xl font-medium">Food Items...</div>
      </div>
      <div className="rounded-none border border-slate-600 bg-slate-800">
        <div className="collapse-title text-xl text-blue-500 font-medium cursor-pointer">
          ADD FOOD
        </div>
      </div>
    </>
  );
}

export default MealItem;
