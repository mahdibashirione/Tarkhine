import { FiChevronDown, FiChevronLeft, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import barnches from "../../../data/branches";

const Accurdion = ({ id, label, children, isBranch }) => {
  return (
    <div className=" relative overflow-hidden">
      <input
        type="checkbox"
        className="absolute peer top-0 right-0 opacity-0"
        id={id}
      />
      <label
        className={`${
          isBranch && "text-primary border-b-2 pb-2"
        } flex gap-1 justify-center items-center border-primary cursor-pointer`}
        htmlFor={id}
      >
        {label}
        <FiChevronDown className="text-xl" />
      </label>
      <div className="peer-checked:max-h-fit max-h-0">{children}</div>
    </div>
  );
};

const Navbar = ({ isShow = false, handleClose }) => {
  const { pathname } = useLocation();
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
    <nav
      className={`${
        isShow ? "max-h-screen" : " max-h-0"
      }  duration-200 overflow-hidden lg:hidden h-screen w-full bg-white flex-col absolute top-full right-0 z-30 flex items-center gap-6`}
    >
      <Link
        onClick={handleClose}
        className={`${
          pathname === "/"
            ? "text-primary border-primary"
            : "border-transparent"
        } border-b-2 mt-4`}
        to="/"
      >
        صفحه اصلی
      </Link>
      {/* انتخاب شعبه */}
      <Accurdion
        isBranch={branch !== "شعبه" ? branch : false}
        label={branch !== "شعبه" ? `شعبه ${branch}` : "شعبه"}
        id="shobe"
      >
        <div className="w-full flex flex-col text-sm pt-4 items-center gap-3 text-gray-500">
          {barnches.map((branch) => {
            return (
              <Link key={branch.id} onClick={handleClose} to={branch.url}>
                {branch.title}
              </Link>
            );
          })}
        </div>
      </Accurdion>
      <Link
        onClick={handleClose}
        to="/menu"
        className="flex items-center gap-1"
      >
        منو
        <FiChevronDown className="text-xl" />
      </Link>
      <Link
        onClick={handleClose}
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
        onClick={handleClose}
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
        onClick={handleClose}
        className={`${
          pathname === "/callme"
            ? "text-primary border-primary"
            : "border-transparent"
        } border-b-2`}
        to="/callme"
      >
        تماس با ما
      </Link>
    </nav>
  );
};

export default Navbar;
