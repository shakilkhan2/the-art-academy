import { useContext } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AuthContext } from "../../../providers/authProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link onClick={handleLogOut} to="/class">
          Classes
        </Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>
      {/* <li>
        <Link className="absulate" to="/dashboard/mycart"><div > Dashboard
  <FaShoppingCart/>
  <div className="relative -top-6 text-amber-500  font-semibold left-3">{cart?.length || 0}</div>
</div></Link>
      </li> */}

      {user ? (
        <>
        <li>
            <Link to="/dashboard/mycart">Dashboard</Link>
          </li>
          <li>
            <Link onClick={handleLogOut}>Logout</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}

      {user?.uid && (
        <>
          {" "}
          {user?.photoURL ? (
            
            <span className="mr-12" title={user?.displayName}>
              
              <img
                className="h-8 w-8 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </span>
          ) : (
            <span
              title={user?.displayName}
              className="h-8 w-8 border border-gray-600 rounded-full flex justify-center mx-3 items-center text-2xl "
            >
              <BiUser />
            </span>
          )}
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100  fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <p className="text-lg text-amber-400">
              The{" "}
              <span className="text-2xl font-bold text-amber-500">
                Art Academy
              </span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
