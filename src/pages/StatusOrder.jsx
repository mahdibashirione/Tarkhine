import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonContain from "../components/common/Buttons/ButtonContain";
import ButtonOutline from "../components/common/Buttons/ButtonOutline";

const StatusOrder = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="container p-4 flex flex-col items-center select-none">
      <div className="w-full mt-[86px] md:mt-[48px] max-w-[120px] md:max-w-[256px]">
        <img
          src={`${
            state.status === "failer"
              ? "/images/status/failer.png"
              : "/images/status/success.png"
          }`}
          alt={state.status}
        />
      </div>
      <h2 className="md:text-xl lg:text-5xl mt-6 mb-4 md:mt-12 md:mb-6">
        {state.status === "failer"
          ? "پرداخت شما ناموفق بود!"
          : "پرداخت شما با موفقیت انجام شد!"}
      </h2>
      <p className="text-sm md:text-base lg:text-xl text-gray-500 mb-8 lg:mb-10">
        کد پیگیری تراکنش شما: {state.id}
      </p>
      <div className="flex gap-4 mb-[86px] md:mb-[48px] leading-[22px] md:leading-7 text-[12px] md:text-base text-primary">
        <Link to="/" className="py-2 rounded-md">
          بازگشت به صفحه اصلی
        </Link>
        {state.status === "failer" ? (
          <ButtonOutline
            onClick={(e) => console.log("پرداخت مجدد")}
            title="پرداخت مجدد"
            className="px-8 hover:bg-green-100"
          />
        ) : (
          <ButtonContain
            title=" پیگیری سفارش"
            onClick={(e) => navigate("/user/track-orders")}
            className="px-8"
          />
        )}
      </div>
    </section>
  );
};

export default StatusOrder;
