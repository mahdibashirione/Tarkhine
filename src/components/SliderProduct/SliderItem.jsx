import separate from "../../utils/separate";
import discount from "../../utils/discount";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../features/cart/cartSlice";

const SliderItem = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const isInCart = cart.findIndex((item) => item.id === data.id);

  return (
    <li className="bg-white flex-nowrap justify-between select-none min-w-fit rounded-xl border border-[#cbcbcb] overflow-hidden items-center flex flex-col">
      {/* image */}
      <div className="w-full relative max-w-[264px] h-[170px] md:h-[200px] lg:h-[220px]">
        <img
          className="w-full h-full object-cover"
          src={data.image}
          alt={data.name}
        />
        <span className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white"></span>
      </div>
      {/* title */}
      <h3 className="text-sm md:text-base text-slate-800 font-semibold lg:text-lg mt-2 md:mt-0 line-clamp-1">
        {data.name}
      </h3>
      {/* detail */}
      <div className="my-2 text-slate-800 flex gap-4 p-2 whitespace-nowrap items-center select-none">
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-1 text-[12px] text-gray-500">
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00016 14.4333C7.7935 14.4333 7.5935 14.4066 7.42683 14.3467C4.88016 13.4733 0.833496 10.3733 0.833496 5.79332C0.833496 3.45998 2.72016 1.56665 5.04016 1.56665C6.16683 1.56665 7.22016 2.00665 8.00016 2.79332C8.78016 2.00665 9.8335 1.56665 10.9602 1.56665C13.2802 1.56665 15.1668 3.46665 15.1668 5.79332C15.1668 10.38 11.1202 13.4733 8.5735 14.3467C8.40683 14.4066 8.20683 14.4333 8.00016 14.4333ZM5.04016 2.56665C3.2735 2.56665 1.8335 4.01332 1.8335 5.79332C1.8335 10.3466 6.2135 12.88 7.7535 13.4066C7.8735 13.4466 8.1335 13.4466 8.2535 13.4066C9.78683 12.88 14.1735 10.3533 14.1735 5.79332C14.1735 4.01332 12.7335 2.56665 10.9668 2.56665C9.9535 2.56665 9.0135 3.03998 8.40683 3.85998C8.22016 4.11332 7.7935 4.11332 7.60683 3.85998C6.98683 3.03332 6.0535 2.56665 5.04016 2.56665Z"
                fill="#ADADAD"
              />
            </svg>
            افزودن به علاقه مندی ها
          </button>
          <div className="flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.404509L9.67723 5.56649L9.70529 5.65286H9.79611H15.2237L10.8327 8.84315L10.7592 8.89653L10.7873 8.9829L12.4645 14.1449L8.07347 10.9546L8 10.9012L7.92653 10.9546L3.53548 14.1449L5.21271 8.9829L5.24078 8.89653L5.1673 8.84315L0.776258 5.65286H6.20389H6.29471L6.32277 5.56649L8 0.404509Z"
                fill="#F4B740"
                stroke="#CBCBCB"
                strokeWidth="0.25"
              />
            </svg>
            <span className="mx-1">3</span>
            <p className="text-[12px] text-gray-500">(93 امتیاز)</p>
          </div>
        </div>
        {/* price */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1">
            {data.discount > 0 && (
              <>
                <p className="line-through text-[12px] text-gray-500">
                  {separate(data.price)}
                </p>
                <span className="text-sm py-0.5 mr-1 px-1.5 rounded-full bg-red-200 text-red-500">
                  {data.discount}%
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-1">
            <p>
              {data.discount > 0
                ? separate(discount(data.discount, data.price))
                : separate(data.price)}
            </p>
            <span className="text-sm">تومان</span>
          </div>
        </div>
      </div>
      <div className="w-full p-2">
        <button
          disabled={isInCart >= 0 ? true : false}
          onClick={(e) => dispatch(addCart(data))}
          className={`${
            isInCart >= 0 && "opacity-70"
          } rounded text-white py-2 w-full bg-primary`}
        >
          {isInCart >= 0 ? "در سبد خرید موجود است" : "افزودن به سبد خرید"}
        </button>
      </div>
    </li>
  );
};

export default SliderItem;
