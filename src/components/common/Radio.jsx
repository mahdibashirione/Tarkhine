const RadioButton = ({
  icon,
  label,
  description,
  handleChange,
  name,
  id,
  value,
  cheked,
}) => {
  return (
    <div className="flex w-full md:w-auto items-center gap-2">
      <div>
        <div className="flex items-center gap-2">
          <input
            defaultChecked={cheked}
            onChange={() => handleChange(name, value)}
            className="checked:accent-[#417F56] focus:ring-0  cursor-pointer"
            type="radio"
            name={name}
            id={id}
          />
          <label className="cursor-pointer" htmlFor={id}>
            {label}
          </label>
        </div>
        <span className="text-[12px] mr-5 text-gray-500">{description}</span>
      </div>
      {icon}
    </div>
  );
};

export default RadioButton;
