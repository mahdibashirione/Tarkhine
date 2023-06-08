const CardItem = () => {
  return (
    <div className="col-span-1 mx-auto w-full max-w-[256px] rounded-xl p-2 bg-gray-200 animate-pulse duration-200">
      <span className="block w-full h-40 bg-gray-300 rounded-lg"></span>
      <span className="block mt-2 w-24 h-5 bg-gray-300 rounded mx-auto "></span>
      <div className="w-full flex justify-between gap-2 mt-4">
        <span className="block w-2/3 h-4 bg-gray-300 rounded-full"></span>
        <span className="block flex-1 h-4 bg-gray-300 rounded-full"></span>
      </div>
      <div className="w-full flex justify-between gap-2 mt-2">
        <span className="block w-2/3 h-4 bg-gray-300 rounded-full"></span>
        <span className="block flex-1 h-4 bg-gray-300 rounded-full"></span>
      </div>
      <span className="block w-full h-12 mt-4 bg-gray-300 rounded-lg"></span>
    </div>
  );
};

export default CardItem;
