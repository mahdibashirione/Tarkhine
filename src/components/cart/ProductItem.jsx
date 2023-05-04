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

const ProductItem = ({ food }) => {
  const dispatch = useDispatch();
  const [popUpDelete, setPopUpDelete] = useState(false);

  function handleDelete() {
    setPopUpDelete(false);
    dispatch(removeItem(food.id));
    toastSuccess("محصول حذف شد");
  }

  return (
    <li className="w-full odd:bg-gray-100 even:bg-gray-200 md:odd:bg-white md:even:bg-white flex-wrap md:flex-nowrap flex-row-reverse md:flex-row p-3 md:p-0 md:rounded-xl overflow-hidden md:border flex justify-between items-center ">
      {/* عکس محصول */}
      <div className="hidden md:block w-[169px] h-[185px] min-w-fit ml-4 lg:ml-8">
        <img
          className="w-full h-full object-cover"
          src={food.image}
          alt={food.name}
        />
      </div>
      {/* تعداد محصول در موبایل */}
      <div className="md:hidden flex p-2 text-primary rounded-lg bg-[#E5F2E9] items-center gap-2">
        <button>
          <FiPlus className="text-lg" />
        </button>
        <span>1</span>
        <button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group"
          >
            <path
              d="M20.9999 7.22998C20.9799 7.22998 20.9499 7.22998 20.9199 7.22998C15.6299 6.69998 10.3499 6.49998 5.11992 7.02998L3.07992 7.22998C2.65992 7.26998 2.28992 6.96998 2.24992 6.54998C2.20992 6.12998 2.50992 5.76998 2.91992 5.72998L4.95992 5.52998C10.2799 4.98998 15.6699 5.19998 21.0699 5.72998C21.4799 5.76998 21.7799 6.13998 21.7399 6.54998C21.7099 6.93998 21.3799 7.22998 20.9999 7.22998Z"
              fill="#417F56"
            />
            <path
              d="M8.50001 6.22C8.46001 6.22 8.42001 6.22 8.37001 6.21C7.97001 6.14 7.69001 5.75 7.76001 5.35L7.98001 4.04C8.14001 3.08 8.36001 1.75 10.69 1.75H13.31C15.65 1.75 15.87 3.13 16.02 4.05L16.24 5.35C16.31 5.76 16.03 6.15 15.63 6.21C15.22 6.28 14.83 6 14.77 5.6L14.55 4.3C14.41 3.43 14.38 3.26 13.32 3.26H10.7C9.64001 3.26 9.62001 3.4 9.47001 4.29L9.24001 5.59C9.18001 5.96 8.86001 6.22 8.50001 6.22Z"
              fill="#417F56"
            />
            <path
              d="M15.2099 23.2501H8.7899C5.2999 23.2501 5.1599 21.3201 5.0499 19.7601L4.3999 9.69007C4.3699 9.28007 4.6899 8.92008 5.0999 8.89008C5.5199 8.87008 5.8699 9.18008 5.8999 9.59008L6.5499 19.6601C6.6599 21.1801 6.6999 21.7501 8.7899 21.7501H15.2099C17.3099 21.7501 17.3499 21.1801 17.4499 19.6601L18.0999 9.59008C18.1299 9.18008 18.4899 8.87008 18.8999 8.89008C19.3099 8.92008 19.6299 9.27007 19.5999 9.69007L18.9499 19.7601C18.8399 21.3201 18.6999 23.2501 15.2099 23.2501Z"
              fill="#417F56"
            />
            <path
              d="M13.6601 17.75H10.3301C9.92008 17.75 9.58008 17.41 9.58008 17C9.58008 16.59 9.92008 16.25 10.3301 16.25H13.6601C14.0701 16.25 14.4101 16.59 14.4101 17C14.4101 17.41 14.0701 17.75 13.6601 17.75Z"
              fill="#417F56"
            />
            <path
              d="M14.5 13.75H9.5C9.09 13.75 8.75 13.41 8.75 13C8.75 12.59 9.09 12.25 9.5 12.25H14.5C14.91 12.25 15.25 12.59 15.25 13C15.25 13.41 14.91 13.75 14.5 13.75Z"
              fill="#417F56"
            />
          </svg>
        </button>
      </div>
      <div className="md:w-full md:pl-4 lg:pl-8">
        {/* نام محصول */}
        <div className="w-full flex items-center justify-between">
          <h3 className="font-bold text-[12px] md:text-base lg:text-xl">
            {food.name}
          </h3>
          <button
            onClick={(e) => setPopUpDelete(true)}
            className="hidden md:block w-6 h-6"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group"
            >
              <path
                d="M20.9999 7.22998C20.9799 7.22998 20.9499 7.22998 20.9199 7.22998C15.6299 6.69998 10.3499 6.49998 5.11992 7.02998L3.07992 7.22998C2.65992 7.26998 2.28992 6.96998 2.24992 6.54998C2.20992 6.12998 2.50992 5.76998 2.91992 5.72998L4.95992 5.52998C10.2799 4.98998 15.6699 5.19998 21.0699 5.72998C21.4799 5.76998 21.7799 6.13998 21.7399 6.54998C21.7099 6.93998 21.3799 7.22998 20.9999 7.22998Z"
                fill="#ef4444"
              />
              <path
                d="M8.50001 6.22C8.46001 6.22 8.42001 6.22 8.37001 6.21C7.97001 6.14 7.69001 5.75 7.76001 5.35L7.98001 4.04C8.14001 3.08 8.36001 1.75 10.69 1.75H13.31C15.65 1.75 15.87 3.13 16.02 4.05L16.24 5.35C16.31 5.76 16.03 6.15 15.63 6.21C15.22 6.28 14.83 6 14.77 5.6L14.55 4.3C14.41 3.43 14.38 3.26 13.32 3.26H10.7C9.64001 3.26 9.62001 3.4 9.47001 4.29L9.24001 5.59C9.18001 5.96 8.86001 6.22 8.50001 6.22Z"
                fill="#ef4444"
              />
              <path
                d="M15.2099 23.2501H8.7899C5.2999 23.2501 5.1599 21.3201 5.0499 19.7601L4.3999 9.69007C4.3699 9.28007 4.6899 8.92008 5.0999 8.89008C5.5199 8.87008 5.8699 9.18008 5.8999 9.59008L6.5499 19.6601C6.6599 21.1801 6.6999 21.7501 8.7899 21.7501H15.2099C17.3099 21.7501 17.3499 21.1801 17.4499 19.6601L18.0999 9.59008C18.1299 9.18008 18.4899 8.87008 18.8999 8.89008C19.3099 8.92008 19.6299 9.27007 19.5999 9.69007L18.9499 19.7601C18.8399 21.3201 18.6999 23.2501 15.2099 23.2501Z"
                fill="#ef4444"
              />
              <path
                d="M13.6601 17.75H10.3301C9.92008 17.75 9.58008 17.41 9.58008 17C9.58008 16.59 9.92008 16.25 10.3301 16.25H13.6601C14.0701 16.25 14.4101 16.59 14.4101 17C14.4101 17.41 14.0701 17.75 13.6601 17.75Z"
                fill="#ef4444"
              />
              <path
                d="M14.5 13.75H9.5C9.09 13.75 8.75 13.41 8.75 13C8.75 12.59 9.09 12.25 9.5 12.25H14.5C14.91 12.25 15.25 12.59 15.25 13C15.25 13.41 14.91 13.75 14.5 13.75Z"
                fill="#ef4444"
              />
            </svg>
          </button>
        </div>
        {/* جزیات */}
        <div className="hidden md:flex w-full items-center my-5 justify-between">
          <p className="text-[12px] md:text-sm">{food.structure}</p>
          {food.discount > 0 && (
            <div className="flex items-center gap-1 text-sm">
              <p className="line-through text-gray-500">{food.price}</p>
              <span className="py-0.5 mr-1 px-1.5 rounded-full bg-red-100 text-red-500">
                %{food.discount}
              </span>
            </div>
          )}
        </div>
        {/* تعداد و قیمت محصول */}
        <div className="w-full flex items-center justify-between">
          <div className="flex p-2 text-primary rounded-lg bg-[#E5F2E9] items-center gap-2">
            <button onClick={(e) => dispatch(increment(food.id))}>
              <FiPlus className="text-lg" />
            </button>
            <span>{food.quantity}</span>
            <button onClick={(e) => dispatch(dicrement(food.id))}>
              <FiMinus />
            </button>
          </div>
          <div className="flex items-center gap-1 text-[12px] md:text-base lg:text-xl md:font-bold text-gray-500 md:text-slate-800">
            <p>{separate(discount(food.discount, food.price))}</p>
            <span>تومان</span>
          </div>
        </div>
      </div>
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

export default ProductItem;
