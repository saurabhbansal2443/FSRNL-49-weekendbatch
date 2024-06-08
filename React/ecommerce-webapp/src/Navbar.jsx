let Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-green-500">GeeksCart</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Cart</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Theme</a>
            </li>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
