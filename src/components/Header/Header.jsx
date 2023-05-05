import { useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "../common/PopUp";
import SearchBox from "../SearchBox";
import ButtonGroup from "./ButtonGroup";
import Navbar from "./Navbar/Navbar";
import NavbarPc from "./Navbar/NavbarPc";

const Header = () => {
  const [isNavbar, setIsNavbar] = useState(false);
  const [isSearchPopup, setIsSearchPopup] = useState(false);

  function handleShowSearchPopup() {
    setIsSearchPopup(true);
  }
  function handleCloseSearchPopup() {
    setIsSearchPopup(false);
  }
  function handleCluseNavbar() {
    setIsNavbar(false);
  }

  return (
    <header className="w-full bg-white fixed top-0 right-0 z-20 p-4 lg:py-8 shadow">
      <div className="max-w-[1440px] container flex items-center justify-between">
        <button
          onClick={() => setIsNavbar(!isNavbar)}
          className="w-7 h-6 overflow-hidden lg:hidden flex flex-col justify-between"
        >
          <div
            className={`${
              isNavbar ? "rotate-45 translate-y-2.5" : "rotate-0"
            } bg-primary w-full h-1 rounded-full duration-200`}
          ></div>
          <div
            className={`${
              isNavbar ? "translate-x-10" : "translate-x-0"
            } bg-primary w-full h-1 rounded-full duration-200`}
          ></div>
          <div
            className={`${
              isNavbar ? "-rotate-45 -translate-y-2.5" : "rotate-0"
            } bg-primary w-full h-1 rounded-full duration-200`}
          ></div>
        </button>
        {/* logo berand */}
        <Link className="w-[102px] lg:w-[155px] block" to="/">
          <img src="/images/Logo.svg" alt="logo-tarkhine" />
        </Link>
        <Navbar isShow={isNavbar} handleClose={handleCluseNavbar} />
        <NavbarPc />
        <ButtonGroup showSearchPopup={handleShowSearchPopup} />
      </div>
      <PopUp
        title="جستوجو"
        isShow={isSearchPopup}
        handleClose={handleCloseSearchPopup}
      >
        <div className="py-8 px-12">
          <p className="select-none mb-4">
            لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
          </p>
          <SearchBox popUpClose={(e) => setIsSearchPopup(false)} />
        </div>
      </PopUp>
    </header>
  );
};

export default Header;
