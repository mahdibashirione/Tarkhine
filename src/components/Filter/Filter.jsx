import { FiFilter } from "react-icons/fi";

const Filter = () => {
  return (
    <>
      <button className="active:scale-95 relative duration-200 w-1/2 p-3 shadow rounded-lg bg-white border flex items-center gap-2">
        <FiFilter className="text-2xl min-w-fit text-gray-500" />
        <p className="line-clamp-1">فیلتر:</p>
        <span className="w-2.5 h-2.5 absolute -top-0.5 -left-0.5 rounded-full bg-orange-500 block"></span>
      </button>
    </>
  );
};

export default Filter;
