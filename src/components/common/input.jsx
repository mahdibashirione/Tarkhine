import { useState } from "react";
import { useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const InputCustom = ({
  type = "text",
  label,
  formik,
  name,
  inputMode = "numeric",
}) => {
  const [typePassword, setTypePassword] = useState("passsword");
  const inputRef = useRef();

  const handleEyePassword = (nameEye) => {
    if (nameEye === "Eye") {
      inputRef.current.type = "password";
      setTypePassword("password");
    } else {
      inputRef.current.type = "text";
      setTypePassword("text");
    }
  };

  return (
    <div
      className={`${
        formik.touched[name] && formik.errors[name]
          ? "border-red-500 mb-8"
          : "mb-4"
      } relative rounded-lg col-span-1 `}
    >
      <label
        htmlFor={label}
        className={`${
          formik.values[name]
            ? "-top-[11px] rounded translate-y-0 text-[12px] text-slate-800 bg-white"
            : "top-1/2 bg-transparent"
        } leading-3 z-10 text-gray-500 peer-focus:text-slate-800 absolute right-2 -translate-y-1/2 peer-focus:-top-[11px] peer-focus:text-[12px] peer-focus:right-2 peer-focus:translate-y-0 px-2 duration-200`}
      >
        {label}
      </label>
      <input
        inputMode={inputMode}
        ref={inputRef}
        className={`px-4 border border-[#cbcbcb] leading-7 w-full peer outline-none bg-white duration-200 focus:border-sky-500 rounded-lg h-10`}
        id={label}
        name={name}
        type={type}
        {...formik.getFieldProps(name)}
      />
      {type === "password" && (
        <div className="text-gray-500 absolute flex text-xl items-center left-3 top-1/2 -translate-y-1/2">
          {typePassword === "text" ? (
            <FiEye
              className="cursor-pointer"
              onClick={(e) => handleEyePassword("Eye")}
            />
          ) : (
            <FiEyeOff
              className="cursor-pointer"
              onClick={(e) => handleEyePassword("EyeOff")}
            />
          )}
        </div>
      )}
      {formik.touched[name] && formik.errors[name] ? (
        <p className="text-[12px] absolute -bottom-6 right-0 leading-6 text-red-500">
          {formik.errors[name]}
        </p>
      ) : null}
    </div>
  );
};

export default InputCustom;
