import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import PopUp from "../../common/PopUp";
import branches from "../../../data/branches";

const NavbarPc = () => {
  const [isPopUpBranch, setIsPopUpBranch] = useState(false);
  const { pathname } = useLocation();
  const branch = getBeranchURL(pathname);
  const menu = [
    { id: 1, title: "غذای اصلی", url: "/menu" },
    { id: 2, title: "پیش غذا", url: "/menu" },
    { id: 3, title: "دسر", url: "/menu" },
    { id: 4, title: "نوشیدنی", url: "/menu" },
  ];

  function handleOpenPopUpBranch() {
    setIsPopUpBranch(true);
  }
  function handleClosePopUpBranch() {
    setIsPopUpBranch(false);
  }
  function getBeranchURL(URL) {
    switch (URL) {
      case "/akbatan":
        return "اکباتان";
      case "/vanak":
        return "ونک";
      case "/aghdasiye":
        return "اقدسیه";
      case "/chaloos":
        return "چالوس";
      default:
        return "شعبه";
    }
  }

  return (
    <nav className="hidden lg:flex items-center gap-6 leading-8">
      <Link
        className={`${
          pathname === "/"
            ? "text-primary border-primary"
            : "border-transparent"
        } border-b-2`}
        to="/"
      >
        صفحه اصلی
      </Link>
      <ul className="relative group">
        <li
          className={`flex items-center gap-1 cursor-pointer border-b-2 ${
            pathname.includes(
              "/akbatan" || "/vanak" || "/aghdasiye" || "/chaloos"
            )
              ? "border-primary text-primary"
              : "border-transparent"
          }`}
        >
          {branch !== "شعبه" && "شعبه"} {branch}
          <FiChevronDown className="group-hover:rotate-180 duration-200 text-xl" />
        </li>
        <ul className="absolute max-h-0 group-hover:max-h-60 overflow-hidden duration-200 top-full -right-2 bg-white rounded-lg shadow">
          {branches.map((branch) => {
            return (
              <li key={branch.id}>
                <Link
                  className="p-4 block w-[136px] leading-6 hover:bg-green-100 hover:text-primary"
                  to={branch.url}
                >
                  {branch.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </ul>
      <ul className="relative group">
        <li
          className={`${
            pathname === "/menu"
              ? "border-primary text-primary"
              : "border-transparent"
          } flex items-center gap-1 cursor-pointer border-b-2`}
        >
          منو
          <FiChevronDown className="group-hover:rotate-180 duration-200 text-xl" />
        </li>
        <ul className="absolute max-h-0 group-hover:max-h-60 overflow-hidden duration-200 top-full -right-2 bg-white rounded-lg shadow">
          {menu.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  className="p-4 block w-[136px] leading-6 hover:text-primary hover:bg-green-100"
                  to={item.url}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </ul>
      <Link
        className={`${
          pathname === "/namayandegi"
            ? "text-primary border-primary"
            : "border-transparent"
        } border-b-2`}
        to="/namayandegi"
      >
        اعطای نمایندگی
      </Link>
      <Link
        className={`${
          pathname === "/aboutme"
            ? "text-primary border-primary"
            : "border-transparent"
        } border-b-2`}
        to="/aboutme"
      >
        درباره ما
      </Link>
      <Link
        className={`${
          pathname === "/callme"
            ? "text-primary border-primary"
            : "border-transparent"
        } border-b-2`}
        to="/callme"
      >
        تماس با ما
      </Link>
      {/* <PopUp
        isShow={isPopUpBranch}
        handleClose={handleClosePopUpBranch}
        title="انتخاب شعبه"
      >
        <div className="select-none py-6">
          <h3 className="w-full text-center mb-6 text-gray-500">
            برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:
          </h3>
          <ul className="w-ful px-4 grid grid-cols-4 gap-2">
            {branches.map((branch) => {
              return (
                <li
                  key={branch.id}
                  className="col-span-1 border border-[#cbcbcb] overflow-hidden rounded-lg shadow"
                >
                  <Link
                    onClick={handleClosePopUpBranch}
                    to={branch.url}
                    className="flex pb-4 h-full flex-col items-center"
                  >
                    <img
                      className="w-full h-[150px] object-cover"
                      src={branch.image}
                      alt=""
                    />
                    <span className="mt-2 leading-6">{branch.title}</span>
                    <p className="line-clamp-3 text-[12px] leading-5 text-gray-500 text-center">
                      {branch.address}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </PopUp> */}
    </nav>
  );
};

export default NavbarPc;
