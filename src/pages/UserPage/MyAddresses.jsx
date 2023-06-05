import { useEffect, useState } from "react";
import PopUp from "../../components/common/PopUp";
import { FiPlus } from "react-icons/fi";
import useToast from "../../hooks/useToast";

const Input = ({ placeholder, name, handleChange, value = "" }) => {
  return (
    <input
      onChange={(e) => handleChange(e)}
      name={name}
      value={value}
      type="text"
      placeholder={placeholder}
      className=" w-full border rounded-md px-4 py-2 text-sm outline-none border-[#cbcbcb] focus:border-primary"
    />
  );
};

const MyAddresses = () => {
  const { successToast } = useToast();
  const [addresses, setAddresses] = useState([]);
  const [isPopUpAddress, setIsPopUpAddress] = useState(false);
  const [isPopUpDelete, setIsPopUpDelete] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    const localAddress = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(localAddress);
  }, []);
  useEffect(() => {
    if (addresses.length > 0)
      localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const handleChangeAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const handleAddAddress = (address) => {
    setAddresses([...addresses, address]);
    setAddress({ name: "", phoneNumber: "", address: "" });
    handleClosePopUpAddress();
  };
  const hadnleDeleteAddress = (phoneNumber) => {
    const filterAddress = addresses.filter(
      (address) => address.phoneNumber !== phoneNumber
    );
    setAddresses(filterAddress);
    if (addresses.length <= 1) {
      localStorage.clear("addresses");
    } else {
      localStorage.setItem("addresses", JSON.stringify(addresses));
    }
    handleClosePopUpDelete();
    successToast("آدرس حذف شد");
  };

  function handleClosePopUpAddress() {
    setIsPopUpAddress(false);
  }
  function handleShowPopUpAddress() {
    setIsPopUpAddress(true);
  }
  function handleClosePopUpDelete() {
    setIsPopUpDelete(false);
  }
  function handleShowPopUpDelete() {
    setIsPopUpDelete(true);
  }

  return (
    <article className="shadow flex-1 p-4 rounded-lg border border-[#cbcbcb]">
      <div className="w-full py-2 border-b border-[#cbcbcb]">
        <h2 className="leading-9 text-xl font-semibold">آدرس ها</h2>
      </div>
      {/* نمایش آدرسی وجود ندارد */}
      {addresses.length <= 0 && (
        <div className="select-none bg-[url('/images/EmptyPage.png')] bg-no-repeat bg-center bg-contain h-80 mt-8 flex flex-col py-8 items-center justify-center gap-4 md:gap-8">
          <p className="text-center text-gray-500 text-sm leading-6 md:leading-7 md:text-base">
            شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
          </p>
          <button
            onClick={handleShowPopUpAddress}
            className="w-full border text-center rounded border-primary text-primary hover:bg-green-100 duration-200 text-sm md:text-base max-w-[152px] md:max-w-[288px] py-2 leading-6 md:leading-7"
          >
            افزودن آدرس
          </button>
        </div>
      )}
      {/* لیست آدرس ها */}
      {addresses.length > 0 && (
        <div className="py-4 pb-16 grid gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {addresses.map((address, i) => {
            return (
              <div
                key={i}
                className="text-[12px] border-[#cbcbcb] min-h-[106px] md:min-h-[110px] flex select-none gap-4 flex-col justify-between leading-6 md:text-base md:leading-7 cols-span-1 p-3 border shadow rounded-md"
              >
                <div className="w-full text-sm flex gap-4 justify-between items-start">
                  <p className="line-clamp-2 text-justify">{address.address}</p>
                  <div className="flex gap-2 min-w-fit">
                    {/* ویرایش آدرس */}
                    <button>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.53999 19.5201C4.92999 19.5201 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.10005C14.77 0.930049 16.91 0.870049 19.08 2.92005C21.25 4.97005 21.31 7.11005 19.26 9.28005L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.9401L6.01999 19.49C5.84999 19.5 5.69999 19.5201 5.53999 19.5201ZM15.93 2.91005C15.16 2.91005 14.49 3.39005 13.81 4.11005L5.59999 12.8101C5.39999 13.0201 5.16999 13.5201 5.12999 13.8101L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.4501C9.26999 17.4001 9.74999 17.14 9.94999 16.93L18.16 8.24005C19.4 6.92005 19.85 5.70005 18.04 4.00005C17.24 3.23005 16.55 2.91005 15.93 2.91005Z"
                          fill="#353535"
                        />
                        <path
                          d="M17.34 10.9501C17.32 10.9501 17.29 10.9501 17.27 10.9501C14.15 10.6401 11.64 8.27009 11.16 5.17009C11.1 4.76009 11.38 4.38009 11.79 4.31009C12.2 4.25009 12.58 4.53009 12.65 4.94009C13.03 7.36009 14.99 9.22009 17.43 9.46009C17.84 9.50009 18.14 9.87009 18.1 10.2801C18.05 10.6601 17.72 10.9501 17.34 10.9501Z"
                          fill="#353535"
                        />
                        <path
                          d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z"
                          fill="#353535"
                        />
                      </svg>
                    </button>
                    {/* حذف ادرس */}
                    <button onClick={handleShowPopUpDelete}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 6.72998C20.98 6.72998 20.95 6.72998 20.92 6.72998C15.63 6.19998 10.35 5.99998 5.12001 6.52998L3.08001 6.72998C2.66001 6.76998 2.29001 6.46998 2.25001 6.04998C2.21001 5.62998 2.51001 5.26998 2.92001 5.22998L4.96001 5.02998C10.28 4.48998 15.67 4.69998 21.07 5.22998C21.48 5.26998 21.78 5.63998 21.74 6.04998C21.71 6.43998 21.38 6.72998 21 6.72998Z"
                          fill="#353535"
                        />
                        <path
                          d="M8.50001 5.72C8.46001 5.72 8.42001 5.72 8.37001 5.71C7.97001 5.64 7.69001 5.25 7.76001 4.85L7.98001 3.54C8.14001 2.58 8.36001 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64001 2.76 9.62001 2.9 9.47001 3.79L9.24001 5.09C9.18001 5.46 8.86001 5.72 8.50001 5.72Z"
                          fill="#353535"
                        />
                        <path
                          d="M15.21 22.7501H8.78999C5.29999 22.7501 5.15999 20.8201 5.04999 19.2601L4.39999 9.19007C4.36999 8.78007 4.68999 8.42008 5.09999 8.39008C5.51999 8.37008 5.86999 8.68008 5.89999 9.09008L6.54999 19.1601C6.65999 20.6801 6.69999 21.2501 8.78999 21.2501H15.21C17.31 21.2501 17.35 20.6801 17.45 19.1601L18.1 9.09008C18.13 8.68008 18.49 8.37008 18.9 8.39008C19.31 8.42008 19.63 8.77007 19.6 9.19007L18.95 19.2601C18.84 20.8201 18.7 22.7501 15.21 22.7501Z"
                          fill="#353535"
                        />
                        <path
                          d="M13.66 17.25H10.33C9.91999 17.25 9.57999 16.91 9.57999 16.5C9.57999 16.09 9.91999 15.75 10.33 15.75H13.66C14.07 15.75 14.41 16.09 14.41 16.5C14.41 16.91 14.07 17.25 13.66 17.25Z"
                          fill="#353535"
                        />
                        <path
                          d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"
                          fill="#353535"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="text-gray-500 w-full flex justify-between">
                  <span>{address.name}</span>
                  <p>{address.phoneNumber}</p>
                </div>
                {/* حذف کردن آدرس */}
                <PopUp
                  title="حذف"
                  handleClose={handleClosePopUpDelete}
                  isShow={isPopUpDelete}
                >
                  <div className="flex items-center p-6 flex-col gap-6 text-sm leading-6 md:text-base md:leading-7">
                    <p className="text-gray-500 text-base">
                      آیا آدرس حذف شود ؟
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={handleClosePopUpDelete}
                        className="text-primary py-2.5 w-[130px] border border-primary rounded-md"
                      >
                        خیر
                      </button>
                      <button
                        onClick={(e) =>
                          hadnleDeleteAddress(address.phoneNumber)
                        }
                        className="text-white py-2.5 w-[130px] bg-red-500 rounded-md"
                      >
                        بله
                      </button>
                    </div>
                  </div>
                </PopUp>
              </div>
            );
          })}
          <button
            onClick={handleShowPopUpAddress}
            className="border text-primary font-semibold text-sm md:text-base leading-6 md:leading-7 border-primary cols-span-1 rounded-md flex items-center justify-center hover:bg-green-100 duration-200 min-h-[106px] md:min-h-[110px]"
          >
            <FiPlus className="ml-1 text-2xl" />
            افزودن آدرس
          </button>
        </div>
      )}
      {/* افزودن ادرس */}
      <PopUp
        title="افزودن آدرس"
        handleClose={handleClosePopUpAddress}
        isShow={isPopUpAddress}
      >
        <div className="p-4 md:p-6 flex flex-col gap-2">
          <Input
            value={address.name}
            handleChange={handleChangeAddress}
            name="name"
            placeholder="نام و نام‌خانوادگی تحویل گیرندهم"
          />
          <Input
            value={address.phoneNumber}
            handleChange={handleChangeAddress}
            name="phoneNumber"
            placeholder="شماره همراه تحویل گیرنده"
          />
          <textarea
            value={address.address}
            name="address"
            onChange={(e) => handleChangeAddress(e)}
            className="min-h-[180px] w-full border rounded-md px-4 py-2 text-sm outline-none border-[#cbcbcb] focus:border-primary"
            placeholder="آدرس دقیق شما"
          ></textarea>
        </div>
        <div className="px-4 pb-4">
          <button
            onClick={() => {
              if (
                address.name.length > 0 &&
                address.phoneNumber.length > 0 &&
                address.address.length > 0
              ) {
                handleAddAddress(address);
              }
            }}
            className="w-full py-3 text-sm rounded-lg text-white bg-primary"
          >
            ثبت آدرس
          </button>
        </div>
      </PopUp>
    </article>
  );
};

export default MyAddresses;
