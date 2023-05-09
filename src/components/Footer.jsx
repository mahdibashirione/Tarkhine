import { Link, useLocation } from "react-router-dom";
import InputOutline from "./common/inpurt";
import branches from "../data/branches";
const Footer = () => {
  const options = {
    easyAccess: [
      { id: 1, title: "سوالات متداول", url: "/easyaccess/questions" },
      { id: 2, title: "قوانین ترخینه", url: "/easyaccess/rules-of-tarkhine" },
      { id: 3, title: "حریم خصوصی", url: "/easyaccess/privacy" },
    ],
    branches,
  };

  const { pathname } = useLocation();

  return (
    <footer className="mx-auto w-full max-w-[1440px] text-white p-4 md:py-8 bg-cover bg-[url('/images/Footer.png')]">
      <section className="container md:p-4 flex justify-between gap-2">
        <article className="min-w-fit flex gap-2 lg:gap-4 w-full md:w-auto justify-evenly">
          <div className="min-w-fit">
            <h3 className="text-xl font-bold">دسترسی آسان</h3>
            <ul className="pr-2 text-gray-400 text-sm lg:text-base leading-[18px] flex flex-col gap-2 mt-4">
              {options.easyAccess.map((item) => {
                return (
                  <li key={item.id} className="duration-200 hover:scale-95">
                    <Link
                      className={`${pathname == item.url && "text-primary"}`}
                      to={item.url}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex gap-2"></div>
          </div>
          <div className="min-w-fit">
            <h3 className="text-xl font-bold">شعبه‌های ترخینه</h3>
            <ul className="pr-2 text-gray-400 text-sm lg:text-base leading-[18px] flex flex-col gap-2 mt-4">
              {options.branches.map((item) => {
                return (
                  <li key={item.id} className="duration-200 hover:scale-95">
                    <Link
                      className={`${pathname == item.url && "text-primary"}`}
                      to={item.url}
                    >
                      شعبه {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
        <article className="hidden md:block max-w-[425px]">
          <h3 className="text-xl font-bold">پیام به ترخینه </h3>
          <form className="flex mt-4 flex-wrap gap-2 justify-between">
            <div className="flex flex-col gap-2">
              <InputOutline placeholder="نام و نام خوانوادگی" />
              <InputOutline placeholder="شماره تماس" />
              <InputOutline placeholder="ایمیل (اختیاری)" />
            </div>
            <textarea
              placeholder="پیام شما"
              className="border rounded-lg bg-transparent text-sm border-gray-300
              text-gray-300 outline-none p-2 focus:border-primary"
            ></textarea>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="text-gray-200 py-2 px-14 border rounded-lg border-gray-300"
              >
                ارسال پیام
              </button>
            </div>
          </form>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
