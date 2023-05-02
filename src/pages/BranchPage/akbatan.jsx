import { useEffect } from "react";
import Slider from "../../components/Slider";
import SliderProduct from "../../components/SliderProduct/SliderProducts";

const Akbatan = () => {
  useEffect(() => {
    document.title = "رستوران ترخینه-اکباتان";
  }, []);

  return (
    <>
      <h2>
        <Slider />
        <SliderProduct title="پیشنهاد ویژه" />
        <div className="w-full bg-primary text-white">
          <SliderProduct title="غذاهای محبوب" />
        </div>
        <SliderProduct title="غذاهای غیر ایرانی" />
      </h2>
    </>
  );
};

export default Akbatan;
