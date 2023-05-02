import { useEffect, useRef, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import foods from "../../data/foods";
import SliderItem from "./SliderItem";

const SliderProduct = ({ title }) => {
  const slider = useRef();

  function handleScroll(position) {
    switch (position) {
      case "Left": {
        slider.current.scrollLeft -= 280;
        break;
      }
      case "Right": {
        slider.current.scrollLeft += 280;
        break;
      }
    }
  }

  return (
    <section className="container pt-6 pb-10 md:px-4">
      <h2
        className={`select-none font-semibold mb-6 text-lg md:text-xl lg:text-2xl pr-4 md:pr-0`}
      >
        {title}
      </h2>
      <div className="relative md:px-4 ">
        <ul
          className="pl-8 pr-4 md:p-0 flex flex-nowrap md:rounded-xl relative w-full scroll-smooth overflow-x-scroll scrollbar-none  gap-3"
          ref={slider}
        >
          {foods.map((food) => {
            return <SliderItem key={food.id} data={food} />;
          })}
        </ul>
        {/* scroll To Right */}
        <button
          onClick={(e) => handleScroll("Right")}
          className="p-1.5 absolute top-1/2 right-0 shadow rounded-lg rotate-180 bg-white border border-[#cbcbcb]"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 27.56C19.7467 27.56 19.4934 27.4667 19.2934 27.2667L10.6 18.5734C9.18671 17.16 9.18671 14.84 10.6 13.4267L19.2934 4.73336C19.68 4.34669 20.32 4.34669 20.7067 4.73336C21.0934 5.12003 21.0934 5.76003 20.7067 6.14669L12.0134 14.84C11.3734 15.48 11.3734 16.52 12.0134 17.16L20.7067 25.8534C21.0934 26.24 21.0934 26.88 20.7067 27.2667C20.5067 27.4534 20.2534 27.56 20 27.56Z"
              fill="#757575"
            />
          </svg>
        </button>
        {/* scroll To Left */}
        <button
          onClick={(e) => handleScroll("Left")}
          className="p-1.5 absolute top-1/2 left-0 shadow rounded-lg bg-white border border-[#cbcbcb]"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 27.56C19.7467 27.56 19.4934 27.4667 19.2934 27.2667L10.6 18.5734C9.18671 17.16 9.18671 14.84 10.6 13.4267L19.2934 4.73336C19.68 4.34669 20.32 4.34669 20.7067 4.73336C21.0934 5.12003 21.0934 5.76003 20.7067 6.14669L12.0134 14.84C11.3734 15.48 11.3734 16.52 12.0134 17.16L20.7067 25.8534C21.0934 26.24 21.0934 26.88 20.7067 27.2667C20.5067 27.4534 20.2534 27.56 20 27.56Z"
              fill="#757575"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SliderProduct;
