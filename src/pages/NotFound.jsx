import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = "صفحه ای یافت نشد";
  }, []);

  return (
    <section className="select-none w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-8xl">404</h2>
      <span className="text-xl">صفحه مورد نظر یافت نشد</span>
      <Link
        className="hover:bg-primary hover:text-white duration-200 font-bold text-primary border border-primary py-3 px-4 rounded-lg flex items-center gap-2 mt-8"
        to="/"
      >
        صفحه اصلی
        <FiChevronLeft className="text-2xl" />
      </Link>
    </section>
  );
};

export default NotFound;
