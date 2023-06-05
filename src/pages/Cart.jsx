import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CheckOut from "../components/cart/Checkout";
import ConfirmData from "../components/cart/ConfirmData";
import ProductItemMini from "../components/cart/ProductItemMini";
import ProductList from "../components/cart/ProductList";
import PopUp from "../components/common/PopUp";
import { removeAllItem } from "../features/cart/cartSlice";
import separate from "../utils/separate";
import { addOrder } from "../features/orders/orderSlice";
import ButtonOutline from "../components/common/Buttons/ButtonOutline";
import ButtonContain from "../components/common/Buttons/ButtonContain";
import useToast from "../hooks/useToast";

const Cart = () => {
  const { cart, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorToast, successToast } = useToast();
  const [activeStep, setActiveStep] = useState(0);
  const [popUpDeleteAllProducts, setPopUpDeleteAllProducts] = useState(false);
  const [order, setOrder] = useState({
    id: Math.floor(Math.random() * 1000000),
    orders: cart,
    deliveryOrder: "پیک",
    addressUser: false,
    description: "",
    discontCode: false,
    payment: "انلاین",
  });

  useEffect(() => {
    document.title = "سبد خرید";
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeStep]);
  useEffect(() => {
    setOrder({ ...order, orders: cart });
  }, [cart]);

  const handleSelectAddress = (address) => {
    setOrder({ ...order, addressUser: address });
  };
  const handleRadio = (name, value) => {
    setOrder({ ...order, [name]: value });
  };
  const handleDescription = (value) => {
    setOrder({ ...order, description: value });
  };
  const handleDiscontCode = (value) => {
    if (value.length <= 0) return errorToast("لطفا کد تخفیف خود را وارد کنید");
    setOrder({ ...order, discontCode: value });
    successToast("کد تخفیف شما ثبت شد");
  };

  const steps = [
    {
      id: 0,
      title: "سبدخرید",
      icon: sabadKharidIcon,
      view: <ProductList successToast={successToast} activeStep={activeStep} />,
    },
    {
      id: 1,
      title: "تکمیل اطلاعات",
      icon: takmilEtelaatIcon,
      view: (
        <ConfirmData
          handleAddress={handleSelectAddress}
          order={order}
          handleDescription={handleDescription}
          handleRadio={handleRadio}
        />
      ),
    },
    {
      id: 2,
      title: "پرداخت",
      icon: pardakhtIcon,
      view: (
        <CheckOut
          order={order}
          handleRadio={handleRadio}
          handleDiscontCode={handleDiscontCode}
        />
      ),
    },
  ];

  function handleDeleteAllProducts() {
    setPopUpDeleteAllProducts(false);
    dispatch(removeAllItem());
    successToast("همه محصولات حذف شدند");
  }
  function sabadKharidIcon(steps, id) {
    return (
      <svg
        className={`${steps == id ? "w-8 h-8" : "w-6 h-6"}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z"
          fill={`${steps >= id ? "#417F56" : "#cbcbcb"}`}
        />
        <path
          d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z"
          fill={`${steps >= id ? "#417F56" : "#cbcbcb"}`}
        />
        <path
          d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z"
          fill={`${steps >= id ? "#417F56" : "#cbcbcb"}`}
        />
        <path
          d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z"
          fill={`${steps >= id ? "#417F56" : "#cbcbcb"}`}
        />
      </svg>
    );
  }
  function takmilEtelaatIcon(steps, id) {
    return (
      <svg
        className={`${steps == id ? "w-8 h-8" : "w-6 h-6"}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
          fill={`${steps >= id ? "#417F56" : "#cbcbcb"}`}
        />
        <path
          d="M10.5799 15.58C10.3799 15.58 10.1899 15.5 10.0499 15.36L7.21994 12.53C6.92994 12.24 6.92994 11.76 7.21994 11.47C7.50994 11.18 7.98994 11.18 8.27994 11.47L10.5799 13.77L15.7199 8.62998C16.0099 8.33998 16.4899 8.33998 16.7799 8.62998C17.0699 8.91998 17.0699 9.39998 16.7799 9.68998L11.1099 15.36C10.9699 15.5 10.7799 15.58 10.5799 15.58Z"
          fill={`${steps >= id ? "#417F56" : "#cbcbcb"}`}
        />
      </svg>
    );
  }
  function pardakhtIcon(steps, id) {
    return (
      <svg
        className={`${steps == id ? "w-8 h-8" : "w-6 h-6"}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 9.75H7C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25H13C13.41 8.25 13.75 8.59 13.75 9C13.75 9.41 13.41 9.75 13 9.75Z"
          fill={`${steps >= id ? "#417F56" : "#cbcbcb"}`}
        />
        <path
          d="M19.0399 14.7999C17.5299 14.7999 16.2499 13.6799 16.1299 12.2399C16.0499 11.4099 16.3499 10.5999 16.9499 10.0099C17.4499 9.48995 18.1599 9.19995 18.9099 9.19995H20.9999C21.9899 9.22995 22.7499 10.0099 22.7499 10.9699V13.03C22.7499 13.99 21.9899 14.7699 21.0299 14.7999H19.0399ZM20.9699 10.7H18.9199C18.5699 10.7 18.2499 10.8299 18.0199 11.0699C17.7299 11.3499 17.5899 11.7299 17.6299 12.1099C17.6799 12.7699 18.3199 13.2999 19.0399 13.2999H20.9999C21.1299 13.2999 21.2499 13.18 21.2499 13.03V10.9699C21.2499 10.8199 21.1299 10.71 20.9699 10.7Z"
          fill={`${steps >= id ? "#417F56" : "#cbcbcb"}`}
        />
        <path
          d="M16 21.25H7C3.56 21.25 1.25 18.94 1.25 15.5V8.5C1.25 5.42 3.14998 3.19001 6.09998 2.82001C6.36998 2.78001 6.68 2.75 7 2.75H16C16.24 2.75 16.55 2.76 16.87 2.81C19.82 3.15 21.75 5.39 21.75 8.5V9.95001C21.75 10.36 21.41 10.7 21 10.7H18.92C18.57 10.7 18.25 10.83 18.02 11.07L18.01 11.08C17.73 11.35 17.6 11.72 17.63 12.1C17.68 12.76 18.32 13.29 19.04 13.29H21C21.41 13.29 21.75 13.63 21.75 14.04V15.49C21.75 18.94 19.44 21.25 16 21.25ZM7 4.25C6.76 4.25 6.52999 4.26999 6.29999 4.29999C4.09999 4.57999 2.75 6.18 2.75 8.5V15.5C2.75 18.08 4.42 19.75 7 19.75H16C18.58 19.75 20.25 18.08 20.25 15.5V14.8H19.04C17.53 14.8 16.25 13.68 16.13 12.24C16.05 11.42 16.35 10.6 16.95 10.02C17.47 9.49002 18.17 9.20001 18.92 9.20001H20.25V8.5C20.25 6.16 18.88 4.54998 16.66 4.28998C16.42 4.24998 16.21 4.25 16 4.25H7Z"
          fill={`${steps >= id ? "#417F56" : "#cbcbcb"}`}
        />
      </svg>
    );
  }
  function handleNext() {
    switch (activeStep) {
      case 0: {
        setActiveStep(activeStep + 1);
        break;
      }
      case 1: {
        if (order.deliveryOrder === "پیک" && !order.addressUser) {
          errorToast("لطفا آدرس خود را وارد کنید");
        } else {
          setActiveStep(activeStep + 1);
        }
        break;
      }
      case 2: {
        if (auth) {
          dispatch(addOrder({ ...order, status: "Current" }));
          navigate(`/status-order/${order.id}`, {
            state: { status: "Current", id: order.id },
          });
          dispatch(removeAllItem());
        } else {
          errorToast("لطفا وارد حساب کاربری خود شوید");
        }
        break;
      }
    }
  }
  function handleBack() {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  }

  function totalCart(cart) {
    return cart.reduce((acc, cur) => {
      let price = cur.price - (cur.discount * cur.price) / 100;
      return (acc += price * cur.quantity);
    }, 0);
  }
  function totalDiscount(cart) {
    return cart.reduce((acc, cur) => {
      return (acc += ((cur.discount * cur.price) / 100) * cur.quantity);
    }, 0);
  }

  if (!auth) {
    return (
      <section className="bg-[url('/images/EmptyPage.png')] bg-center bg-no-repeat container flex flex-col gap-6 px-4 py-8 items-center justify-center min-h-[calc(100vh-260px)]">
        <p>لطفا وارد حساب کاربری خود شوید</p>
        <div className="w-full flex gap-x-4 max-w-[300px]">
          <ButtonContain
            onClick={(e) => navigate("/signin?redirect=/cart")}
            className="flex-1"
            title="ورود"
          />
          <ButtonContain
            onClick={(e) => navigate("/signin?redirect=/cart")}
            className="flex-1"
            title="ثبت نام"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="container px-4 select-none mb-16">
      {/* view step pc */}
      <article className="hidden p-8 md:gap-x-3 md:px-0 items-center w-full max-w-[730px] mx-auto md:flex justify-between">
        {steps.map((step, i) => {
          if (step.id < steps.length - 1) {
            return (
              <div
                key={step.id}
                className={`w-1/3 flex flex-1 items-center ${
                  activeStep == step.id ? "text-lg" : "text-sm"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-2">
                  {step.icon(activeStep, step.id)}
                  <p
                    className={`whitespace-nowrap ${
                      activeStep >= step.id ? "text-primary" : "text-gray-300"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
                <span
                  className={`${
                    activeStep > step.id && "border-primary"
                  } w-full mb-8 md:mb-0 md:mr-4 h-0.5 block border-t-2 border-dashed`}
                ></span>
              </div>
            );
          } else {
            return (
              <div
                key={step.id}
                className={`mr-4 md:mr-2 flex ${
                  activeStep == step.id ? "text-lg" : "text-sm"
                } flex-col md:flex-row items-center gap-2`}
              >
                {step.icon(activeStep, step.id)}
                <p
                  className={`whitespace-nowrap ${
                    activeStep >= step.id ? "text-primary" : "text-gray-300"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            );
          }
        })}
      </article>
      {/* view step mobile */}
      <article className="md:hidden w-full relative flex items-center justify-center pt-6 pb-4">
        {/* مرحله قبل برای موبایل */}
        {activeStep > 0 && (
          <button
            onClick={handleBack}
            className="absolute top-1/2 -translate-y-1/4 right-0 w-6 h-6"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        )}
        {/* حذف کردن همه محصولات در موبایل */}
        {cart.length > 0 && activeStep === 0 && (
          <button
            onClick={(e) => setPopUpDeleteAllProducts(true)}
            className="absolute top-1/2 -translate-y-1/4 left-0 w-6 h-6"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group"
            >
              <path
                d="M20.9999 7.22998C20.9799 7.22998 20.9499 7.22998 20.9199 7.22998C15.6299 6.69998 10.3499 6.49998 5.11992 7.02998L3.07992 7.22998C2.65992 7.26998 2.28992 6.96998 2.24992 6.54998C2.20992 6.12998 2.50992 5.76998 2.91992 5.72998L4.95992 5.52998C10.2799 4.98998 15.6699 5.19998 21.0699 5.72998C21.4799 5.76998 21.7799 6.13998 21.7399 6.54998C21.7099 6.93998 21.3799 7.22998 20.9999 7.22998Z"
                fill="#353535"
              />
              <path
                d="M8.50001 6.22C8.46001 6.22 8.42001 6.22 8.37001 6.21C7.97001 6.14 7.69001 5.75 7.76001 5.35L7.98001 4.04C8.14001 3.08 8.36001 1.75 10.69 1.75H13.31C15.65 1.75 15.87 3.13 16.02 4.05L16.24 5.35C16.31 5.76 16.03 6.15 15.63 6.21C15.22 6.28 14.83 6 14.77 5.6L14.55 4.3C14.41 3.43 14.38 3.26 13.32 3.26H10.7C9.64001 3.26 9.62001 3.4 9.47001 4.29L9.24001 5.59C9.18001 5.96 8.86001 6.22 8.50001 6.22Z"
                fill="#353535"
              />
              <path
                d="M15.2099 23.2501H8.7899C5.2999 23.2501 5.1599 21.3201 5.0499 19.7601L4.3999 9.69007C4.3699 9.28007 4.6899 8.92008 5.0999 8.89008C5.5199 8.87008 5.8699 9.18008 5.8999 9.59008L6.5499 19.6601C6.6599 21.1801 6.6999 21.7501 8.7899 21.7501H15.2099C17.3099 21.7501 17.3499 21.1801 17.4499 19.6601L18.0999 9.59008C18.1299 9.18008 18.4899 8.87008 18.8999 8.89008C19.3099 8.92008 19.6299 9.27007 19.5999 9.69007L18.9499 19.7601C18.8399 21.3201 18.6999 23.2501 15.2099 23.2501Z"
                fill="#353535"
              />
              <path
                d="M13.6601 17.75H10.3301C9.92008 17.75 9.58008 17.41 9.58008 17C9.58008 16.59 9.92008 16.25 10.3301 16.25H13.6601C14.0701 16.25 14.4101 16.59 14.4101 17C14.4101 17.41 14.0701 17.75 13.6601 17.75Z"
                fill="#353535"
              />
              <path
                d="M14.5 13.75H9.5C9.09 13.75 8.75 13.41 8.75 13C8.75 12.59 9.09 12.25 9.5 12.25H14.5C14.91 12.25 15.25 12.59 15.25 13C15.25 13.41 14.91 13.75 14.5 13.75Z"
                fill="#353535"
              />
            </svg>
          </button>
        )}
        <span className="font-bold">{steps[activeStep].title}</span>
      </article>
      {/* نمایش محصولی وجود ندارد */}
      {cart.length <= 0 && (
        <article className="w-full flex flex-col items-center gap-6 mb-8 mt-4 border py-32 bg-[url('/images/EmptyPage.png')] bg-center bg-no-repeat border-[#cbcbcb] rounded-lg px-4">
          <h3 className="text-center select-none text-gray-600 lg:text-lg">
            محصولی در سبد خرید شما وجود ندارد
          </h3>
          <ButtonOutline
            onClick={(e) => navigate("/akbatan")}
            className="hover:bg-green-100 px-8"
            title="منوی رستوران"
          />
        </article>
      )}
      {/* نمایش محصولات سبد خرید */}
      {cart.length > 0 && (
        <article className="w-full flex flex-col lg:flex-row gap-2 select-none">
          {steps[activeStep].view}
          {/* جزیات سفارش */}
          <div className="border-[#cbcbcb] w-full h-fit lg:w-1/3 p-6 border rounded-lg">
            {/* سبدخرید */}
            <div className="hidden md:flex items-center justify-between pb-3 border-b-2">
              <h2 className="flex items-center gap-2">
                سبدخرید
                <p className="text-sm text-gray-500">({cart.length})</p>
              </h2>
              {activeStep <= 0 && (
                <button
                  onClick={(e) => setPopUpDeleteAllProducts(true)}
                  className="w-6 h-6"
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
                      fill="#353535"
                    />
                    <path
                      d="M8.50001 6.22C8.46001 6.22 8.42001 6.22 8.37001 6.21C7.97001 6.14 7.69001 5.75 7.76001 5.35L7.98001 4.04C8.14001 3.08 8.36001 1.75 10.69 1.75H13.31C15.65 1.75 15.87 3.13 16.02 4.05L16.24 5.35C16.31 5.76 16.03 6.15 15.63 6.21C15.22 6.28 14.83 6 14.77 5.6L14.55 4.3C14.41 3.43 14.38 3.26 13.32 3.26H10.7C9.64001 3.26 9.62001 3.4 9.47001 4.29L9.24001 5.59C9.18001 5.96 8.86001 6.22 8.50001 6.22Z"
                      fill="#353535"
                    />
                    <path
                      d="M15.2099 23.2501H8.7899C5.2999 23.2501 5.1599 21.3201 5.0499 19.7601L4.3999 9.69007C4.3699 9.28007 4.6899 8.92008 5.0999 8.89008C5.5199 8.87008 5.8699 9.18008 5.8999 9.59008L6.5499 19.6601C6.6599 21.1801 6.6999 21.7501 8.7899 21.7501H15.2099C17.3099 21.7501 17.3499 21.1801 17.4499 19.6601L18.0999 9.59008C18.1299 9.18008 18.4899 8.87008 18.8999 8.89008C19.3099 8.92008 19.6299 9.27007 19.5999 9.69007L18.9499 19.7601C18.8399 21.3201 18.6999 23.2501 15.2099 23.2501Z"
                      fill="#353535"
                    />
                    <path
                      d="M13.6601 17.75H10.3301C9.92008 17.75 9.58008 17.41 9.58008 17C9.58008 16.59 9.92008 16.25 10.3301 16.25H13.6601C14.0701 16.25 14.4101 16.59 14.4101 17C14.4101 17.41 14.0701 17.75 13.6601 17.75Z"
                      fill="#353535"
                    />
                    <path
                      d="M14.5 13.75H9.5C9.09 13.75 8.75 13.41 8.75 13C8.75 12.59 9.09 12.25 9.5 12.25H14.5C14.91 12.25 15.25 12.59 15.25 13C15.25 13.41 14.91 13.75 14.5 13.75Z"
                      fill="#353535"
                    />
                  </svg>
                </button>
              )}
            </div>
            {/* تخفیف محصولات */}
            <div className="flex border-t md:border-t-none text-sm leading-6 items-center justify-between py-[14px] border-b border-gray-300">
              <span>تخفیف محصولات</span>
              <p className="text-gray-500 flex gap-1">
                {separate(totalDiscount(cart))}
                <span>تومان</span>
              </p>
            </div>
            {/* لیست محصولات */}
            {activeStep > 0 && (
              <ul className="w-full max-h-[200px] overflow-y-scroll divide-y-2 scrollbar-none">
                {cart.length > 0 &&
                  cart.map((food) => (
                    <ProductItemMini
                      step={activeStep}
                      key={food.id}
                      food={food}
                    />
                  ))}
              </ul>
            )}
            {/* هزینه ارسال */}
            <div className="flex text-sm leading-6 items-center justify-between flex-wrap py-[14px] border-b border-gray-300">
              <span>هزینه ارسال</span>
              <p className="text-gray-500 flex gap-1">
                {activeStep > 0 && order.deliveryOrder === "پیک"
                  ? separate(27000)
                  : 0}
                <span>تومان</span>
              </p>
              {activeStep < 1 && (
                <div className="w-full flex gap-1 mt-2">
                  <svg
                    className="min-w-fit"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V7.75C11.25 7.34 11.59 7 12 7C12.41 7 12.75 7.34 12.75 7.75V13C12.75 13.41 12.41 13.75 12 13.75Z"
                      fill="#A9791C"
                    />
                    <path
                      d="M12 17.2502C11.73 17.2502 11.48 17.1502 11.29 16.9602C11.2 16.8602 11.13 16.7502 11.07 16.6302C11.02 16.5102 11 16.3802 11 16.2502C11 15.9902 11.11 15.7302 11.29 15.5402C11.66 15.1702 12.34 15.1702 12.71 15.5402C12.89 15.7302 13 15.9902 13 16.2502C13 16.3802 12.97 16.5102 12.92 16.6302C12.87 16.7502 12.8 16.8602 12.71 16.9602C12.52 17.1502 12.27 17.2502 12 17.2502Z"
                      fill="#A9791C"
                    />
                    <path
                      d="M12.0002 22.7501C11.3302 22.7501 10.6502 22.5801 10.0502 22.2301L4.11017 18.8001C2.91017 18.1001 2.16016 16.8101 2.16016 15.4201V8.58011C2.16016 7.19011 2.91017 5.90011 4.11017 5.20011L10.0502 1.77012C11.2502 1.07012 12.7402 1.07012 13.9502 1.77012L19.8902 5.20011C21.0902 5.90011 21.8402 7.19011 21.8402 8.58011V15.4201C21.8402 16.8101 21.0902 18.1001 19.8902 18.8001L13.9502 22.2301C13.3502 22.5801 12.6702 22.7501 12.0002 22.7501ZM12.0002 2.7501C11.5902 2.7501 11.1702 2.8601 10.8002 3.0701L4.86017 6.5001C4.12017 6.9301 3.66016 7.72011 3.66016 8.58011V15.4201C3.66016 16.2701 4.12017 17.0701 4.86017 17.5001L10.8002 20.9301C11.5402 21.3601 12.4602 21.3601 13.1902 20.9301L19.1302 17.5001C19.8702 17.0701 20.3302 16.2801 20.3302 15.4201V8.58011C20.3302 7.73011 19.8702 6.9301 19.1302 6.5001L13.1902 3.0701C12.8302 2.8601 12.4102 2.7501 12.0002 2.7501Z"
                      fill="#A9791C"
                    />
                  </svg>
                  <p className="text-[#A9791C] text-[12px]">
                    هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی
                    شما محاسبه و به این مبلغ اضافه خواهد شد.
                  </p>
                </div>
              )}
            </div>
            {/* قابل پرداخت */}
            <div className="flex text-sm leading-6 items-center justify-between py-[14px] border-b border-gray-300">
              <span>قابل پرداخت</span>
              <p className="flex gap-1 text-primary">
                {separate(totalCart(cart))}
                <span>تومان</span>
              </p>
            </div>
            <div className="w-full flex justify-between gap-2 pt-4">
              {activeStep > 0 && (
                <ButtonOutline
                  onClick={handleBack}
                  className="flex-1 flex items-center justify-center hover:bg-green-100 gap-1"
                  title={
                    <>
                      <FiChevronRight />
                      مرحله قبل
                    </>
                  }
                />
              )}
              <ButtonContain
                onClick={handleNext}
                title={
                  activeStep >= steps.length - 1 ? (
                    <>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 9.25H2C1.59 9.25 1.25 8.91 1.25 8.5C1.25 8.09 1.59 7.75 2 7.75H22C22.41 7.75 22.75 8.09 22.75 8.5C22.75 8.91 22.41 9.25 22 9.25Z"
                          fill="white"
                        />
                        <path
                          d="M8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z"
                          fill="white"
                        />
                        <path
                          d="M14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
                          fill="white"
                        />
                        <path
                          d="M17.56 21.25H6.44C2.46 21.25 1.25 20.05 1.25 16.11V7.89C1.25 3.95 2.46 2.75 6.44 2.75H17.55C21.53 2.75 22.74 3.95 22.74 7.89V16.1C22.75 20.05 21.54 21.25 17.56 21.25ZM6.44 4.25C3.3 4.25 2.75 4.79 2.75 7.89V16.1C2.75 19.2 3.3 19.74 6.44 19.74H17.55C20.69 19.74 21.24 19.2 21.24 16.1V7.89C21.24 4.79 20.69 4.25 17.55 4.25H6.44Z"
                          fill="white"
                        />
                      </svg>
                      تکمیل سفارش
                    </>
                  ) : (
                    <>
                      مرحله بعد
                      <FiChevronLeft />
                    </>
                  )
                }
                className="flex-1 flex items-center justify-center gap-1"
              />
            </div>
          </div>
        </article>
      )}
      <PopUp
        isShow={popUpDeleteAllProducts}
        handleClose={(e) => setPopUpDeleteAllProducts(false)}
        title="حذف محصولات"
      >
        <div className="w-full flex flex-col items-center py-8 gap-8">
          <h3 className="text-gray-500">همه محصولات سبد خرید شما حذف شود؟</h3>
          <div className="w-full flex gap-2 text-sm md:text-base max-w-[300px] ">
            <ButtonOutline
              onClick={(e) => setPopUpDeleteAllProducts(false)}
              className="flex-1"
              title="بازگشت"
            />
            <ButtonContain
              className="flex-1"
              onClick={handleDeleteAllProducts}
              title="حذف"
            />
          </div>
        </div>
      </PopUp>
    </section>
  );
};

export default Cart;
