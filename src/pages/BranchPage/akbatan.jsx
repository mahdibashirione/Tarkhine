import { useEffect } from "react";
import Slider from "../../components/Slider";
import SliderProduct from "../../components/SliderProduct/SliderProducts";
import SearchBox from "../../components/SearchBox";

const Akbatan = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = "رستوران ترخینه-اکباتان";
  }, []);

  return (
    <>
      <Slider />
      <SearchBox className="mt-8 lg:hidden" />
      <SliderProduct title="پیشنهاد ویژه" />
      <div className="w-full bg-primary text-white">
        <SliderProduct title="غذاهای محبوب" />
      </div>
      <SliderProduct title="غذاهای غیر ایرانی" />
    </>
  );
};

export default Akbatan;
