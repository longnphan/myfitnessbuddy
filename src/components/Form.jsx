import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { BsQuestionSquareFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
AiOutlineQuestionCircle;

function Form() {
  const userProfile = useSelector(state => state.user.profile);
  const [inputs, setInputs] = useState(userProfile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = e => {
    const name = e.target.id;
    const input = e.target.value;
    setInputs(prev => ({ ...prev, [name]: input }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateProfile(inputs));
    navigate("/tracker");
  };

  const handleInfoClick = () => {
    window.my_modal_info.showModal();
  };

  return (
    <>
      <div className="mx-auto card w-3/5 bg-primary text-neutral-content mt-6">
        <AiOutlineQuestionCircle
          className="text-3xl cursor-pointer text-neutral hover:text-sky-100 ml-auto mr-3"
          onClick={handleInfoClick}
        />
        <div className="card-body items-center text-center">
          <form className="mx-auto form-control w-full max-w-xs py-7">
            <h1 className="flex text-3xl mx-auto mb-2 -mt-2 text-neutral gap-1">
              Profile
            </h1>

            <label className="label" htmlFor="age">
              <span className="label-text text-neutral">What is your age?</span>
            </label>
            <input
              id="age"
              type="number"
              placeholder="Age"
              className="input input-bordered text-black bg-sky-100 placeholder-gray border-black w-full max-w-xs"
              value={inputs.age}
              onChange={handleOnChange}
            />

            <label className="label" htmlFor="height">
              <span className="label-text text-neutral">
                What is your height?
              </span>
            </label>
            <input
              id="height"
              type="number"
              placeholder="Height in inches"
              className="input input-bordered text-black bg-sky-100 placeholder-gray border-black w-full max-w-xs"
              value={inputs.height}
              onChange={handleOnChange}
            />

            <label className="label" htmlFor="weight">
              <span className="label-text text-neutral">
                What is your weight?
              </span>
            </label>
            <input
              id="weight"
              type="number"
              placeholder="Weight in pounds"
              className="input input-bordered text-black bg-sky-100 placeholder-gray border-black w-full max-w-xs"
              value={inputs.weight}
              onChange={handleOnChange}
            />

            <label className="label" htmlFor="gender">
              <span className="label-text text-neutral">
                What is your gender?
              </span>
            </label>
            <select
              id="gender"
              className="input input-bordered border-black bg-sky-100 text-black"
              value={inputs.gender}
              onChange={handleOnChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <button
              className="btn btn-neutral hover:bg-accent w-1/3 mt-7 mx-auto"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_info" className="modal bg-base-100">
        <form method="dialog" className="modal-box bg-slate-300">
          <h3 className="font-bold text-neutral text-2xl">
            Why Create a Profile?
          </h3>
          <p className="py-4 text-neutral text-l font-medium">
            Creating a profile allows the application to calculate the
            recommended number of calories a user should be consuming daily.
          </p>
          <div className="modal-action">
            <button className="btn hover:bg-accent">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Form;
