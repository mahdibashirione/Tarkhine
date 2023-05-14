const InputCustom = ({ type = "text", label, formik, name }) => {
  return (
    <div
      className={`${
        formik.touched[name] && formik.errors[name] && "border-red-500"
      } relative px-4 border rounded col-span-1 border-[#cbcbcb] mb-8`}
    >
      <input
        className={`leading-7 w-full peer border-none outline-none h-10`}
        id={label}
        name={name}
        type={type}
        {...formik.getFieldProps(name)}
      />
      <label
        htmlFor={label}
        className={`${
          formik.values[name]
            ? "-top-3 translate-y-0 text-sm text-slate-800"
            : "top-1/2"
        } text-gray-500 peer-focus:text-slate-800 absolute right-2 -translate-y-1/2 peer-focus:-top-3 peer-focus:text-sm peer-focus:right-2 peer-focus:translate-y-0 px-2 bg-white duration-200`}
      >
        {label}
      </label>
      {formik.touched[name] && formik.errors[name] ? (
        <p className="text-[12px] absolute -bottom-6 right-0 leading-6 text-red-500">
          {formik.errors[name]}
        </p>
      ) : null}
    </div>
  );
};

export default InputCustom;
