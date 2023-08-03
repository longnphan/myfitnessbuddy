import { useNavigate } from "react-router-dom";

function SearchFoodCard({ handleSubmit, handleOnChange, searchInput }) {
  const navigate = useNavigate();

  return (
    <div className="card w-3/5 mx-auto rounded bg-primary mt-6">
      <p
        className="text-2xl pl-2 text-neutral hover:text-accent cursor-pointer"
        onClick={() => navigate("/tracker")}
      >
        &#8592;
      </p>
      <div className="card-body items-center text-center -mt-2">
        <form
          className="mx-auto form-control w-full max-w-xs"
          onSubmit={handleSubmit}
        >
          <input
            id="search"
            type="text"
            placeholder="Search for food item"
            className="input input-bordered border-black text-black bg-sky-100  placeholder-gray w-full max-w-xs"
            value={searchInput}
            onChange={e => handleOnChange(e)}
          />

          <button className="btn btn-neutral hover:bg-accent w-1/3 mt-7 mx-auto">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchFoodCard;
