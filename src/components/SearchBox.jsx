import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ popUpClose }) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.length) {
      navigate(`/search?query=${searchValue}`);
      setSearchValue("");
    }
    popUpClose && popUpClose();
  };

  return (
    <section className="container">
      <form
        className="max-w-[350px] relative mx-auto"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="peer bg-transparent text-sm w-full outline-none md:text-lg bg-white border ring-green-200/80 rounded-lg max-w-[350px] px-4 py-2.5 focus:border-primary focus:ring-4 duration-200"
          type="text"
          placeholder="جستوجو..."
        />
        <svg
          className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_22_30)">
            <path
              d="M1 11.4783C1 15.8486 1.78302 18.3581 3.30283 19.8237C4.83125 21.2975 7.35021 21.9565 11.4783 21.9565C15.6063 21.9565 18.1253 21.2975 19.6537 19.8237C21.1735 18.3581 21.9565 15.8486 21.9565 11.4783C21.9565 7.10791 21.1735 4.59843 19.6537 3.13289C18.1253 1.65905 15.6063 1 11.4783 1C7.35021 1 4.83125 1.65905 3.30283 3.13289C1.78302 4.59843 1 7.10791 1 11.4783Z"
              stroke="#A4A4A4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.9564 22.9566L20.3477 20.3479"
              stroke="#A4A4A4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_22_30">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </form>
    </section>
  );
};

export default SearchBox;
