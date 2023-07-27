function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content justify-between">
      <h1 className="btn btn-ghost normal-case text-2xl hover:bg-transparent">
        MyFitnessBuddy
      </h1>
      <ul className="gap-6 pr-4">
        <li className="btn btn-ghost normal-case text-xl px-2 cursor-pointer hover:text-slate-400 hover:bg-transparent">
          Dashboard
        </li>
        <li className="btn btn-ghost normal-case text-xl px-2 cursor-pointer hover:text-slate-400 hover:bg-transparent">
          Tracker
        </li>
        <li className="btn btn-ghost normal-case text-xl px-2 cursor-pointer hover:text-slate-400 hover:bg-transparent">
          Profile
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
