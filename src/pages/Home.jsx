import Menu from "../components/Menu";
import SearchBox from "../components/SearchBox";
import Slider from "../components/Slider";
import Introduction from "../components/Introduction";
import BranchesList from "../components/BranchesList";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "رستوران انلاین ترخینه";
  }, []);

  return (
    <>
      <Slider />
      <section className="lg:hidden mt-8">
        <SearchBox />
      </section>
      <Menu />
      <Introduction />
      <BranchesList />
    </>
  );
};

export default Home;
