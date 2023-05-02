import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import PopUp from "../../common/PopUp";
import branches from "../../../data/branches";

const NavbarPc = () => {
  const [isPopUpBranch, setIsPopUpBranch] = useState(false);
  const { pathname } = useLocation();

  function handleOpenPopUpBranch() {
    setIsPopUpBranch(true);
  }
  function handleClosePopUpBranch() {
    setIsPopUpBranch(false);
  }


  const branch = getBeranchURL(pathname);
  
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
    <nav className="hidden lg:flex items-center gap-6">
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
      <button
        onClick={handleOpenPopUpBranch}
        className={`${
          branch !== "شعبه" && "text-primary border-b-2 border-primary"
        } relative group flex items-center gap-1 leading-9 cursor-pointer`}
      >
        <span>
          {branch !== "شعبه" && "شعبه"} {branch}
        </span>
        <FiChevronDown className="text-xl" />
      </button>
      <div className="flex items-center gap-1 leading-9 cursor-pointer">
        منو
        <FiChevronDown className="text-xl" />
      </div>
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
      <PopUp
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
                      className="w-full h-[108px] object-cover"
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
      </PopUp>
    </nav>
  );
};

export default NavbarPc;
