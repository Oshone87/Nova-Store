import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white ring-1 ring-slate-900/5 z-10"
      style={{ height: "80px" }}
    >
      <div className="h-full px-4 flex items-center justify-between max-xs:px-2">
        {/* logo */}
        <div>
          <Link to="/">
            <img
              src="/src/assets/NOVA__3_-removebg-preview.png"
              alt="logo"
              height={75}
              width={88}
            />
          </Link>
        </div>
        {/* navbar desktop */}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        {/* navbar mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col gap-y-12 fixed top-20 mt-5 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />
        {/* buttons */}
        <div className="flex items-center sm:gap-x-6 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          )}
          <div className="flex items-center cursor-pointer sm:gap-x-6">
            <NavLink to={"cart-page"} className={"flex"}>
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">
                {getTotalCartItems()}
              </span>
            </NavLink>
            {/* <NavLink to={"logout"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-19"}><img src="/src/assets/logout.svg" height={19} width={19}/>Logout</NavLink> */}
            <NavLink
              to={"login"}
              className={"btn_secondary_rounded flexCenter gap-x-2 medium-19"}
            >
              <img src="/src/assets/user.svg" height={19} width={19} />
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
