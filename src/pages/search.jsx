import { useSearchParams } from "react-router-dom";
import Filter from "../components/Filter/Filter";
import Sort from "../components/sort/sort";

const Search = () => {
  const [params, setParams] = useSearchParams();
  const query = params.get("query");
  return (
    <section className="p-4 grid grid-cols-1">
      <article className="md:hidden col-span-1 w-full flex gap-4">
        <Sort />
        <Filter />
      </article>
    </section>
  );
};

export default Search;
