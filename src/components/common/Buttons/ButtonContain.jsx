const ButtonContain = (props) => {
  const {
    onClick = "",
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
      } rounded-lg leading-6 text-sm md:leading-7 duration-200 active:scale-95 text-white bg-primary md:text-base py-2 text-center`}
    >
      {title}
    </button>
  );
};

export default ButtonContain;
