import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import Filter from "../components/Filter/Filter";
import SearchBox from "../components/SearchBox/SearchBox";
import Sort from "../components/sort/sort";
import foods from "../data/foods";

const Search = () => {
  const [data, setData] = useState(false);
  const [params, setParams] = useSearchParams();
  const query = params.get("query");

  useEffect(() => {
    setData(false);
    const productsFilter = foods.filter((food) => food.name.includes(query));
    setData(productsFilter);
  }, [query]);

  if (!data)
    return (
      <section className="w-full h-[calc(100vh-244px)] flex flex-col gap-4 text-sm items-center justify-center">
        <span className="block h-8 w-8 rounded-full border-4 border-gray-400 border-l-transparent animate-spin"></span>
        <p className="text-gray-500">درحال جستجو...</p>
      </section>
    );

  return (
    <section className="p-4 flex flex-col items-center">
      {data.length <= 0 ? (
        <p className="my-4 text-sm text-red-500 select-none">
          موردی با این مشخصات پیدا نکردیم!
        </p>
      ) : (
        <h2 className="flex gap-1 items-center select-none text-lg md:text-2xl font-bold mb-4">
          نتایج جستجو برای:<p className="text-primary">{query}</p>
        </h2>
      )}
      <SearchBox />
      <article className="w-full flex gap-4 justify-center">
        {data.length <= 0 && (
          <div className="w-full my-8 max-w-[390px]">
            <img
              className="w-full object-cover"
              src="/images/Matchnotfound.png"
              alt="چیزی-یافت-نشد"
            />
          </div>
        )}
        {data.length > 0 && (
          <ul className="w-full grid gap-2 mt-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {data.map((food) => (
              <CardProduct data={food} />
            ))}
          </ul>
        )}
      </article>
    </section>
  );
};

export default Search;
