import { useNavigate } from "react-router-dom";
import { IoBarbell } from "react-icons/io5";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const { age, height, weight } = useSelector(state => state.user.profile);

  const handleProfileClick = () => {
    if (age && height && weight) {
      window.my_modal_1.showModal();
    } else {
      navigate("/profile");
    }
  };

  return (
    <>
      <div className="navbar bg-primary text-primary-content justify-between">
        <h1
          className="btn btn-ghost border-none normal-case text-s hover:bg-transparent sm:text-2xl"
          onClick={() => navigate("/dashboard")}
        >
          MyFitnessBuddy <IoBarbell className="text-2xl sm:text-4xl" />
        </h1>
        <ul className="gap-6 pr-4">
          <li
            className="btn btn-ghost border-none normal-case text-s sm:text-xl px-2 hover:bg-transparent hover:text-secondary "
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </li>
          <li
            className="btn btn-ghost border-none normal-case text-s sm:text-xl px-2 hover:bg-transparent hover:text-secondary "
            onClick={() => navigate("/tracker")}
          >
            Tracker
          </li>
          <li
            className="btn btn-ghost border-none normal-case text-s sm:text-xl px-2 hover:bg-transparent hover:text-secondary"
            onClick={handleProfileClick}
          >
            Profile
          </li>
        </ul>
      </div>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal bg-base-100">
        <form method="dialog" className="modal-box bg-slate-300">
          <h3 className="font-bold text-neutral text-2xl">
            Profile Already Created
          </h3>
          <p className="py-4 text-neutral text-l font-medium">
            Click EDIT PROFILE to update your profile or click CLOSE to close
            this window.
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn hover:bg-accent"
              onClick={() => navigate("/profile")}
            >
              Edit Profile
            </button>
            <button className="btn hover:bg-accent">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Navbar;
