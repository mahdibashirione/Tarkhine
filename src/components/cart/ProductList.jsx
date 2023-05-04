import separate from "../../utils/separate";
import { FiChevronLeft } from "react-icons/fi";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import ProductItemMini from "./ProductItemMini";

const ProductList = ({ activeStep, toastSuccess }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="w-full lg:w-2/3 p-4 border max-h-[265px] md:max-h-[555px] rounded-lg scrollbar-none overflow-y-scroll">
      <ul className="flex md:hidden flex-col md:gap-4 divide-y-2">
        {cart.length > 0 &&
          cart.map((food) => {
            return (
              <ProductItemMini
                toastSuccess={toastSuccess}
                step={activeStep}
                key={food.id}
                food={food}
              />
            );
          })}
      </ul>
      <ul className="hidden md:flex flex-col md:gap-4 divide-y-2">
        {cart.length > 0 &&
          cart.map((food) => {
            return (
              <ProductItem
                toastSuccess={toastSuccess}
                key={food.id}
                food={food}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ProductList;
