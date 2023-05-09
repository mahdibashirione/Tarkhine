import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Privacy from "../components/EasyAccessQuestions/Privacy";
import Questions from "../components/EasyAccessQuestions/Questions";
import Rules from "../components/EasyAccessQuestions/Rules";
import SideBar from "../components/EasyAccessQuestions/SideBar";

const EasyAccess = () => {
  const { pathname } = useLocation();
  const [bannerPage, setBannerPage] = useState({
    id: 1,
    title: "سوالات متداول از ترخینه",
    image: "/images/banner/1.png",
  });

  const banners = [
    { id: 1, title: "سوالات متداول از ترخینه", image: "/images/banner/1.png" },
    { id: 2, title: "قوانین ترخینه", image: "/images/banner/2.png" },
    { id: 3, title: "حریم شخصی کاربران", image: "/images/banner/3.png" },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0 });
    switch (pathname) {
      case "/easyaccess/questions": {
        setBannerPage(banners[0]);
        break;
      }
      case "/easyaccess/rules-of-tarkhine": {
        setBannerPage(banners[1]);
        break;
      }
      case "/easyaccess/privacy": {
        setBannerPage(banners[2]);
        break;
      }
      default: {
        setBannerPage(banners[0]);
        break;
      }
    }
  }, [pathname]);

  return (
    <section className="">
      {/* Banner Page */}
      <article className="w-full md:h-[300px] lg:h-[340px] h-[174px] relative max-w-[1440px] mx-auto">
        <img
          className="w-full h-full object-cover"
          src={bannerPage.image}
          alt={bannerPage.title}
        />
        <p className="font-bold text-white text-xl lg:text-[40px]  absolute top-1/2 right-1/2 translate-x-1/2 select-none -translate-y-1/2">
          {bannerPage.title}
        </p>
      </article>
      <SideBar />
      <Routes>
        <Route path="/questions" element={<Questions />} />
        <Route path="/rules-of-tarkhine" element={<Rules />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </section>
  );
};

export default EasyAccess;
