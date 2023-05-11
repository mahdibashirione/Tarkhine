import { Link } from "react-router-dom";
import barnches from "../data/branches";

const ContactUs = () => {
  return (
    <section>
      <article className="w-full md:h-[300px] lg:h-[340px] h-[174px] relative max-w-[1440px] mx-auto">
        <img
          className="w-full h-full object-cover"
          src="/images/contactus.png"
          alt="صفحه-درباره-ما-ترخینه"
        />
        <p className="font-bold text-white text-xl lg:text-[40px]  absolute top-1/2 right-1/2 translate-x-1/2 select-none -translate-y-1/2">
          با ترخینه در تماس باشید.
        </p>
      </article>
      <article className="container mx-auto">
        <ul className="w-full p-4 grid grid-cols-1 gap-4">
          {barnches.map((braanch) => {
            return (
              <li className="rounded-lg overflow-hidden col-span-1 border border-[#cbcbcb] shadow pb-4 md:pb-0 md:flex-row flex flex-col">
                <div className="w-full h-[115px] md:h-[280px] md:w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src={braanch.image}
                    alt={braanch.title}
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h3 className="font-semibold mt-2 md:mt-0 md:text-lg lg:text-xl xl:text-2xl">
                    {braanch.title}
                  </h3>
                  <p className="text-sm mt-2 md:text-base text-gray-500 leading-6 md:leading-7">
                    {braanch.address}
                  </p>
                  <div className="text-sm md:text-base text-gray-500 flex gap-2 mt-2 items-center md:flex-col">
                    <span>شماره تماس1:{braanch.phoneNumber[0]}</span>
                    <span>شماره تماس2:{braanch.phoneNumber[1]}</span>
                  </div>
                  <p className="mt-2 text-center text-sm md:text-base text-gray-500">
                    ساعت کاری:{braanch.workTime}
                  </p>
                  <div className="flex justify-center mt-4 gap-4">
                    <Link
                      to={braanch.url}
                      className="hover:scale-95 duration-200 py-2 px-4 leading-6 md:leading-7 border rounded border-primary text-primary text-sm md:text-base"
                    >
                      صفحه شعبه
                    </Link>
                    <button className="hover:scale-95 duration-200 py-2 px-4 leading-6 md:leading-7 border rounded border-primary text-white bg-primary text-sm md:text-base">
                      دیدن در نقشه
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default ContactUs;
