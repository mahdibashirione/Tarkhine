import Menu from "../components/Menu";
import SearchBox from "../components/SearchBox/SearchBox";
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
      <SearchBox />
      <Menu />
      <Introduction />
      <BranchesList />
    </>
  );
};

export default Home;
