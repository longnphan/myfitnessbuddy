function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <h1 className="btn btn-ghost normal-case text-2xl hover:bg-primary">
        MyFitnessBuddy
      </h1>
      <div className="navbar-end gap-6">
        <h1 className="btn btn-ghost normal-case text-xl px-2 cursor-pointer hover:text-slate-400 hover:bg-primary">
          Dashboard
        </h1>
        <h1 className="btn btn-ghost normal-case text-xl px-2 cursor-pointer hover:text-slate-400 hover:bg-primary">
          Tracker
        </h1>
        <h1 className="btn btn-ghost normal-case text-xl px-2 cursor-pointer hover:text-slate-400 hover:bg-primary">
          Profile
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
