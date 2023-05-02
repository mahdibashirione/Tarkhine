import { useEffect } from "react";
import { useState } from "react";
import PopUp from "../common/PopUp";
import RadioButton from "../common/Radio";
import SelectAddress from "./SelectAddress";

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

const ConfirmData = (props) => {
  const { handleRadio, order, handleAddress, handleDescription } = props;

  const [addresses, setAddresses] = useState([]);
  const [isPopUpAddress, setIsPopUpAddress] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    phoneNumber: "",
    address: "",
  });

  const handleChangeAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const localAddress = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(localAddress);
    addresses.length > 0 && handleAddress(addresses[0]);
  }, []);
  useEffect(() => {
    if (addresses.length > 0) {
      localStorage.setItem("addresses", JSON.stringify(addresses));
      handleAddress(addresses[0]);
    }
    addresses.length <= 0 && handleAddress(false);
  }, [addresses]);

  function handleClosePopUpAddress() {
    setIsPopUpAddress(false);
  }
  function handleShowPopUpAddress() {
    setIsPopUpAddress(true);
  }

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
      handleAddress(false);
    } else {
      localStorage.setItem("addresses", JSON.stringify(addresses));
    }
  };

  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-2 md:gap-4">
      {/* ارسال با پیک یا تحویل حضوری */}
      <div className="flex gap-y-5 border-[#cbcbcb] lg:px-8 flex-col md:flex-row items-center justify-between border rounded-lg py-8 px-4">
        <h2 className="border-[#cbcbcb] w-full md:w-auto pb-4 border-b-2 md:pb-0 md:border-none flex gap-1 items-center">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 15.25H2C1.59 15.25 1.25 14.91 1.25 14.5V6.5C1.25 3.88 3.38 1.75 6 1.75H15C15.41 1.75 15.75 2.09 15.75 2.5V12.5C15.75 14.02 14.52 15.25 13 15.25ZM2.75 13.75H13C13.69 13.75 14.25 13.19 14.25 12.5V3.25H6C4.21 3.25 2.75 4.71 2.75 6.5V13.75Z"
              fill="#353535"
            />
            <path
              d="M19 21.25H18C17.59 21.25 17.25 20.91 17.25 20.5C17.25 19.81 16.69 19.25 16 19.25C15.31 19.25 14.75 19.81 14.75 20.5C14.75 20.91 14.41 21.25 14 21.25H10C9.59 21.25 9.25 20.91 9.25 20.5C9.25 19.81 8.69 19.25 8 19.25C7.31 19.25 6.75 19.81 6.75 20.5C6.75 20.91 6.41 21.25 6 21.25H5C2.93 21.25 1.25 19.57 1.25 17.5V14.5C1.25 14.09 1.59 13.75 2 13.75H13C13.69 13.75 14.25 13.19 14.25 12.5V5.5C14.25 5.09 14.59 4.75 15 4.75H16.84C17.83 4.75 18.74 5.28001 19.23 6.14001L20.94 9.13C21.07 9.36 21.07 9.65 20.94 9.88C20.81 10.11 20.56 10.25 20.29 10.25H19C18.86 10.25 18.75 10.36 18.75 10.5V13.5C18.75 13.64 18.86 13.75 19 13.75H22C22.41 13.75 22.75 14.09 22.75 14.5V17.5C22.75 19.57 21.07 21.25 19 21.25ZM18.65 19.75H19C20.24 19.75 21.25 18.74 21.25 17.5V15.25H19C18.04 15.25 17.25 14.46 17.25 13.5V10.5C17.25 9.54 18.03 8.75 19 8.75L17.93 6.88C17.71 6.49 17.29 6.25 16.84 6.25H15.75V12.5C15.75 14.02 14.52 15.25 13 15.25H2.75V17.5C2.75 18.74 3.76 19.75 5 19.75H5.35001C5.68001 18.6 6.74 17.75 8 17.75C9.26 17.75 10.32 18.6 10.65 19.75H13.36C13.69 18.6 14.75 17.75 16.01 17.75C17.27 17.75 18.32 18.6 18.65 19.75Z"
              fill="#353535"
            />
            <path
              d="M8 23.25C6.48 23.25 5.25 22.02 5.25 20.5C5.25 18.98 6.48 17.75 8 17.75C9.52 17.75 10.75 18.98 10.75 20.5C10.75 22.02 9.52 23.25 8 23.25ZM8 19.25C7.31 19.25 6.75 19.81 6.75 20.5C6.75 21.19 7.31 21.75 8 21.75C8.69 21.75 9.25 21.19 9.25 20.5C9.25 19.81 8.69 19.25 8 19.25Z"
              fill="#353535"
            />
            <path
              d="M16 23.25C14.48 23.25 13.25 22.02 13.25 20.5C13.25 18.98 14.48 17.75 16 17.75C17.52 17.75 18.75 18.98 18.75 20.5C18.75 22.02 17.52 23.25 16 23.25ZM16 19.25C15.31 19.25 14.75 19.81 14.75 20.5C14.75 21.19 15.31 21.75 16 21.75C16.69 21.75 17.25 21.19 17.25 20.5C17.25 19.81 16.69 19.25 16 19.25Z"
              fill="#353535"
            />
            <path
              d="M22 15.25H19C18.04 15.25 17.25 14.46 17.25 13.5V10.5C17.25 9.54 18.04 8.75 19 8.75H20.29C20.56 8.75 20.81 8.89 20.94 9.13L22.65 12.13C22.71 12.24 22.75 12.37 22.75 12.5V14.5C22.75 14.91 22.41 15.25 22 15.25ZM19 10.25C18.86 10.25 18.75 10.36 18.75 10.5V13.5C18.75 13.64 18.86 13.75 19 13.75H21.25V12.7L19.85 10.25H19Z"
              fill="#353535"
            />
          </svg>
          روش تحویل سفارش
        </h2>
        <RadioButton
          handleChange={handleRadio}
          cheked={order.deliveryOrder === "پیک" ? true : false}
          value="پیک"
          name="deliveryOrder"
          id="pake"
          label="ارسال توسط پیک"
          description="توسط پیک رستوران ارسال شود."
          icon={
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9998 15.25H11.9998C11.5898 15.25 11.2498 14.91 11.2498 14.5C11.2498 14.09 11.5898 13.75 11.9998 13.75H12.9998C13.6898 13.75 14.2498 13.19 14.2498 12.5V3.25H5.99978C4.81978 3.25 3.73975 3.88998 3.15975 4.91998C2.95975 5.27998 2.49979 5.41002 2.13979 5.21002C1.77979 5.01002 1.64975 4.55 1.84975 4.19C2.68975 2.69 4.27978 1.75 5.99978 1.75H14.9998C15.4098 1.75 15.7498 2.09 15.7498 2.5V12.5C15.7498 14.02 14.5198 15.25 12.9998 15.25Z"
                fill="#717171"
              />
              <path
                d="M19 21.25H18C17.59 21.25 17.25 20.91 17.25 20.5C17.25 19.81 16.69 19.25 16 19.25C15.31 19.25 14.75 19.81 14.75 20.5C14.75 20.91 14.41 21.25 14 21.25H10C9.59 21.25 9.25 20.91 9.25 20.5C9.25 19.81 8.69 19.25 8 19.25C7.31 19.25 6.75 19.81 6.75 20.5C6.75 20.91 6.41 21.25 6 21.25H5C2.93 21.25 1.25 19.57 1.25 17.5C1.25 17.09 1.59 16.75 2 16.75C2.41 16.75 2.75 17.09 2.75 17.5C2.75 18.74 3.76 19.75 5 19.75H5.34998C5.67998 18.6 6.74 17.75 8 17.75C9.26 17.75 10.32 18.6 10.65 19.75H13.36C13.69 18.6 14.75 17.75 16.01 17.75C17.27 17.75 18.33 18.6 18.66 19.75H19C20.24 19.75 21.25 18.74 21.25 17.5V15.25H19C18.04 15.25 17.25 14.46 17.25 13.5V10.5C17.25 9.54 18.03 8.75 19 8.75L17.93 6.88C17.71 6.49 17.29 6.25 16.84 6.25H15.75V12.5C15.75 14.02 14.52 15.25 13 15.25H12C11.59 15.25 11.25 14.91 11.25 14.5C11.25 14.09 11.59 13.75 12 13.75H13C13.69 13.75 14.25 13.19 14.25 12.5V5.5C14.25 5.09 14.59 4.75 15 4.75H16.84C17.83 4.75 18.74 5.28001 19.23 6.14001L20.94 9.13C21.07 9.36 21.07 9.65 20.94 9.88C20.81 10.11 20.56 10.25 20.29 10.25H19C18.86 10.25 18.75 10.36 18.75 10.5V13.5C18.75 13.64 18.86 13.75 19 13.75H22C22.41 13.75 22.75 14.09 22.75 14.5V17.5C22.75 19.57 21.07 21.25 19 21.25Z"
                fill="#717171"
              />
              <path
                d="M8 23.25C6.48 23.25 5.25 22.02 5.25 20.5C5.25 18.98 6.48 17.75 8 17.75C9.52 17.75 10.75 18.98 10.75 20.5C10.75 22.02 9.52 23.25 8 23.25ZM8 19.25C7.31 19.25 6.75 19.81 6.75 20.5C6.75 21.19 7.31 21.75 8 21.75C8.69 21.75 9.25 21.19 9.25 20.5C9.25 19.81 8.69 19.25 8 19.25Z"
                fill="#717171"
              />
              <path
                d="M16 23.25C14.48 23.25 13.25 22.02 13.25 20.5C13.25 18.98 14.48 17.75 16 17.75C17.52 17.75 18.75 18.98 18.75 20.5C18.75 22.02 17.52 23.25 16 23.25ZM16 19.25C15.31 19.25 14.75 19.81 14.75 20.5C14.75 21.19 15.31 21.75 16 21.75C16.69 21.75 17.25 21.19 17.25 20.5C17.25 19.81 16.69 19.25 16 19.25Z"
                fill="#717171"
              />
              <path
                d="M22 15.25H19C18.04 15.25 17.25 14.46 17.25 13.5V10.5C17.25 9.54 18.04 8.75 19 8.75H20.29C20.56 8.75 20.81 8.89 20.94 9.13L22.65 12.13C22.71 12.24 22.75 12.37 22.75 12.5V14.5C22.75 14.91 22.41 15.25 22 15.25ZM19 10.25C18.86 10.25 18.75 10.36 18.75 10.5V13.5C18.75 13.64 18.86 13.75 19 13.75H21.25V12.7L19.85 10.25H19Z"
                fill="#717171"
              />
              <path
                d="M8 9.25H2C1.59 9.25 1.25 8.91 1.25 8.5C1.25 8.09 1.59 7.75 2 7.75H8C8.41 7.75 8.75 8.09 8.75 8.5C8.75 8.91 8.41 9.25 8 9.25Z"
                fill="#717171"
              />
              <path
                d="M6 12.25H2C1.59 12.25 1.25 11.91 1.25 11.5C1.25 11.09 1.59 10.75 2 10.75H6C6.41 10.75 6.75 11.09 6.75 11.5C6.75 11.91 6.41 12.25 6 12.25Z"
                fill="#717171"
              />
              <path
                d="M4 15.25H2C1.59 15.25 1.25 14.91 1.25 14.5C1.25 14.09 1.59 13.75 2 13.75H4C4.41 13.75 4.75 14.09 4.75 14.5C4.75 14.91 4.41 15.25 4 15.25Z"
                fill="#717171"
              />
            </svg>
          }
        />
        <RadioButton
          handleChange={handleRadio}
          cheked={order.deliveryOrder === "حضوری" ? true : false}
          value="حضوری"
          name="deliveryOrder"
          id="hozori"
          label="تحویل حضوری"
          description="خودتان از شعبه تحویل بگیرید."
          icon={
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9899 23.25H7.99993C6.27993 23.25 4.98994 22.79 4.18994 21.88C3.38994 20.97 3.07993 19.65 3.28993 17.94L4.18994 10.44C4.44994 8.23 5.00994 6.25 8.90994 6.25H16.1099C19.9999 6.25 20.5599 8.23 20.8299 10.44L21.7299 17.94C21.9299 19.65 21.6299 20.98 20.8299 21.88C19.9999 22.79 18.7199 23.25 16.9899 23.25ZM8.89993 7.75C6.01993 7.75 5.87993 8.88999 5.66993 10.61L4.76994 18.11C4.61994 19.38 4.79993 20.31 5.30993 20.88C5.81993 21.45 6.71993 21.74 7.99993 21.74H16.9899C18.2699 21.74 19.1699 21.45 19.6799 20.88C20.1899 20.31 20.3699 19.38 20.2199 18.11L19.3199 10.61C19.1099 8.87999 18.9799 7.75 16.0899 7.75H8.89993Z"
                fill="#717171"
              />
              <path
                d="M16.5 9.25C16.09 9.25 15.75 8.91 15.75 8.5V5C15.75 3.92 15.08 3.25 14 3.25H11C9.92 3.25 9.25 3.92 9.25 5V8.5C9.25 8.91 8.91 9.25 8.5 9.25C8.09 9.25 7.75 8.91 7.75 8.5V5C7.75 3.09 9.09 1.75 11 1.75H14C15.91 1.75 17.25 3.09 17.25 5V8.5C17.25 8.91 16.91 9.25 16.5 9.25Z"
                fill="#717171"
              />
              <path
                d="M20.91 18.28H8.5C8.09 18.28 7.75 17.94 7.75 17.53C7.75 17.12 8.09 16.78 8.5 16.78H20.91C21.32 16.78 21.66 17.12 21.66 17.53C21.66 17.94 21.32 18.28 20.91 18.28Z"
                fill="#717171"
              />
            </svg>
          }
        />
      </div>
      {/* لیست آدرس ها */}
      {order.deliveryOrder === "پیک" && (
        <div className="px-4 py-6 border rounded-lg border-[#cbcbcb]">
          {/* افزودن ادرس */}
          <div className="w-full text-sm pb-4 border-[#cbcbcb] border-b-2 flex items-center justify-between md:text-base lg:text-lg">
            <h2 className="flex items-center gap-1">
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 14.67C9.87 14.67 8.13 12.94 8.13 10.8C8.13 8.66 9.87 6.94 12 6.94C14.13 6.94 15.87 8.67 15.87 10.81C15.87 12.95 14.13 14.67 12 14.67ZM12 8.44C10.7 8.44 9.63 9.5 9.63 10.81C9.63 12.12 10.69 13.18 12 13.18C13.31 13.18 14.37 12.12 14.37 10.81C14.37 9.5 13.3 8.44 12 8.44Z"
                  fill="#353535"
                />
                <path
                  d="M12 23.26C10.52 23.26 9.02999 22.7 7.86999 21.59C4.91999 18.75 1.65999 14.22 2.88999 8.83C3.99999 3.94 8.26999 1.75 12 1.75C12 1.75 12 1.75 12.01 1.75C15.74 1.75 20.01 3.94 21.12 8.84C22.34 14.23 19.08 18.75 16.13 21.59C14.97 22.7 13.48 23.26 12 23.26ZM12 3.25C9.08999 3.25 5.34999 4.8 4.35999 9.16C3.27999 13.87 6.23999 17.93 8.91999 20.5C10.65 22.17 13.36 22.17 15.09 20.5C17.76 17.93 20.72 13.87 19.66 9.16C18.66 4.8 14.91 3.25 12 3.25Z"
                  fill="#353535"
                />
              </svg>
              آدرس ها
            </h2>
            <button
              onClick={handleShowPopUpAddress}
              className="text-primary flex items-center gap-1"
            >
              <svg
                className="w-7 h-7 md:w-8 md:h-8"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.24612 16.3813C3.45069 13.5859 3.45069 9.04156 6.24612 6.24613C9.04155 3.4507 13.5859 3.4507 16.3813 6.24613C19.1767 9.04156 19.1767 13.5859 16.3813 16.3813C13.5859 19.1768 9.04155 19.1768 6.24612 16.3813ZM15.6742 6.95323C13.27 4.54907 9.35739 4.54907 6.95323 6.95323C4.54907 9.3574 4.54907 13.2701 6.95323 15.6742C9.35739 18.0784 13.27 18.0784 15.6742 15.6742C18.0784 13.2701 18.0784 9.3574 15.6742 6.95323Z"
                  fill="#417F56"
                />
                <path
                  d="M8.29202 11.6672C8.20245 11.5777 8.14588 11.4551 8.14588 11.3137C8.14588 11.0403 8.37216 10.814 8.64557 10.814H13.9819C14.2553 10.814 14.4816 11.0403 14.4816 11.3137C14.4816 11.5871 14.2553 11.8134 13.9819 11.8134H8.64557C8.50886 11.8181 8.38158 11.7568 8.29202 11.6672Z"
                  fill="#417F56"
                />
                <path
                  d="M10.9602 14.3354C10.8706 14.2458 10.814 14.1233 10.814 13.9818L10.814 8.64555C10.814 8.37213 11.0403 8.14586 11.3137 8.14586C11.5871 8.14586 11.8134 8.37213 11.8134 8.64555L11.8134 13.9818C11.8134 14.2553 11.5871 14.4815 11.3137 14.4815C11.1723 14.4815 11.0497 14.425 10.9602 14.3354Z"
                  fill="#417F56"
                />
              </svg>
              افزودن آدرس
            </button>
          </div>
          {/* نمایش ادرسی وجود ندارد */}
          {addresses.length <= 0 && (
            <div className="w-full bg-no-repeat mt-6 py-[66px] bg-contain bg-center bg-[url('/images/EmptyPage.png')]">
              <h3 className="text-sm text-gray-500 text-center md:text-base">
                شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
              </h3>
            </div>
          )}
          {/* انتخاب ادرس */}
          {addresses.length > 0 && (
            <div className="w-full items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
              {addresses.map((address, i) => {
                return (
                  <SelectAddress
                    key={i}
                    handleSelect={handleAddress}
                    addressSelect={order.addressUser}
                    address={address}
                    handleDelete={hadnleDeleteAddress}
                  />
                );
              })}
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
        </div>
      )}
      {/* ادرس حضوری */}
      {order.deliveryOrder === "حضوری" && (
        <div className=" w-full p-4 md:py-8 gap-2 border flex border-[#cbcbcb] rounded-lg">
          <div className="flex-1 flex gap-4 flex-col h-full justify-between">
            <h2 className="font-semibold md:pb-0 md:border-none flex gap-1 items-center text-sm md:text-base lg:text-lg pb-4 border-b-2">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 14.67C9.86988 14.67 8.12988 12.94 8.12988 10.8C8.12988 8.66 9.86988 6.94 11.9999 6.94C14.1299 6.94 15.8699 8.67 15.8699 10.81C15.8699 12.95 14.1299 14.67 11.9999 14.67ZM11.9999 8.44C10.6999 8.44 9.62988 9.5 9.62988 10.81C9.62988 12.12 10.6899 13.18 11.9999 13.18C13.3099 13.18 14.3699 12.12 14.3699 10.81C14.3699 9.5 13.2999 8.44 11.9999 8.44Z"
                  fill="#353535"
                />
                <path
                  d="M11.9999 23.26C10.5199 23.26 9.02993 22.7 7.86993 21.59C4.91993 18.75 1.65993 14.22 2.88993 8.83C3.99993 3.94 8.26993 1.75 11.9999 1.75C11.9999 1.75 11.9999 1.75 12.0099 1.75C15.7399 1.75 20.0099 3.94 21.1199 8.84C22.3399 14.23 19.0799 18.75 16.1299 21.59C14.9699 22.7 13.4799 23.26 11.9999 23.26ZM11.9999 3.25C9.08993 3.25 5.34993 4.8 4.35993 9.16C3.27993 13.87 6.23993 17.93 8.91993 20.5C10.6499 22.17 13.3599 22.17 15.0899 20.5C17.7599 17.93 20.7199 13.87 19.6599 9.16C18.6599 4.8 14.9099 3.25 11.9999 3.25Z"
                  fill="#353535"
                />
              </svg>
              آدرس شعبه اکباتان
            </h2>
            <div className="text-[12px] md:text-sm text-gray-500">
              <p>اکباتان، خیابان ریاحی، کوچه سیزدهم، ساختمان آیسا، طبقه همکف</p>
              <p>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</p>
              <p>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </p>
              <p className="mt-1">
                ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
              </p>
            </div>
            <button className="hidden md:block text-gray-500 py-2.5 px-6 text-sm md:text-base mx-auto rounded-md border border-[#cbcbcb]">
              مشاهده در نقشه
            </button>
          </div>
          <div className="hidden md:block">
            <img className="w-full object-cover" src="/map.svg" alt="map" />
          </div>
        </div>
      )}
      {/* توضیاحات سفارش */}
      <div className="w-full flex gap-1 border border-[#cbcbcb] rounded-lg p-4">
        <svg
          className="w-5 h-5 md:w-6 md:h-6 "
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 6.75H10C9.04 6.75 7.25 6.75 7.25 4C7.25 1.25 9.04 1.25 10 1.25H14C14.96 1.25 16.75 1.25 16.75 4C16.75 4.96 16.75 6.75 14 6.75ZM10 2.75C9.01 2.75 8.75 2.75 8.75 4C8.75 5.25 9.01 5.25 10 5.25H14C15.25 5.25 15.25 4.99 15.25 4C15.25 2.75 14.99 2.75 14 2.75H10Z"
            fill="#353535"
          />
          <path
            d="M15 22.7501H9C3.38 22.7501 2.25 20.1701 2.25 16.0001V10.0001C2.25 5.44005 3.9 3.49005 7.96 3.28005C8.37 3.26005 8.73 3.57005 8.75 3.99005C8.77 4.41005 8.45 4.75005 8.04 4.77005C5.2 4.93005 3.75 5.78005 3.75 10.0001V16.0001C3.75 19.7001 4.48 21.2501 9 21.2501H15C19.52 21.2501 20.25 19.7001 20.25 16.0001V10.0001C20.25 5.78005 18.8 4.93005 15.96 4.77005C15.55 4.75005 15.23 4.39005 15.25 3.98005C15.27 3.57005 15.63 3.25005 16.04 3.27005C20.1 3.49005 21.75 5.44005 21.75 9.99005V15.9901C21.75 20.1701 20.62 22.7501 15 22.7501Z"
            fill="#353535"
          />
        </svg>
        <textarea
          onChange={(e) => handleDescription(e.target.value)}
          className="outline-none border-none w-full h-52 resize-none text-sm md:text-base"
          placeholder="توضیحات سفارش (اختیاری)"
        ></textarea>
      </div>
    </div>
  );
};

export default ConfirmData;
