import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import Filter from "../components/Filter/Filter";
import SearchBox from "../components/SearchBox";
import Sort from "../components/sort/sort";
import foods from "../data/foods";
import useSearchData from "../hooks/useSearchData";
import CardItem from "../components/Loading/CardItem";

const Search = () => {
  const [params, setParams] = useSearchParams();
  const query = params.get("query");
  const { data, error, loading } = useSearchData("", query);

  return (
    <section className="p-4 flex flex-col items-center">
      <h2 className="flex gap-1 items-center select-none text-lg md:text-2xl font-bold mb-4 mt-4">
        نتایج جستجو برای:<p className="text-primary">{query}</p>
      </h2>
      <SearchBox />
      {/* Error */}
      {error && (
        <p className="my-4 text-sm text-red-500 select-none mt-4">{error}</p>
      )}
      {/*  Loading */}
      {loading && (
        <ul className="w-full mt-8 grid grid-cols-1 md: md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
          {[1, 2, 3, 4].map((loading, i) => (
            <CardItem key={i} />
          ))}
        </ul>
      )}
      {/* Data */}
      <article className="w-full flex gap-4 justify-center">
        {error && (
          <div className="w-full mx-auto mb-8 mt-4 max-w-[390px]">
            <img
              className="w-full object-cover"
              src="/images/Matchnotfound.png"
              alt="چیزی-یافت-نشد"
            />
          </div>
        )}
        {data && (
          <ul className="w-full grid gap-2 mt-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {data.map((food) => (
              <CardProduct key={food.id} data={food} />
            ))}
          </ul>
        )}
      </article>
    </section>
  );
};

export default Search;
