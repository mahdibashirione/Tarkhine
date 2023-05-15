const Badg = ({ type = "success", title }) => {
  return (
    <span
      className={`text-[12px] px-2 leading-6 md:leading-7 md:text-base rounded ${
        type === "success" && "bg-green-200 text-primary"
      }
        ${type === "warning" && "bg-orange-100 text-orange-500"}
        ${type === "error" && "bg-red-200 text-red-500"}
        `}
    >
      {title}
    </span>
  );
};

export default Badg;
