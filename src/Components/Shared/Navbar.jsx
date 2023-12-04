import { Link, NavLink } from "react-router-dom";
import logo_url from "./../../../public/logo3.png";
import { useContext } from "react";
import { AuthContext } from "./../../Provider/AuthProvider";
import { RxDropdownMenu } from "react-icons/rx";
import { PiSignOutBold } from "react-icons/pi";
// import { MdLightMode, MdDarkMode } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
import { HiPencilSquare } from "react-icons/hi2";
// import { BsFillBookmarkCheckFill } from "react-icons/bs";
import useOrganizer from "../../hooks/useOrganizer";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  //   const { changeTheme, mode } = useTheme();
  const { user, logOut } = useContext(AuthContext);
  const { loggedInUser } = useContext(AuthContext);
  const [isOrganizer] = useOrganizer();
  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navItems = (
    <>
      <li className="">
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "#004aac" : "",
              color: isActive ? "white" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          className="font-bold hover:font-extrabold"
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "#004aac" : "",
              color: isActive ? "white" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          className="font-bold hover:font-extrabold"
          to={"/allPosts"}
        >
          All Camps
        </NavLink>
      </li>
      {user && isOrganizer && (
        <li className="">
          <NavLink
            style={({ isActive, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "#004aac" : "",
                color: isActive ? "white" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
            className="font-bold hover:font-extrabold"
            to={"/addCamp"}
          >
            Add New Camp
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="max-w-screen-xl mx-auto bg-light_bg">
      <div className="fixed z-20 max-w-screen-xl w-full border-b-2 border-b-black  bg-light_bg">
        <div className="flex items-center justify-center">
          <img
            className="h-8 md:h-12 ml-4 md:hidden"
            src={logo_url}
            alt="logo"
          />
        </div>
        <div className="navbar">
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
                className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {navItems}
              </ul>
            </div>
            <img
              className="h-8 md:h-12 ml-4 hidden md:block"
              src={logo_url}
              alt="logo"
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end">
            {/* <button
              onClick={changeTheme}
              className="bg-dark_green  text-white  mr-2 px-2 py-2 rounded-full font-bold capitalize text-sm md:text-xl hover:bg-slate-300"
            >
              {mode === "dark" ? (
                <MdLightMode></MdLightMode>
              ) : (
                <MdDarkMode></MdDarkMode>
              )}
            </button> */}
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="">
                  <div className="flex items-center bg-slate-500 rounded-full pr-4 gap-2">
                    <div className="avatar">
                      <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={
                            user?.photoURL
                              ? user?.photoURL
                              : "./../../../public/profile-avatar.jpg"
                          }
                          referrerPolicy="no-referrer"
                          alt="profile"
                        />
                      </div>
                    </div>
                    <RxDropdownMenu />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black"
                >
                  <li className="max-w-full">
                    <div className="flex flex-col items-start hover:cursor-default bg-slate-300 hover:bg-slate-300 glass mb-3 max-w-full">
                      <h2 className="font-bold break-words max-w-full">
                        {user?.displayName}
                      </h2>
                      <h2 className="font-bold text-red-700 break-words max-w-full">
                        {loggedInUser?.role}
                      </h2>
                      <p className="break-words max-w-full text-xs">
                        {user?.email}
                      </p>
                    </div>
                  </li>
                  {/* <li className="max-w-full">
                    <Link
                      to={`/userProfile/${loggedInUser?._id}`}
                      className="flex items-center glass text-2xl hover:cursor-default bg-slate-400 hover:bg-slate-500  mb-3"
                    >
                      <h2>
                        <CgProfile />
                      </h2>
                      <h2>Profile</h2>
                    </Link>
                  </li> */}
                  <li className="max-w-full">
                    <Link
                      to={`/dashBoard/${loggedInUser?._id}`}
                      className="flex items-center glass text-2xl hover:cursor-default bg-slate-400 hover:bg-slate-500  mb-3"
                    >
                      <h2>
                        <HiPencilSquare />
                      </h2>
                      <h2>Dashboard</h2>
                    </Link>
                  </li>
                  {/* <li className="max-w-full">
                    <Link
                      to={`/userWishlist/${loggedInUser?._id}`}
                      className="flex items-center glass text-2xl hover:cursor-default bg-slate-400 hover:bg-slate-500  mb-3"
                    >
                      <h2>
                        <BsFillBookmarkCheckFill />
                      </h2>
                      <h2>Wishlist</h2>
                    </Link>
                  </li> */}
                  <li className="max-w-full">
                    <button
                      onClick={handleSignOut}
                      className="flex items-center hover:cursor-default bg-slate-400 hover:bg-slate-500 glass text-2xl"
                    >
                      <h2>
                        <PiSignOutBold />
                      </h2>
                      <h2>Sign Out</h2>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center">
                {/* <button
                  onClick={changeTheme}
                  className="bg-dark_green dark:bg-slate-200 text-white dark:text-black mr-2 px-2 py-2 rounded-full font-bold capitalize text-sm md:text-xl hover:bg-slate-300"
                >
                  {mode === "dark" ? (
                    <MdLightMode></MdLightMode>
                  ) : (
                    <MdDarkMode></MdDarkMode>
                  )}
                </button> */}
                <Link to={"/signup"}>
                  <button className="bg-slate-200 mr-2 glass px-2 md:px-6 py-2 rounded-md font-bold capitalize text-sm md:text-xl hover:bg-slate-300 ">
                    Sign Up
                  </button>
                </Link>
                <Link to={"/signin"}>
                  <button className="bg-slate-200 glass px-2 md:px-6 py-2 rounded-md font-bold capitalize text-sm md:text-xl hover:bg-slate-300 ">
                    Sign In
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
