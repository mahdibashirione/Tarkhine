import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  dicrement,
  increment,
  removeItem,
} from "../../features/cart/cartSlice";
import discount from "../../utils/discount";
import separate from "../../utils/separate";
import PopUp from "../common/PopUp";
import QuantityController from "../common/QuantityController";

const ProductItemMini = ({ food, step, toastSuccess }) => {
  const dispatch = useDispatch();
  const [popUpDelete, setPopUpDelete] = useState(false);

  function handleDelete() {
    setPopUpDelete(false);
    dispatch(removeItem(food.id));
    toastSuccess("محصول حذف شد");
  }

  return (
    <li className="w-full odd:bg-gray-100 even:bg-gray-200 p-2 flex items-center justify-between">
      <div className="text-sm">
        <span className="font-bold">{food.name}</span>
        <div className="text-gray-500 flex items-center gap-4 mt-1">
          <p>
            {food.discount > 0
              ? separate(discount(food.discount, food.price))
              : food.price}
            تومان
          </p>
        </div>
      </div>
      {food.discount > 0 && (
        <div className="flex text-sm justify-center items-center flex-wrap">
          <p className="line-through text-gray-500">{food.price}</p>
          <span className="py-0.5 mr-1 px-1.5 rounded-full bg-red-100 text-red-500">
            %{food.discount}
          </span>
        </div>
      )}
      {step <= 0 && (
        <QuantityController className="bg-green-100 gap-3" id={food.id} />
      )}
      {step > 0 && (
        <p className="text-sm">
          تعداد
          <span className="text-gray-500 mr-1">{food.quantity}</span>
        </p>
      )}
      <PopUp
        isShow={popUpDelete}
        handleClose={(e) => setPopUpDelete(false)}
        title="حذف محصول"
      >
        <div className="w-full flex flex-col items-center py-8 gap-8">
          <h3 className="text-gray-500">آیا محصول از سبد خرید حذف شود ؟</h3>
          <div className="w-full flex gap-2 text-sm md:text-base max-w-[300px] ">
            <button
              onClick={(e) => setPopUpDelete(false)}
              className="w-full py-2 border-2 border-primary text-primary rounded-lg"
            >
              بازگشت
            </button>
            <button
              onClick={handleDelete}
              className="w-full py-2 bg-primary text-white rounded-lg"
            >
              حذف
            </button>
          </div>
        </div>
      </PopUp>
    </li>
  );
};

export default ProductItemMini;
