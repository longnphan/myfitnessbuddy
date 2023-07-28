import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-primary text-primary-content justify-between">
      <h1
        className="btn btn-ghost normal-case text-2xl hover:bg-transparent"
        onClick={() => navigate("/")}
      >
        MyFitnessBuddy
      </h1>
      <ul className="gap-6 pr-4">
        <li
          className="btn btn-ghost normal-case text-xl px-2 cursor-pointer hover:text-slate-400 hover:bg-transparent"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </li>
        <li
          className="btn btn-ghost normal-case text-xl px-2 cursor-pointer hover:text-slate-400 hover:bg-transparent"
          onClick={() => navigate("/tracker")}
        >
          Tracker
        </li>
        <li
          className="btn btn-ghost normal-case text-xl px-2 cursor-pointer hover:text-slate-400 hover:bg-transparent"
          onClick={() => navigate("/profile")}
        >
          Profile
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
