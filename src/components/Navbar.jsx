import { useNavigate } from "react-router-dom";
import { IoBarbell } from "react-icons/io5";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const profile = useSelector(state => state.user.profile);

  const handleProfileClick = () => {
    if (profile.name && profile.height) {
      window.my_modal_1.showModal();
    } else {
      navigate("/profile");
    }
  };

  return (
    <>
      <div className="navbar bg-primary text-primary-content justify-between">
        <h1
          className="btn btn-ghost border-none normal-case text-2xl hover:bg-transparent"
          onClick={() => navigate("/dashboard")}
        >
          MyFitnessBuddy <IoBarbell className="text-4xl" />
        </h1>
        <ul className="gap-6 pr-4">
          <li
            className="btn btn-ghost border-none normal-case text-xl px-2 hover:bg-transparent hover:text-secondary "
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </li>
          <li
            className="btn btn-ghost border-none normal-case text-xl px-2 hover:bg-transparent hover:text-secondary "
            onClick={() => navigate("/tracker")}
          >
            Tracker
          </li>
          <li
            className="btn btn-ghost border-none normal-case text-xl px-2 hover:bg-transparent hover:text-secondary"
            onClick={handleProfileClick}
          >
            Profile
          </li>
        </ul>
      </div>

      {/* Modal */}
      {/* <button className="btn" onClick={() => window.my_modal_1.showModal()}>
        open modal
      </button> */}
      <dialog id="my_modal_1" className="modal bg-base-100">
        <form method="dialog" className="modal-box bg-slate-300">
          <h3 className="font-bold text-neutral text-2xl">
            Profile Already Created
          </h3>
          <p className="py-4 text-neutral text-l font-medium">
            Click "EDIT PROFILE" to update your profile or click "CLOSE" to
            close this window.
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn hover:bg-slate-600"
              onClick={() => navigate("/profile")}
            >
              Edit Profile
            </button>
            <button className="btn hover:bg-slate-600">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Navbar;
