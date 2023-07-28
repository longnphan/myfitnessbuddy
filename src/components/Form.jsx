import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../store/userSlice";

function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "male",
  });

  const dispatch = useDispatch();

  const handleOnChange = e => {
    const name = e.target.id;
    const input = e.target.value;

    setInputs(prev => ({ ...prev, [name]: input }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateProfile(inputs));
  };

  return (
    <form className="mx-auto form-control w-full max-w-xs py-7">
      <h1 className="text-3xl mx-auto mb-2">Create Profile</h1>
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
        Submit
      </button>
    </form>
  );
}

export default Form;
