import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [options, setOptions] = useState([
    { id: 1, title: "غذا اصلی", image: "/images/menu/1.svg", url: "/" },
    { id: 2, title: "پیش غذا", image: "/images/menu/2.svg", url: "/" },
    { id: 3, title: "دسر", image: "/images/menu/3.svg", url: "/" },
    { id: 4, title: "نوشیدنی", image: "/images/menu/4.svg", url: "/" },
  ]);

  return (
    <section className="mb-8 container p-4 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-28 lg:gap-y-0">
      <h2 className="font-bold md:text-2xl select-none col-span-full mt-4 text-center lg:mb-[100px]">
        منو رستوران
      </h2>
      {options.map((item) => {
        return (
          <div key={item.id} className="col-span-1 flex justify-center">
            <div className="w-full flex flex-col items-center max-w-[288px] border-2 border-primary p-4 rounded-xl">
              <div className="w-full -mt-24">
                <img className="w-full" src={item.image} alt={item.title} />
              </div>
              <Link
                to={item.url}
                className="leading-7 duration-200 active:scale-95 -mb-10 mt-3.5 lg:mt-9 lg:text-xl shadow rounded-lg px-8 whitespace-nowrap py-2 bg-primary text-white"
              >
                {item.title}
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Menu;
