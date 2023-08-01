import { useSelector } from "react-redux";

function RemainingCals() {
  const user = useSelector(state => state.user.profile);
  const { breakfast, lunch, dinner, snacks } = useSelector(state => state.user);
  const bfMeals = breakfast.reduce((acc, food) => acc + food.calories, 0);
  const lunchMeals = lunch.reduce((acc, food) => acc + food.calories, 0);
  const dinnerMeals = dinner.reduce((acc, food) => acc + food.calories, 0);
  const snackMeals = snacks.reduce((acc, food) => acc + food.calories, 0);
  const calsConsumed = bfMeals + lunchMeals + dinnerMeals + snackMeals;

  const calcDailyCals = bio => {
    if (bio.gender === "male") {
      let maleResult = 15 * bio.weight;
      return maleResult;
    } else if (bio.gender === "female") {
      let femaleResult = 12 * bio.weight;
      return femaleResult;
    }
  };

  const userCalories = calcDailyCals(user);

  return (
    <div className="w-3/5 mx-auto rounded border border-slate-600 bg-primary text-base-100 mt-7">
      <div className="justify-between collapse-title text-l font-medium">
        <p className="text-xl">Calories Remaining</p>

        <div className="flex justify-around mt-3">
          <div className="text-center">
            <p>{userCalories}</p>
            <p className="-mt-1 font-bold">Calories</p>
          </div>

          <div>
            <p className="font-bold">-</p>
            <p></p>
          </div>

          <div className="text-center">
            <p>{calsConsumed}</p>
            <p className="-mt-1 font-bold">Food</p>
          </div>

          <div>
            <p className="font-bold">=</p>
            <p></p>
          </div>

          <div className="text-center">
            <p>{userCalories - calsConsumed}</p>
            <p className="-mt-1 font-bold">Remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemainingCals;
