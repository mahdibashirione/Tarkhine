const InputOutline = ({ placeholder = "", type = "text" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="text-sm bg-transparent text-gray-300 border border-gray-300 
      py-3 px-4 w-full max-w-[275px] rounded-lg outline-none focus:border-primary"
    />
  );
};

export default InputOutline;
