import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiCheck } from "react-icons/fi";
import Badg from "../../components/common/Badg";
import barnches from "../../data/branches";
import separate from "../../utils/separate";
import discount from "../../utils/discount";
import { cancelOrder } from "../../features/orders/orderSlice";
import ButtonOutline from "../../components/common/Buttons/ButtonOutline";
import GoToRegister from "../../components/GoToRegister";

const TrackOrders = () => {
  const { orders, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [sort, setSort] = useState("All");
  const [ordersSort, setOrdersSort] = useState([]);

  const optionsSort = [
    { title: "همه", value: "All" },
    { title: "جاری", value: "Current" },
    { title: "تحویل شده", value: "Delivered" },
    { title: "لغو شده", value: "Canceled" },
  ];

  useEffect(() => {
    handleSortOrders();
  }, [sort, orders]);

  function handleSortOrders() {
    if (sort === "All") {
      setOrdersSort(orders);
    } else {
      const filterOrders = orders.filter((item) => item.status === sort);
      setOrdersSort(filterOrders);
    }
  }

  if (!auth) return <GoToRegister redirect="/user/track-orders" />;

  return (
    <article className="shadow flex-1 p-4 rounded-lg border border-[#cbcbcb]">
      <div className="w-full py-2 border-b border-[#cbcbcb]">
        <h2 className="leading-9 text-xl font-semibold">سفارشات</h2>
      </div>
      {/* نمایش سفارشی وجود ندارد */}
      {orders.length <= 0 && (
        <div className="select-none bg-[url('/images/EmptyPage.png')] bg-no-repeat bg-center bg-contain h-80 mt-8 flex flex-col py-8 items-center justify-center gap-4 md:gap-8">
          <p className="text-center text-gray-500 text-sm leading-6 md:leading-7 md:text-base">
            شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
          </p>
          <Link
            to="/akbatan"
            className="w-full border text-center rounded border-primary text-primary hover:bg-green-100 duration-200 text-sm md:text-base max-w-[152px] md:max-w-[288px] py-2 leading-6 md:leading-7"
          >
            منوی رستوران
          </Link>
        </div>
      )}
      {/* لیست سفارشات */}
      {orders.length > 0 && (
        <div className="select-none">
          {/* Sort Orders List */}
          <div className="w-full flex gap-4  overflow-x-scroll scrollbar-none leading-6 md:leading-7 text-sm md:text-base px-4 my-4 rounded-full">
            {optionsSort.map((item) => {
              return (
                <button
                  onClick={(e) => setSort(item.value)}
                  className={`${
                    sort === item.value
                      ? "bg-green-200 text-primary"
                      : "bg-gray-200 text-gray-500"
                  } py-1 px-4 rounded-full whitespace-nowrap flex items-center gap-4`}
                >
                  {item.title}
                  {sort === item.value && <FiCheck />}
                </button>
              );
            })}
          </div>
          {ordersSort.length <= 0 && (
            <div className="select-none bg-[url('/images/EmptyPage.png')] bg-no-repeat bg-center bg-contain h-80 mt-8 flex flex-col py-8 items-center justify-center gap-4 md:gap-8">
              <p className="text-center text-gray-500 text-sm leading-6 md:leading-7 md:text-base">
                سفارشی برای پیدا نشد !
              </p>
            </div>
          )}
          <ul className="flex flex-col gap-4">
            {ordersSort.map((order) => {
              return (
                <div
                  key={order.id}
                  className="p-3 md:p-4 lg:p-6 rounded-lg border shadow"
                >
                  {/* نمایش وضعیت محصول */}
                  <div className="w-full flex justify-between items-center">
                    <p className="text-[12px] leading-6 md:leading-7 md:text-base text-gray-500">
                      شعبه {order.branch}
                    </p>
                    <div className="flex gap-2">
                      <span className="text-[12px] rounded px-2 bg-gray-200 leading-6 md:leading-7 md:text-base text-gray-500">
                        {order.deliveryOrder === "پیک"
                          ? "تحویل توسط پیک"
                          : "تحویل حضوری"}
                      </span>
                      <Badg
                        title={
                          (order.status === "Current" && "جاری") ||
                          (order.status === "Canceled" && "لغو شده") ||
                          (order.status === "Delivered" && "تحویل شده")
                        }
                        type={
                          (order.status === "Current" && "warning") ||
                          (order.status === "Canceled" && "error") ||
                          (order.status === "Delivered" && "success")
                        }
                      />
                    </div>
                  </div>
                  {/* نمایش زمان و مبلغ محصول */}
                  <div className="text-[12px] text-gray-500 mt-4 md:mt-2 md:text-sm leading-6 md:leading-7">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <div className="flex gap-1 items-center">
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 2.875C3.795 2.875 3.625 2.705 3.625 2.5V1C3.625 0.795 3.795 0.625 4 0.625C4.205 0.625 4.375 0.795 4.375 1V2.5C4.375 2.705 4.205 2.875 4 2.875Z"
                            fill="#717171"
                          />
                          <path
                            d="M8 2.875C7.795 2.875 7.625 2.705 7.625 2.5V1C7.625 0.795 7.795 0.625 8 0.625C8.205 0.625 8.375 0.795 8.375 1V2.5C8.375 2.705 8.205 2.875 8 2.875Z"
                            fill="#717171"
                          />
                          <path
                            d="M4.25 7.24991C4.185 7.24991 4.12 7.23492 4.06 7.20992C3.995 7.18492 3.945 7.14991 3.895 7.10491C3.805 7.00991 3.75 6.88491 3.75 6.74991C3.75 6.68491 3.765 6.61991 3.79 6.55991C3.815 6.49991 3.85 6.44492 3.895 6.39492C3.945 6.34992 3.995 6.3149 4.06 6.2899C4.24 6.2149 4.465 6.25492 4.605 6.39492C4.695 6.48992 4.75 6.61991 4.75 6.74991C4.75 6.77991 4.745 6.81492 4.74 6.84992C4.735 6.87992 4.725 6.90991 4.71 6.93991C4.7 6.96991 4.685 6.99991 4.665 7.02991C4.65 7.05491 4.625 7.07991 4.605 7.10491C4.51 7.19491 4.38 7.24991 4.25 7.24991Z"
                            fill="#717171"
                          />
                          <path
                            d="M6 7.24994C5.935 7.24994 5.87 7.23494 5.81 7.20994C5.745 7.18494 5.695 7.14993 5.645 7.10493C5.555 7.00993 5.5 6.88494 5.5 6.74994C5.5 6.68494 5.515 6.61993 5.54 6.55993C5.565 6.49993 5.6 6.44494 5.645 6.39494C5.695 6.34994 5.745 6.31493 5.81 6.28993C5.99 6.20993 6.215 6.25494 6.355 6.39494C6.445 6.48994 6.5 6.61994 6.5 6.74994C6.5 6.77994 6.495 6.81494 6.49 6.84994C6.485 6.87994 6.475 6.90994 6.46 6.93994C6.45 6.96994 6.435 6.99994 6.415 7.02994C6.4 7.05494 6.375 7.07993 6.355 7.10493C6.26 7.19493 6.13 7.24994 6 7.24994Z"
                            fill="#717171"
                          />
                          <path
                            d="M7.75 7.24994C7.685 7.24994 7.62 7.23494 7.56 7.20994C7.495 7.18494 7.445 7.14993 7.395 7.10493C7.375 7.07993 7.355 7.05494 7.335 7.02994C7.315 6.99994 7.3 6.96994 7.29 6.93994C7.275 6.90994 7.265 6.87994 7.26 6.84994C7.255 6.81494 7.25 6.77994 7.25 6.74994C7.25 6.61994 7.305 6.48994 7.395 6.39494C7.445 6.34994 7.495 6.31493 7.56 6.28993C7.745 6.20993 7.965 6.25494 8.105 6.39494C8.195 6.48994 8.25 6.61994 8.25 6.74994C8.25 6.77994 8.245 6.81494 8.24 6.84994C8.235 6.87994 8.225 6.90994 8.21 6.93994C8.2 6.96994 8.185 6.99994 8.165 7.02994C8.15 7.05494 8.125 7.07993 8.105 7.10493C8.01 7.19493 7.88 7.24994 7.75 7.24994Z"
                            fill="#717171"
                          />
                          <path
                            d="M4.25 9.00009C4.185 9.00009 4.12 8.9851 4.06 8.9601C4 8.9351 3.945 8.90009 3.895 8.85509C3.805 8.76009 3.75 8.63009 3.75 8.50009C3.75 8.43509 3.765 8.37009 3.79 8.31009C3.815 8.24509 3.85 8.1901 3.895 8.1451C4.08 7.9601 4.42 7.9601 4.605 8.1451C4.695 8.2401 4.75 8.37009 4.75 8.50009C4.75 8.63009 4.695 8.76009 4.605 8.85509C4.51 8.94509 4.38 9.00009 4.25 9.00009Z"
                            fill="#717171"
                          />
                          <path
                            d="M6 9.00009C5.87 9.00009 5.74 8.94509 5.645 8.85509C5.555 8.76009 5.5 8.63009 5.5 8.50009C5.5 8.43509 5.515 8.37009 5.54 8.31009C5.565 8.24509 5.6 8.1901 5.645 8.1451C5.83 7.9601 6.17 7.9601 6.355 8.1451C6.4 8.1901 6.435 8.24509 6.46 8.31009C6.485 8.37009 6.5 8.43509 6.5 8.50009C6.5 8.63009 6.445 8.76009 6.355 8.85509C6.26 8.94509 6.13 9.00009 6 9.00009Z"
                            fill="#717171"
                          />
                          <path
                            d="M7.75 8.99996C7.62 8.99996 7.49 8.94495 7.395 8.85495C7.35 8.80995 7.315 8.75496 7.29 8.68996C7.265 8.62996 7.25 8.56496 7.25 8.49996C7.25 8.43496 7.265 8.36995 7.29 8.30995C7.315 8.24495 7.35 8.18996 7.395 8.14496C7.51 8.02996 7.685 7.97495 7.845 8.00995C7.88 8.01495 7.91 8.02495 7.94 8.03995C7.97 8.04995 8 8.06496 8.03 8.08496C8.055 8.09996 8.08 8.12496 8.105 8.14496C8.195 8.23996 8.25 8.36996 8.25 8.49996C8.25 8.62996 8.195 8.75995 8.105 8.85495C8.01 8.94495 7.88 8.99996 7.75 8.99996Z"
                            fill="#717171"
                          />
                          <path
                            d="M10.25 4.91992H1.75C1.545 4.91992 1.375 4.74992 1.375 4.54492C1.375 4.33992 1.545 4.16992 1.75 4.16992H10.25C10.455 4.16992 10.625 4.33992 10.625 4.54492C10.625 4.74992 10.455 4.91992 10.25 4.91992Z"
                            fill="#717171"
                          />
                          <path
                            d="M8 11.375H4C2.175 11.375 1.125 10.325 1.125 8.5V4.25C1.125 2.425 2.175 1.375 4 1.375H8C9.825 1.375 10.875 2.425 10.875 4.25V8.5C10.875 10.325 9.825 11.375 8 11.375ZM4 2.125C2.57 2.125 1.875 2.82 1.875 4.25V8.5C1.875 9.93 2.57 10.625 4 10.625H8C9.43 10.625 10.125 9.93 10.125 8.5V4.25C10.125 2.82 9.43 2.125 8 2.125H4Z"
                            fill="#717171"
                          />
                        </svg>
                        <span>
                          {order.date} , ساعت: {order.time}
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.00141 7.08497C4.93641 7.08497 4.06641 6.21997 4.06641 5.14997C4.06641 4.07997 4.93641 3.21997 6.00141 3.21997C7.06641 3.21997 7.93641 4.08497 7.93641 5.15497C7.93641 6.22497 7.06641 7.08497 6.00141 7.08497ZM6.00141 3.96997C5.35141 3.96997 4.81641 4.49997 4.81641 5.15497C4.81641 5.80997 5.34641 6.33997 6.00141 6.33997C6.65641 6.33997 7.18641 5.80997 7.18641 5.15497C7.18641 4.49997 6.65141 3.96997 6.00141 3.96997Z"
                            fill="#717171"
                          />
                          <path
                            d="M6.00082 11.38C5.26082 11.38 4.51582 11.1 3.93582 10.545C2.46082 9.125 0.830821 6.86 1.44582 4.165C2.00082 1.72 4.13582 0.625 6.00082 0.625C6.00082 0.625 6.00082 0.625 6.00582 0.625C7.87082 0.625 10.0058 1.72 10.5608 4.17C11.1708 6.865 9.54082 9.125 8.06582 10.545C7.48582 11.1 6.74082 11.38 6.00082 11.38ZM6.00082 1.375C4.54582 1.375 2.67582 2.15 2.18082 4.33C1.64082 6.685 3.12082 8.715 4.46082 10C5.32582 10.835 6.68082 10.835 7.54582 10C8.88082 8.715 10.3608 6.685 9.83082 4.33C9.33082 2.15 7.45582 1.375 6.00082 1.375Z"
                            fill="#717171"
                          />
                        </svg>
                        <p>{barnches[0].address}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.5 4.875H3.5C3.295 4.875 3.125 4.705 3.125 4.5C3.125 4.295 3.295 4.125 3.5 4.125H6.5C6.705 4.125 6.875 4.295 6.875 4.5C6.875 4.705 6.705 4.875 6.5 4.875Z"
                          fill="#717171"
                        />
                        <path
                          d="M9.51994 7.39996C8.76494 7.39996 8.12496 6.83996 8.06496 6.11996C8.02496 5.70496 8.17496 5.29997 8.47496 5.00497C8.72496 4.74497 9.07994 4.59998 9.45494 4.59998H10.5C10.995 4.61498 11.375 5.00495 11.375 5.48495V6.51498C11.375 6.99498 10.995 7.38496 10.515 7.39996H9.51994ZM10.4849 5.34998H9.45995C9.28495 5.34998 9.12496 5.41497 9.00996 5.53497C8.86496 5.67497 8.79496 5.86496 8.81496 6.05496C8.83996 6.38496 9.15994 6.64996 9.51994 6.64996H10.5C10.565 6.64996 10.625 6.58998 10.625 6.51498V5.48495C10.625 5.40995 10.5649 5.35498 10.4849 5.34998Z"
                          fill="#717171"
                        />
                        <path
                          d="M8 10.625H3.5C1.78 10.625 0.625 9.47 0.625 7.75V4.25C0.625 2.71 1.57499 1.595 3.04999 1.41C3.18499 1.39 3.34 1.375 3.5 1.375H8C8.12 1.375 8.275 1.38 8.435 1.405C9.91 1.575 10.875 2.695 10.875 4.25V4.97501C10.875 5.18001 10.705 5.35001 10.5 5.35001H9.45999C9.28499 5.35001 9.12501 5.415 9.01001 5.535L9.005 5.54001C8.865 5.67501 8.8 5.85999 8.815 6.04999C8.84 6.37999 9.15999 6.64499 9.51999 6.64499H10.5C10.705 6.64499 10.875 6.81499 10.875 7.01999V7.745C10.875 9.47 9.72 10.625 8 10.625ZM3.5 2.125C3.38 2.125 3.26499 2.13499 3.14999 2.14999C2.04999 2.28999 1.375 3.09 1.375 4.25V7.75C1.375 9.04 2.21 9.875 3.5 9.875H8C9.29 9.875 10.125 9.04 10.125 7.75V7.39999H9.51999C8.76499 7.39999 8.125 6.84 8.065 6.12C8.025 5.71 8.17501 5.30001 8.47501 5.01001C8.73501 4.74501 9.08499 4.60001 9.45999 4.60001H10.125V4.25C10.125 3.08 9.43999 2.27499 8.32999 2.14499C8.20999 2.12499 8.105 2.125 8 2.125H3.5Z"
                          fill="#717171"
                        />
                      </svg>
                      <p>
                        مبلغ:{" "}
                        {separate(
                          order.orders.reduce((acc, cur) => {
                            return (acc += cur.price * cur.quantity);
                          }, 0) -
                            order.orders.reduce((acc, cur) => {
                              return (acc +=
                                ((cur.discount * cur.price) / 100) *
                                cur.quantity);
                            }, 0)
                        )}
                      </p>
                      <p className="mr-2">
                        تخفیف:{" "}
                        {separate(
                          order.orders.reduce((acc, cur) => {
                            return (acc +=
                              ((cur.discount * cur.price) / 100) *
                              cur.quantity);
                          }, 0)
                        )}
                      </p>
                    </div>
                  </div>
                  {/* نمایش محصولات سفارش داده شده */}
                  <ul className="flex pl-4 py-4 rounded-lg overflow-x-scroll scrollbar-none gap-2">
                    {order.orders.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className="w-24 md:w-[123px] border shadow min-w-fit text-[12px] md:text-base rounded-lg overflow-hidden"
                        >
                          <div className="w-full h-16 md:h-20 relative">
                            <img
                              className="object-cover h-full w-full"
                              src={item.image}
                              alt={item.name}
                            />
                            <span className="absolute bottom-1 left-1 px-1 md:px-2 md:py-1 bg-white rounded">
                              x{item.quantity}
                            </span>
                            {item.discount > 0 && (
                              <span className="absolute bottom-1 right-1 px-1 md:px-2 md:py-1 bg-red-500 text-white rounded">
                                %{item.discount}
                              </span>
                            )}
                          </div>
                          <div className="py-2">
                            <h4 className="w-full text-center">{item.name}</h4>
                            <p className="w-full text-center text-gray-500">
                              {separate(discount(item.discount, item.price))}
                              <span className="mr-1">تومان</span>
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="w-full flex justify-center md:justify-end mt-4">
                    {order.status === "Current" ? (
                      <ButtonOutline
                        className="px-6 text-red-500 border-red-500"
                        onClick={(e) => dispatch(cancelOrder(order.id))}
                        title="لغو سفارش"
                      />
                    ) : (
                      <button className="text-[12px] md:text-base hover:bg-green-100 duration-200 leading-6 px-4 py-2 border rounded-lg border-primary text-primary">
                        سفارش مجدد
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </article>
  );
};

export default TrackOrders;
