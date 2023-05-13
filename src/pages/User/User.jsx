import { Link, Route, Routes, useLocation } from "react-router-dom";

const User = () => {
  const { pathname } = useLocation();

  const options = [
    {
      title: "پروفایل",
      url: "/user",
      icon: (
        <svg
          width="24"
          height="24"
          className="duration-200"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00033 8.50001C5.88699 8.50001 4.16699 6.78001 4.16699 4.66668C4.16699 2.55334 5.88699 0.833344 8.00033 0.833344C10.1137 0.833344 11.8337 2.55334 11.8337 4.66668C11.8337 6.78001 10.1137 8.50001 8.00033 8.50001ZM8.00033 1.83334C6.44033 1.83334 5.16699 3.10668 5.16699 4.66668C5.16699 6.22668 6.44033 7.50001 8.00033 7.50001C9.56033 7.50001 10.8337 6.22668 10.8337 4.66668C10.8337 3.10668 9.56033 1.83334 8.00033 1.83334Z"
            fill={`${pathname === "/user" ? "#417F56" : "#353535"}`}
          />
          <path
            d="M13.7268 15.1667C13.4534 15.1667 13.2268 14.94 13.2268 14.6667C13.2268 12.3667 10.8801 10.5 8.0001 10.5C5.1201 10.5 2.77344 12.3667 2.77344 14.6667C2.77344 14.94 2.54677 15.1667 2.27344 15.1667C2.0001 15.1667 1.77344 14.94 1.77344 14.6667C1.77344 11.82 4.56677 9.5 8.0001 9.5C11.4334 9.5 14.2268 11.82 14.2268 14.6667C14.2268 14.94 14.0001 15.1667 13.7268 15.1667Z"
            fill={`${pathname === "/user" ? "#417F56" : "#353535"}`}
          />
        </svg>
      ),
    },
    {
      title: "پیگیری سفارشات",
      url: "/user/track-orders",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.66602 6.5H4.66602C4.39268 6.5 4.16602 6.27333 4.16602 6C4.16602 5.72667 4.39268 5.5 4.66602 5.5H8.66602C8.93935 5.5 9.16602 5.72667 9.16602 6C9.16602 6.27333 8.93935 6.5 8.66602 6.5Z"
            fill={`${
              pathname === "/user/track-orders" ? "#417F56" : "#353535"
            }`}
          />
          <path
            d="M12.6926 9.86662C11.6859 9.86662 10.8326 9.11995 10.7526 8.15995C10.6993 7.60662 10.8993 7.06663 11.2993 6.6733C11.6326 6.32663 12.1059 6.1333 12.6059 6.1333H13.9993C14.6593 6.1533 15.166 6.67327 15.166 7.31327V8.68665C15.166 9.32665 14.6593 9.84662 14.0193 9.86662H12.6926ZM13.9793 7.1333H12.6126C12.3793 7.1333 12.166 7.21996 12.0126 7.37996C11.8193 7.56663 11.726 7.81995 11.7526 8.07328C11.786 8.51328 12.2126 8.86662 12.6926 8.86662H13.9993C14.086 8.86662 14.166 8.78665 14.166 8.68665V7.31327C14.166 7.21327 14.0859 7.13997 13.9793 7.1333Z"
            fill={`${
              pathname === "/user/track-orders" ? "#417F56" : "#353535"
            }`}
          />
          <path
            d="M10.6673 14.1666H4.66732C2.37398 14.1666 0.833984 12.6266 0.833984 10.3333V5.66665C0.833984 3.61331 2.10063 2.12665 4.0673 1.87998C4.2473 1.85332 4.45398 1.83331 4.66732 1.83331H10.6673C10.8273 1.83331 11.034 1.83998 11.2473 1.87331C13.214 2.09998 14.5007 3.59331 14.5007 5.66665V6.63332C14.5007 6.90665 14.274 7.13332 14.0007 7.13332H12.614C12.3806 7.13332 12.1673 7.21998 12.014 7.37998L12.0073 7.38666C11.8207 7.56666 11.734 7.8133 11.754 8.06663C11.7873 8.50663 12.214 8.85997 12.694 8.85997H14.0007C14.274 8.85997 14.5007 9.08663 14.5007 9.35997V10.3266C14.5007 12.6266 12.9607 14.1666 10.6673 14.1666ZM4.66732 2.83331C4.50732 2.83331 4.35398 2.84664 4.20064 2.86664C2.73398 3.0533 1.83398 4.11998 1.83398 5.66665V10.3333C1.83398 12.0533 2.94732 13.1666 4.66732 13.1666H10.6673C12.3873 13.1666 13.5007 12.0533 13.5007 10.3333V9.86664H12.694C11.6873 9.86664 10.834 9.11997 10.754 8.15997C10.7007 7.61331 10.9007 7.06666 11.3007 6.67999C11.6473 6.32666 12.114 6.13332 12.614 6.13332H13.5007V5.66665C13.5007 4.10665 12.5873 3.0333 11.1073 2.85997C10.9473 2.8333 10.8073 2.83331 10.6673 2.83331H4.66732V2.83331Z"
            fill={`${
              pathname === "/user/track-orders" ? "#417F56" : "#353535"
            }`}
          />
        </svg>
      ),
    },
    {
      title: "علاقه مندی ها",
      url: "/user/favorites",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00065 14.4333C7.79398 14.4333 7.59398 14.4066 7.42732 14.3466C4.88065 13.4733 0.833984 10.3733 0.833984 5.79332C0.833984 3.45998 2.72065 1.56665 5.04065 1.56665C6.16732 1.56665 7.22065 2.00665 8.00065 2.79332C8.78065 2.00665 9.83398 1.56665 10.9607 1.56665C13.2807 1.56665 15.1673 3.46665 15.1673 5.79332C15.1673 10.38 11.1207 13.4733 8.57398 14.3466C8.40732 14.4066 8.20732 14.4333 8.00065 14.4333ZM5.04065 2.56665C3.27398 2.56665 1.83398 4.01332 1.83398 5.79332C1.83398 10.3466 6.21398 12.88 7.75398 13.4066C7.87398 13.4466 8.13398 13.4466 8.25398 13.4066C9.78732 12.88 14.174 10.3533 14.174 5.79332C14.174 4.01332 12.734 2.56665 10.9673 2.56665C9.95399 2.56665 9.01398 3.03998 8.40732 3.85998C8.22065 4.11332 7.79398 4.11332 7.60732 3.85998C6.98732 3.03332 6.05398 2.56665 5.04065 2.56665Z"
            fill={`${pathname === "/user/favorites" ? "#417F56" : "#353535"}`}
          />
        </svg>
      ),
    },
    {
      title: "آدرس های من",
      url: "/user/my-addresses",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99992 9.44667C6.57992 9.44667 5.41992 8.29333 5.41992 6.86667C5.41992 5.44 6.57992 4.29333 7.99992 4.29333C9.41992 4.29333 10.5799 5.44667 10.5799 6.87334C10.5799 8.3 9.41992 9.44667 7.99992 9.44667ZM7.99992 5.29333C7.13326 5.29333 6.41992 6 6.41992 6.87334C6.41992 7.74667 7.12659 8.45333 7.99992 8.45333C8.87326 8.45333 9.57992 7.74667 9.57992 6.87334C9.57992 6 8.86659 5.29333 7.99992 5.29333Z"
            fill={`${
              pathname === "/user/my-addresses" ? "#417F56" : "#353535"
            }`}
          />
          <path
            d="M7.99914 15.1733C7.01247 15.1733 6.01914 14.8 5.24581 14.06C3.27914 12.1666 1.10581 9.14665 1.92581 5.55331C2.66581 2.29331 5.51247 0.833313 7.99914 0.833313C7.99914 0.833313 7.99914 0.833313 8.00581 0.833313C10.4925 0.833313 13.3391 2.29331 14.0791 5.55998C14.8925 9.15331 12.7191 12.1666 10.7525 14.06C9.97914 14.8 8.98581 15.1733 7.99914 15.1733ZM7.99914 1.83331C6.05914 1.83331 3.56581 2.86665 2.90581 5.77331C2.18581 8.91331 4.15914 11.62 5.94581 13.3333C7.09914 14.4466 8.90581 14.4466 10.0591 13.3333C11.8391 11.62 13.8125 8.91331 13.1058 5.77331C12.4391 2.86665 9.93914 1.83331 7.99914 1.83331Z"
            fill={`${
              pathname === "/user/my-addresses" ? "#417F56" : "#353535"
            }`}
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full flex flex-col md:flex-row container p-4 gap-4">
      <article className="w-full select-none md:w-1/3 p-4 rounded-lg border border-[#cbcbcb]">
        <div className="flex items-end gap-6 w-full pb-2 border-b border-[#757575]">
          <div className="w-[88px] h-[88px] rounded-full bg-gray-200"></div>
          <div className="flex flex-col mb-2">
            <span className="leading-7 font-semibold line-clamp-1 text-lg mb-1">
              کاربر ترخینه
            </span>
            <p className="text-sm leading-6 text-gray-500">0930-456-7789</p>
          </div>
        </div>
        <ul className="w-full flex py-2 flex-col gap-2">
          {options.map((link, i) => {
            return (
              <li key={i}>
                <Link
                  to={link.url}
                  className={`${
                    pathname === link.url
                      ? "text-primary border-primary"
                      : "border-transparent text-[#353535]"
                  } flex items-center gap-2 py-1 text-lg px-2 leading-[29px] border-r-2`}
                >
                  {link.icon}
                  {link.title}
                </Link>
              </li>
            );
          })}
          {/* خروج از حساب */}
          <li>
            <button
              className={`text-red-500 flex items-center gap-2 py-1 text-lg px-2 leading-[29px] mr-1`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1597 14.8467H10.073C7.11302 14.8467 5.68635 13.68 5.43968 11.0667C5.41302 10.7933 5.61302 10.5467 5.89302 10.52C6.15968 10.4933 6.41302 10.7 6.43968 10.9733C6.63302 13.0667 7.61968 13.8467 10.0797 13.8467H10.1664C12.8797 13.8467 13.8397 12.8867 13.8397 10.1733V5.82665C13.8397 3.11332 12.8797 2.15332 10.1664 2.15332H10.0797C7.60635 2.15332 6.61968 2.94665 6.43968 5.07999C6.40635 5.35332 6.17302 5.55999 5.89302 5.53332C5.61302 5.51332 5.41302 5.26665 5.43302 4.99332C5.65968 2.33999 7.09302 1.15332 10.073 1.15332H10.1597C13.433 1.15332 14.833 2.55332 14.833 5.82665V10.1733C14.833 13.4467 13.433 14.8467 10.1597 14.8467Z"
                  fill="#ef4444"
                />
                <path
                  d="M9.99975 8.5H2.41309C2.13975 8.5 1.91309 8.27333 1.91309 8C1.91309 7.72667 2.13975 7.5 2.41309 7.5H9.99975C10.2731 7.5 10.4998 7.72667 10.4998 8C10.4998 8.27333 10.2731 8.5 9.99975 8.5Z"
                  fill="#ef4444"
                />
                <path
                  d="M3.89964 10.7336C3.77297 10.7336 3.6463 10.6869 3.5463 10.5869L1.31297 8.35356C1.11964 8.16022 1.11964 7.84022 1.31297 7.64689L3.5463 5.41355C3.73964 5.22022 4.05964 5.22022 4.25297 5.41355C4.4463 5.60689 4.4463 5.92689 4.25297 6.12022L2.37297 8.00022L4.25297 9.88022C4.4463 10.0736 4.4463 10.3936 4.25297 10.5869C4.15964 10.6869 4.0263 10.7336 3.89964 10.7336Z"
                  fill="#ef4444"
                />
              </svg>
              خروج
            </button>
          </li>
        </ul>
      </article>

      <Routes>
        <Route
          path="/"
          element={
            <article className="flex-1 border-[#cbcbcb] border p-4 rounded-lg"></article>
          }
        />
      </Routes>
    </section>
  );
};

export default User;
