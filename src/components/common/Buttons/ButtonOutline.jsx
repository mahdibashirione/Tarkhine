const ButtonOutline = (props) => {
  const {
    onClick=()=>{},
    disabled = false,
    className,
    title,
    type = "button",
  } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${className} ${
        disabled === true && "opacity-50"
      } rounded-lg leading-6 text-sm md:leading-7 duration-200 active:scale-95 text-primary border-primary md:text-base py-2 text-center border`}
    >
      {title}
    </button>
  );
};

export default ButtonOutline;
