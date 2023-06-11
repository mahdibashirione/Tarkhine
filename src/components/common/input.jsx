import { useState } from "react";
import { useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const InputCustom = ({
  type = "text",
  label,
  formik,
  name,
  inputMode = "decimal",
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
    <div className="relative rounded-lg col-span-1 mb-6">
      <input
        inputMode={inputMode}
        ref={inputRef}
        className={`px-4 border border-[#cbcbcb] leading-7 w-full peer outline-none bg-white duration-200 focus:border-blue-500 rounded-lg h-10 overflow-hidden ring-blue-200 focus:ring-4 ${
          formik.touched[name] && formik.errors[name] && "border-red-500"
        }`}
        id={label}
        name={name}
        type={type}
        {...formik.getFieldProps(name)}
        placeholder={label}
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
        <p className="text-[12px] absolute -bottom-[22px] right-0 leading-6 text-red-500">
          {formik.errors[name]}
        </p>
      ) : null}
    </div>
  );
};

export default InputCustom;
