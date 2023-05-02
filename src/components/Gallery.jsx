import { useEffect, useState } from "react";

const Gallery = ({ images }) => {
  const [allImage, setAllImage] = useState([]);
  const [isShow, setIsShow] = useState(allImage[0]);

  useEffect(() => {
    setAllImage([images]);
  }, []);

  return (
    <div className="w-full max-w-[256px]">
      <div className="w-64 h-64 border bg-white rounded-xl">
        <img
          className="object-contain w-full h-full"
          src={isShow || allImage[0]}
          alt=""
        />
      </div>
      <div className="w-full overflow-x-scroll scrollbar-none mt-2 grid gap-2 grid-cols-3">
        {allImage.map((img, i) => {
          return (
            <button
              key={i}
              onClick={() => setIsShow(img)}
              className={`${isShow == img && "border-blue-500"} 
               rounded-lg border-2 col-span-1 h-20 bg-gray-100 overflow-hidden`}
            >
              <img className="w-full h-full object-cover" src={img} alt="" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
