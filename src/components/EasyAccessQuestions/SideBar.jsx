import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const { pathname } = useLocation();

  const options = [
    { id: 1, title: "سوالات متداول", url: "/easyaccess/questions" },
    { id: 2, title: "قوانین ترخینه", url: "/easyaccess/rules-of-tarkhine" },
    { id: 3, title: "حریم خصوصی", url: "/easyaccess/privacy" },
  ];

  return (
    <div className="w-full bg-[#ededed]">
      <div className="container flex gap-4 px-4 py-2 text-gray-500 md:gap-8 text-sm leading-[21.5px] md:text-base md:leading-7 lg:text-xl lg:leading-9">
        {options.map((item) => {
          return (
            <Link
              className={`${
                pathname == item.url
                  ? "border-primary text-primary"
                  : " border-transparent"
              } border-b-2 py-2`}
              key={item.id}
              to={item.url}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
