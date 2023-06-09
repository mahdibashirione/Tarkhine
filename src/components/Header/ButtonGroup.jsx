import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import DropDownUser from "./DropDownUser";

const ButtonGroup = ({ showSearchPopup }) => {
  const { pathname } = useLocation();
  const { cart, auth } = useSelector((state) => state);

  return (
    <div className="flex items-center gap-2">
      {/* search */}
      <button
        onClick={showSearchPopup}
        className={`hidden lg:block p-3 rounded ${
          pathname.includes("search") ? "bg-primary" : "bg-green-100"
        }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
            fill={`${pathname.includes("search") ? "#fff" : "#417F56"}`}
          />
          <path
            d="M22.0004 22.75C21.8104 22.75 21.6204 22.68 21.4704 22.53L19.4704 20.53C19.1804 20.24 19.1804 19.76 19.4704 19.47C19.7604 19.18 20.2404 19.18 20.5304 19.47L22.5304 21.47C22.8204 21.76 22.8204 22.24 22.5304 22.53C22.3804 22.68 22.1904 22.75 22.0004 22.75Z"
            fill={`${pathname.includes("search") ? "#fff" : "#417F56"}`}
          />
        </svg>
      </button>
      {/* cart */}
      <Link
        to="/cart"
        className={`${
          pathname === "/cart" ? "bg-primary" : "bg-green-100"
        } relative  p-2 lg:p-3 rounded`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z"
            fill={`${pathname === "/cart" ? "#fff" : "#417F56"}`}
          />
          <path
            d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z"
            fill={`${pathname === "/cart" ? "#fff" : "#417F56"}`}
          />
          <path
            d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z"
            fill={`${pathname === "/cart" ? "#fff" : "#417F56"}`}
          />
          <path
            d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z"
            fill={`${pathname === "/cart" ? "#fff" : "#417F56"}`}
          />
        </svg>
        {auth && cart.length > 0 && (
          <span className="bg-green-500 text-white absolute -top-1.5 -right-1.5 w-6 h-6 flex items-center justify-center rounded-full text-sm shadow">
            {cart.length}
          </span>
        )}
      </Link>
      {/* Drop Down user */}
      <DropDownUser />
    </div>
  );
};

export default ButtonGroup;
