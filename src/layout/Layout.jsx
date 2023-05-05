import Footer from "../components/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-[88px] lg:mt-[128px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
