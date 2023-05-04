import { useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "../common/PopUp";
import ButtonGroup from "./ButtonGroup";
import Navbar from "./Navbar/Navbar";
import NavbarPc from "./Navbar/NavbarPc";

const Header = () => {
  const [isNavbar, setIsNavbar] = useState(false);
  const [isSearchPopup, setIsSearchPopup] = useState(false);
  const [search, setSearch] = useState("");

  function handleShowSearchPopup() {
    setIsSearchPopup(true);
  }

  function handleCloseSearchPopup() {
    setIsSearchPopup(false);
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    handleCloseSearchPopup();
    setSearch("");
  };

  const handleCluseNavbar = () => {
    setIsNavbar(false);
  };

  return (
    <header className="w-full bg-white fixed top-0 right-0 z-20 p-4 lg:py-8 shadow">
      <div className="container flex items-center justify-between">
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
        <form
          onSubmit={handleSubmitSearch}
          className="flex flex-col p-8 items-center gap-4 pt-10 pb-12"
        >
          <p className="select-none">
            لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
          </p>
          <div className="w-full mt-2 max-w-[409px] flex py-2 border px-4 border-[#cbcbcb] rounded-lg">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none w-full flex-1 border-none text-sm placeholder:text-[#353535]"
              type="text"
              placeholder="جستجو"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                fill="#353535"
              />
              <path
                d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                fill="#353535"
              />
            </svg>
          </div>
        </form>
      </PopUp>
    </header>
  );
};

export default Header;
