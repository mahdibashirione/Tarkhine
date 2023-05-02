import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <min>
      <section className="select-none container flex items-center justify-center min-h-screen">
        <div className="w-full max-w-[400px] flex flex-col p-5 lg:border lg:p-8 rounded-xl lg:shadow">
          <Link to="/" className="h-[40px] mx-auto">
            <img
              className="h-full object-cover"
              src="/images/Digitaze.png"
              alt="logo-digikala"
            />
          </Link>
          <h1 className="font-bold text-lg mt-4">ورود</h1>
          <p className="mt-4 text-sm leading-6">سلام!</p>
          <p className="mb-4 text-sm leading-6">
            لطفا شماره موبایل و ایمیل خود را وارد کنید
          </p>
          <form>
            <input
              type="text"
              placeholder="ایمیل"
              className="w-full px-4 py-3 bg-gray-200 rounded-lg outline-none border-none"
            />
            <p className="text-orange-500 select-none text-sm w-full text-right leading-6">
              لطفا این قسمت را خالی نگذارید
            </p>
            <input
              type="text"
              placeholder="شماره موبایل"
              className="w-full mt-2 px-4 py-3 bg-gray-200 rounded-lg outline-none border-none"
            />
            <p className="text-orange-500 select-none text-sm w-full text-right leading-6">
              لطفا این قسمت را خالی نگذارید
            </p>
            <input
              type="text"
              placeholder="پسورد"
              className="w-full mt-2 px-4 py-3 bg-gray-200 rounded-lg outline-none border-none"
            />
            <p className="text-orange-500 select-none text-sm w-full text-right leading-6">
              لطفا این قسمت را خالی نگذارید
            </p>
            <button className="py-4 w-full bg-orange-500 text-white rounded-lg mt-6">
              ثبت نام
            </button>
            <p className="text-[12px] leading-6 mt-4 text-center">
              ورود شما به معنای پذیرش
              <Link class="mx-1 text-blue-500" to="/">
                شرایط دیجی تایز
              </Link>
              و
              <Link class="mx-1 text-blue-500" to="/">
                قوانین حریم‌خصوصی
              </Link>
              است
            </p>
            <Link
              to="/signin"
              className="flex w-full justify-center gap-2 items-center text-blue-500 text-sm mt-4"
            >
              ورود
              <FiChevronLeft />
            </Link>
          </form>
        </div>
      </section>
    </min>
  );
};

export default SignUp;
