import {
  NotificationsIcon,
  ProfileIcon,
  SearchIcon,
  ShopIcon,
} from "../public/Svgs";
import { useState } from "react";
import Categories from "./Categories";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { User} from "../public/Helpers";

const Navbar = () => {
  const navigate = useNavigate();
  const user = User
  const isAuth = localStorage.getItem("token") ? true : false; // check if user is authenticated (Redux or Context API can be used here)
  const [search, setSearch] = useState("");
  return (
    <div>
      <div
        className="sm:px-8 sm:py-1 px-3 py-2 w-calc(100% - 40px) 
        bg-white flex flex-col justify-start items-start pb-2"
      >
        <div className="flex w-full flex-row justify-between sm:gap-8 gap-1 items-center">
          <div className="flex items-center justify-start ">
            <Link to={user?.role === 3 ? `/admin` : `/`}>
              <img
                className="bg-cover object-cover w-12 h-12 md:w-24 md:h-32 rounded-full"
                src="../src/Pics/logo.png"
                alt=""
              />
            </Link>
            <h1 className="txt sm:inline-block hidden uppercase">SouQ</h1>
          </div>

          <form
            onSubmit={() => {
              if (search.trim === "")
                return alert("Please enter a search value");
              if (user?.role === 3) {
                navigate(`/admin/search/${search}`);
              } else {
                navigate(`/search/${search}`);
              }
            }}
            className="relative gg:w-[50%] w-[60%]"
          >
            <SearchIcon />
            {/* search bar */}
            <input
              type="text"
              placeholder="Rechercher"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="border-[1px] border-black rounded-2xl ps-4 py-1 w-full focus:outline-none focus:border-[1.5px]"
            />
            {/* S'inscrier button */}
          </form>
          {isAuth === false ? (
            <Link
              to="/login"
              className="bg-[#D9D9D9] text-black text-[11px] gg:text-md sm:px-10 px-3 py-2  rounded-2xl"
            >
              S'inscrire
            </Link>
          ) : (
            <Link to="/profile">
              <ProfileIcon />
            </Link>
          )}
          {isAuth && user?.role === 1 ? (
            <Link to="/card">
              <div className="hover:cursor-pointer">
                <ShopIcon />
              </div>
            </Link>
          ) : isAuth && user?.role === 2 ? (
            <Link to="/commandes">
              <div className="hover:cursor-pointer">
                <NotificationsIcon />
              </div>
            </Link>
          ) : isAuth && user?.role === 3 ? (
            <Link to="/admin/notifications">
              <div className="hover:cursor-pointer">
                <NotificationsIcon />
              </div>
            </Link>
          ) : (
            <Link to="/card">
              <div className="hover:cursor-pointer">
                <ShopIcon />
              </div>
            </Link>
          )}
        </div>
        <div className="flex justify-center items-center">
          <Categories />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
