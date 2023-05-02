import separate from "../../utils/separate";
import { FiChevronLeft } from "react-icons/fi";
import ProductItem from "./ProductItem";

const ProductList = ({ activeStep, handleNext }) => {
  return (
    <div className="w-full lg:w-2/3 p-6 border max-h-[265px] md:max-h-[555px] rounded-lg scrollbar-none overflow-y-scroll">
      <ul className="flex flex-col md:gap-4 divide-y-2">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ul>
    </div>
  );
};

export default ProductList;
