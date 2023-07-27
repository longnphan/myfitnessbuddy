function Form() {
  return (
    <div className="mx-auto form-control w-full max-w-xs py-7">
      <h1 className="text-3xl">Create Profile</h1>
      <label className="label" htmlFor="name">
        <span className="label-text">What is your first name?</span>
      </label>
      <input
        id="name"
        type="text"
        placeholder="First name"
        className="input input-bordered input-info w-full max-w-xs"
      />

      <label className="label" htmlFor="age">
        <span className="label-text">What is your age?</span>
      </label>
      <input
        id="age"
        type="text"
        placeholder="Age"
        className="input input-bordered input-info w-full max-w-xs"
      />

      <label className="label" htmlFor="height">
        <span className="label-text">What is your height?</span>
      </label>
      <input
        id="height"
        type="text"
        placeholder="Height in inches"
        className="input input-bordered input-info w-full max-w-xs"
      />

      <label className="label" htmlFor="weight">
        <span className="label-text">What is your weight?</span>
      </label>
      <input
        id="weight"
        type="text"
        placeholder="Weight in pounds"
        className="input input-bordered input-info w-full max-w-xs"
      />

      <label className="label" htmlFor="gender">
        <span className="label-text">What is your gender?</span>
      </label>
      <select id="gender" className="input input-info">
        <option value="male">Male</option>
        <option value="male">Female</option>
      </select>
      {/* <input
        id="gender"
        type="text"
        placeholder="Gender"
        className="input input-bordered input-info w-full max-w-xs"
      /> */}
    </div>
  );
}

export default Form;
