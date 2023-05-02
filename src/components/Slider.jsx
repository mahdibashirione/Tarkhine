import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Slider = () => {
  const [isVisible, setIsVisible] = useState(2);

  const options = [
    {
      id: 1,
      url: "/",
      image: "/images/slider/Slider.png",
      title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
    },
    {
      id: 2,
      url: "/akbatan",
      image: "/images/slider/Slider2.jpg",
      title: "سرسبزی اکباتان دلیل حس خوب شماست!",
    },
    {
      id: 3,
      url: "/",
      image: "/images/slider/Slider.png",
      title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
    },
    {
      id: 4,
      url: "/akbatan",
      image: "/images/slider/Slider2.jpg",
      title: "سرسبزی اکباتان دلیل حس خوب شماست!",
    },
    {
      id: 5,
      url: "/",
      image: "/images/slider/Slider.png",
      title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
    },
    {
      id: 6,
      url: "/akbatan",
      image: "/images/slider/Slider2.jpg",
      title: "سرسبزی اکباتان دلیل حس خوب شماست!",
    },
  ];

  const handleClick = (action) => {
    switch (action) {
      case "next": {
        isVisible === options.length
          ? setIsVisible(1)
          : setIsVisible(isVisible + 1);
        break;
      }
      case "back": {
        isVisible === 1
          ? setIsVisible(options.length)
          : setIsVisible(isVisible - 1);
        break;
      }
    }
  };

  return (
    <section className="w-full">
      <article className="w-full max-w-[1440px]">
        <div className="w-full relative group">
          {options.map((img) => {
            return (
              <div
                key={img.id}
                className={`${
                  isVisible !== img.id ? "hidden" : ""
                } bg-gray-200 block w-full xl:h-[400px] lg:h-[300px] h-[260px] overflow-hidden`}
              >
                <motion.img
                  initial={{ display: "none", opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  animate={
                    isVisible === img.id
                      ? { display: "block", opacity: 1 }
                      : { display: "none", opacity: 0 }
                  }
                  className="w-full h-full object-cover"
                  src={img.image}
                  alt={img.id}
                />
                <motion.button
                  initial={{ display: "none", opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  animate={
                    isVisible === img.id ? { display: "block", opacity: 1 } : ""
                  }
                >
                  <Link
                    to={img.url}
                    className="leading-7 shadow right-1/2 rounded-lg translate-x-1/2 px-8 py-2 bg-primary absolute bottom-11 lg:bottom-16 text-sm md:text-base text-white"
                  >
                    سفارش آنلاین غذا
                  </Link>
                </motion.button>
                <motion.p
                  initial={{ display: "none", opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  animate={
                    isVisible === img.id ? { display: "block", opacity: 1 } : ""
                  }
                  className="leading-7 whitespace-nowrap md:text-2xl lg:text-3xl xl:text-4xl select-none right-1/2 translate-x-1/2 font-semibold absolute bottom-1/2 translate-y-1/2 text-white"
                >
                  تجربه غذای سالم و گیاهی به سبک ترخینه
                </motion.p>
              </div>
            );
          })}

          <button
            onClick={() => handleClick("back")}
            className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center justify-center text-white"
          >
            <FiChevronRight className="text-4xl lg:text-6xl" />
          </button>
          <button
            onClick={() => handleClick("next")}
            className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center text-white"
          >
            <FiChevronLeft className="text-4xl lg:text-6xl" />
          </button>

          <div
            className={`px-11 flex gap-2 items-center h-[33px] h justify-center absolute bottom-0 right-1/2 translate-x-1/2`}
          >
            <img className="z-10 object-cover absolute" src="/Rectangle.png" />
            {options.map((img, i) => {
              return (
                <span
                  key={i}
                  className={`${
                    isVisible === img.id
                      ? "w-2 h-2 lg:w-3 lg:h-3 ring-2 ring-green-200 bg-primary"
                      : "w-1 h-1 lg:w-2 lg:h-2 bg-gray-400"
                  } duration-300 rounded-full z-20`}
                ></span>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Slider;
