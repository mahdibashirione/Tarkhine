import Footer from "../components/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-[72px] lg:mt-[115px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
