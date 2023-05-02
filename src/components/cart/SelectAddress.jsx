const SelectAddress = ({
  address,
  handleDelete,
  handleSelect,
  addressSelect,
}) => {
  return (
    <div onClick={() => handleSelect(address)} className="relative col-span-1">
      <div
        className={`${
          addressSelect && addressSelect.phoneNumber === address.phoneNumber
            ? "border-blue-500"
            : "border-[#cbcbcb]"
        } w-full p-4 md:p-5 max-w-[320px] h-full justify-between flex flex-col bg-gray-100 cursor-pointer border-4 rounded-xl`}
      >
        <div className="w-full text-sm flex justify-between items-start">
          <p className="line-clamp-2">{address.address}</p>
          <button onClick={() => handleDelete(address.phoneNumber)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 6.72998C20.98 6.72998 20.95 6.72998 20.92 6.72998C15.63 6.19998 10.35 5.99998 5.12 6.52998L3.08 6.72998C2.66 6.76998 2.29 6.46998 2.25 6.04998C2.21 5.62998 2.51 5.26998 2.92 5.22998L4.96 5.02998C10.28 4.48998 15.67 4.69998 21.07 5.22998C21.48 5.26998 21.78 5.63998 21.74 6.04998C21.71 6.43998 21.38 6.72998 21 6.72998Z"
                fill="#353535"
              />
              <path
                d="M8.5 5.72C8.46 5.72 8.42 5.72 8.37 5.71C7.97 5.64 7.69 5.25 7.76 4.85L7.98 3.54C8.14 2.58 8.36 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64 2.76 9.62 2.9 9.47 3.79L9.24 5.09C9.18 5.46 8.86 5.72 8.5 5.72Z"
                fill="#353535"
              />
              <path
                d="M15.21 22.7501H8.79C5.3 22.7501 5.16 20.8201 5.05 19.2601L4.4 9.19007C4.37 8.78007 4.69 8.42008 5.1 8.39008C5.52 8.37008 5.87 8.68008 5.9 9.09008L6.55 19.1601C6.66 20.6801 6.7 21.2501 8.79 21.2501H15.21C17.31 21.2501 17.35 20.6801 17.45 19.1601L18.1 9.09008C18.13 8.68008 18.49 8.37008 18.9 8.39008C19.31 8.42008 19.63 8.77007 19.6 9.19007L18.95 19.2601C18.84 20.8201 18.7 22.7501 15.21 22.7501Z"
                fill="#353535"
              />
              <path
                d="M13.66 17.25H10.33C9.92 17.25 9.58 16.91 9.58 16.5C9.58 16.09 9.92 15.75 10.33 15.75H13.66C14.07 15.75 14.41 16.09 14.41 16.5C14.41 16.91 14.07 17.25 13.66 17.25Z"
                fill="#353535"
              />
              <path
                d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"
                fill="#353535"
              />
            </svg>
          </button>
        </div>
        <div className="w-full gap-4 mt-2 text-[12px] text-gray-500 flex justify-between items-center">
          <p className="line-clamp-1">{address.name}</p>
          <span className="min-w-fit">{address.phoneNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
