import { memo, useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import foods from "../../data/foods";
import SliderItem from "../../components/SliderProduct/SliderItem";

const Interests = () => {
  const [sort, setSort] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [interestsSort, setInterestsSort] = useState([]);
  const interests = useSelector((state) => state.interests);

  const optionsSort = [
    { title: "همه", value: "All" },
    { title: "غذای اصلی", value: "MainCourse" },
    { title: "پیش غذا", value: "Appetizer" },
    { title: "دسر", value: "Dessert" },
    { title: "نوشیدنی", value: "Drink" },
  ];

  useEffect(() => {
    handleSortInterests();
    handleSearchInterests();
  }, [sort, searchValue, interests]);

  function handleSortInterests() {
    if (sort === "All") {
      const foodMatch = interests.map((interest) => {
        return foods.find((food) => food.id === interest);
      });
      setInterestsSort(foodMatch);
    } else {
      const foodMatch = interests.map((interest) => {
        return foods.find((food) => food.id === interest);
      });
      const filterInterests = foodMatch.filter((item) => item.type === sort);
      setInterestsSort(filterInterests);
    }
  }
  function handleSearchInterests() {
    if (searchValue === "") {
      handleSortInterests();
    } else {
      const filterInterests = interestsSort.filter((food) =>
        food.name.includes(searchValue)
      );
      setInterestsSort(filterInterests);
    }
  }

  return (
    <article className="shadow flex-1 p-4 rounded-lg border border-[#cbcbcb]">
      <div className="w-full py-2 border-b border-[#cbcbcb]">
        <h2 className="leading-9 text-xl font-semibold">علاقه مندی ها</h2>
      </div>
      {/* لیست سفارشات */}
      <div className="select-none">
        {/* جوستوجو و مرتب سازی */}
        <div className="w-full flex gap-4 flex-col lg:flex-row leading-6 md:leading-7 text-sm md:text-base px-4 my-4 rounded-full items-center">
          <div className="min-w-[300px] rounded-xl flex items-center flex-1 overflow-x-scroll scrollbar-none">
            {optionsSort.map((item, i) => {
              return (
                <button
                  key={i}
                  onClick={(e) => setSort(item.value)}
                  className={`${
                    sort === item.value
                      ? "bg-green-200 text-primary"
                      : "bg-gray-200 text-gray-500"
                  } py-1 px-4 rounded-full whitespace-nowrap flex items-center gap-4`}
                >
                  {item.title}
                  {sort === item.value && <FiCheck />}
                </button>
              );
            })}
          </div>
          <div className="flex items-center px-4 border-[#cbcbcb] w-full h-full border rounded-lg max-w-[350px] min-w-[150px]">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              className="w-full py-2 md:py-1 h-full outline-none"
              type="text"
              placeholder="جستوجو"
            />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 22.25C5.85 22.25 1.25 17.65 1.25 12C1.25 6.35 5.85 1.75 11.5 1.75C17.15 1.75 21.75 6.35 21.75 12C21.75 17.65 17.15 22.25 11.5 22.25ZM11.5 3.25C6.67 3.25 2.75 7.18 2.75 12C2.75 16.82 6.67 20.75 11.5 20.75C16.33 20.75 20.25 16.82 20.25 12C20.25 7.18 16.33 3.25 11.5 3.25Z"
                fill="#353535"
              />
              <path
                d="M22.0014 23.2499C21.8114 23.2499 21.6214 23.1799 21.4714 23.0299L19.4714 21.0299C19.1814 20.7399 19.1814 20.2599 19.4714 19.9699C19.7614 19.6799 20.2414 19.6799 20.5314 19.9699L22.5314 21.9699C22.8214 22.2599 22.8214 22.7399 22.5314 23.0299C22.3814 23.1799 22.1914 23.2499 22.0014 23.2499Z"
                fill="#353535"
              />
            </svg>
          </div>
        </div>
        {/* نمایش علاقه مندی وجود ندارد */}
        {interests.length <= 0 && (
          <div className="select-none bg-[url('/images/EmptyPage.png')] bg-no-repeat bg-center bg-contain h-80 mt-8 flex flex-col py-8 items-center justify-center gap-4 md:gap-8">
            <p className="text-center text-gray-500 text-sm leading-6 md:leading-7 md:text-base">
              شما در حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!
            </p>
            <Link
              to="/akbatan"
              className="w-full border text-center rounded border-primary text-primary hover:bg-green-100 duration-200 text-sm md:text-base max-w-[152px] md:max-w-[288px] py-2 leading-6 md:leading-7"
            >
              منوی رستوران
            </Link>
          </div>
        )}
        {/* لیست علاقه مندی ها */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {interestsSort.map((item) => (
            <SliderItem key={item.id} data={item} />
          ))}
          {interests.length > 0 && interestsSort <= 0 && (
            <div className="flex flex-col gap-4 items-center col-span-full py-8">
              <p className="text-sm text-gray-500 md:text-base">
                موردی با این مشخصات پیدا نکردیم!
              </p>
              <img
                className="max-w-[152px] md:max-w-[390px]"
                src="/images/Matchnotfound.png"
                alt="محصولی-با-این-مشخصات-وجود-ندارد"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default memo(Interests);
