import { useState } from "react";

const SearchBoxPc = () => {
  const [searchValue, setSearchValue] = useState("");

  const BestSearchItem = ({ title }) => (
    <li className="border border-zinc-800 py-1 px-3 rounded-full cursor-pointer">
      {title}
    </li>
  );
  const BeforeSearchItem = ({ title }) => (
    <li className="cursor-pointer py-1">{title}</li>
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(searchValue);
        setSearchValue("");
      }}
      className="relative hidden w-full md:flex items-center gap-4 pl-0 bg-gray-200 rounded-lg py-2 px-4 mx-2 md:ml-0 md:mr-8"
    >
      <svg
        width="24"
        height="24"
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
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="peer bg-transparent text-sm w-64 outline-none border-none md:text-lg"
        type="text"
        placeholder="جستوجو..."
      />
      {/* Search bar */}
      <aside className="select-none max-h-0 z-40 peer-focus:max-h-fit text-sm duration-500 overflow-hidden absolute top-full mt-4 right-0 w-full bg-white rounded-lg shadow">
        <div className="my-3">
          <h3 className="text-gray-500 mb-2 mr-2">پر مخاطب ترین:</h3>
          <ul className="w-full flex gap-2 overflow-x-auto scrollbar-none whitespace-nowrap px-4">
            <BestSearchItem title="ماشین لباسشویی" />
            <BestSearchItem title="ماشین لباسشویی" />
            <BestSearchItem title="ماشین لباسشویی" />
            <BestSearchItem title="ماشین لباسشویی" />
          </ul>
        </div>
        <div className="mb-3">
          <h3 className="text-gray-500 mb-2 mr-2">جستوجوهای اخیر:</h3>
          <ul className="w-full flex flex-col gap-2 px-4 divide-y">
            <BeforeSearchItem title="ماشین لباسشویی" />
            <BeforeSearchItem title="ماشین لباسشویی" />
            <BeforeSearchItem title="ماشین لباسشویی" />
            <BeforeSearchItem title="ماشین لباسشویی" />
          </ul>
        </div>
      </aside>
      <span className="absolute max-h-0 duration-200 peer-focus:max-h-screen top-full mt-2 z-30 -right-[1000px] bg-zinc-500/50 w-[calc(100vw*2)] h-screen"></span>
    </form>
  );
};

export default SearchBoxPc;
