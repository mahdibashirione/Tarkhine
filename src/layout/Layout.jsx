import { memo, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [showElement, setShowElement] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    handleShowElement(pathname);
  }, [pathname]);

  function handleShowElement(pathname) {
    const pages = ["/signin", "/signup"];
    const isPage = pages.findIndex((page) => page === pathname);
    isPage >= 0 ? setShowElement(false) : setShowElement(true);
  }

  return (
    <>
      {showElement && <Header />}
      <main className={`${showElement && "mt-[88px] lg:mt-[128px]"}`}>
        {children}
      </main>
      {showElement && <Footer />}
    </>
  );
};

export default memo(Layout);
