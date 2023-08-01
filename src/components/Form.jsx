import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../store/userSlice";

function Form() {
  const [isComplete, setIsComplete] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    calories: "",
    gender: "male",
  });
  const [profile, setProfile] = useState([]);

  const dispatch = useDispatch();

  const calcDailyCals = bio => {
    if (bio.gender === "male") {
      let maleResult = 15 * bio.weight;
      return maleResult;
    }

    if (bio.gender === "female") {
      let femaleResult = 12 * bio.weight;
      return femaleResult;
    }
  };

  const handleOnChange = e => {
    const name = e.target.id;
    const input = e.target.value;

    setInputs(prev => ({ ...prev, [name]: input }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setInputs(prev => ({ ...prev, calories: calcDailyCals(inputs) }));
    dispatch(updateProfile(inputs));
    setIsComplete(!isComplete);
  };

  return (
    <div className="mx-auto card w-3/5 bg-neutral text-neutral-content mt-6">
      <div className="card-body items-center text-center">
        <form className="mx-auto form-control w-full max-w-xs py-7">
          <h1 className="text-3xl mx-auto mb-2">
            {isComplete ? "Edit Profile" : "Create Profile"}
          </h1>
          <label className="label" htmlFor="name">
            <span className="label-text">What is your first name?</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="First name"
            className="input input-bordered input-info w-full max-w-xs"
            value={inputs.name}
            onChange={handleOnChange}
          />

          <label className="label" htmlFor="age">
            <span className="label-text">What is your age?</span>
          </label>
          <input
            id="age"
            type="number"
            placeholder="Age"
            className="input input-bordered input-info w-full max-w-xs"
            value={inputs.age}
            onChange={handleOnChange}
          />

          <label className="label" htmlFor="height">
            <span className="label-text">What is your height?</span>
          </label>
          <input
            id="height"
            type="number"
            placeholder="Height in inches"
            className="input input-bordered input-info w-full max-w-xs"
            value={inputs.height}
            onChange={handleOnChange}
          />

          <label className="label" htmlFor="weight">
            <span className="label-text">What is your weight?</span>
          </label>
          <input
            id="weight"
            type="number"
            placeholder="Weight in pounds"
            className="input input-bordered input-info w-full max-w-xs"
            value={inputs.weight}
            onChange={handleOnChange}
          />

          <label className="label" htmlFor="gender">
            <span className="label-text">What is your gender?</span>
          </label>
          <select
            id="gender"
            className="input input-info"
            value={inputs.gender}
            onChange={handleOnChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button
            className="btn btn-primary w-1/3 mt-7 mx-auto"
            onClick={handleSubmit}
          >
            {isComplete ? "Edit" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
