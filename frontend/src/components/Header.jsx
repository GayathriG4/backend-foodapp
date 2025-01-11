import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { GiShoppingBag } from "react-icons/gi";
import { MdClose, MdMenu } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";

const Header = ({ setShowLogin }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [header, setHeader] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // React Router hook to access the current URL
  const {getTotalCartItems,token,setToken} = useContext(ShopContext)

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 35 ? setHeader(true) : setHeader(false);
    };

    const checkUrl = () => {
      const currentUrl = window.location.href;
      if (currentUrl !== "http://localhost:5174/") {
        setHeader(true);
      } else {
        window.addEventListener("scroll", handleScroll);
      }
    };

    checkUrl();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <header
      className={`${
        header ? "bg-white shadow-sm py-4" : "bg-transparent py-5"
      } fixed left-0 right-0 w-full z-10 transition-all duration-300`}
    >
      <div className="max-padd-container flexBetween">
        {/* logo */}
        <Link to={"/"} className="bold-24">
          <h4>
            Food<span className="text-secondary">Stack</span>
          </h4>
        </Link>
        {/* navbar */}
        <div className="flexBetween gap-x-14">
          {/* combined navbar */}
          <Navbar
            header={header}
            menuOpened={menuOpened}
            containerStyles={`${
              menuOpened
                ? "flex md:hidden items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-xl w-64 medium-16 ring-2 ring-slate-900/5 transition-all duration-300"
                : "hidden md:flex gap-x-5 xl:gap-x-9 medium-15"
            }`}
          />
          <div className="flexBetween gap-x-2 xs:gap-x-8">
            {/* buttons */}
            {!menuOpened ? (
              <MdMenu
                onClick={toggleMenu}
                className="md:hidden cursor-pointer text-2xl"
              />
            ) : (
              <MdClose
                onClick={toggleMenu}
                className="md:hidden cursor-pointer text-2xl"
              />
            )}
            <Link to={"/cart"} className="flex relative">
              <GiShoppingBag className="text-[25px]" />
              <span className="bg-white text-tertiary text-sm absolute -top-2.5 -right-2.5 flexCenter w-5 h-5 rounded-full shadow-md">
                {getTotalCartItems()}
              </span>
            </Link>
            {!token ? (
              <button
                onClick={() => setShowLogin(true)}
                className="btn-light rounded-full flexCenter gap-x-2"
              >
                <LuUser2 className="bold-18" /> Login
              </button>
            ) : (
              <div className="group relative">
                <FaCircleUser className="text-2xl " />
                <ul className="bg-primary shadow-sm p-3 w-24 ring-1 ring-slate-900/15 rounded absolute right-0 group-hover:flex flex-col hidden">
                  <li
                    onClick={() => navigate("/myorders")}
                    className="flexCenter gap-x-2 cursor-pointer"
                  >
                    <FiPackage className="text-[19px]" />
                    <p>Orders</p>
                  </li>
                  <hr className="my-2" />
                  <li
                    onClick={logout}
                    className="flexCenter gap-x-2 cursor-pointer"
                  >
                    <TbLogout className="text-[19px]" />
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
