import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import barnches from "../data/branches";

const BranchCard = ({ branch }) => {
  return (
    <Link
      to={branch.url}
      className="col-span-1 group md:hover:shadow  md:pb-4 flex gap-x-4 items-center md:flex-col rounded-lg overflow-hidden border border-[#cbcbcb]"
    >
      <img
        className="flex items-center justify-center w-[144px] object-cover md:group-hover:h-[80px] lg:group-hover:h-[140px] duration-150 h-[90px] md:w-full md:h-[150px] lg:h-[250px] md:mb-4"
        src={branch.image}
        alt={branch.title}
      />

      <div className="flex flex-col gap-2 flex-1 items-center justify-center">
        <span className="font-semibold">شعبه {branch.title}</span>
        <p className="text-sm text-center">{branch.address}</p>
      </div>
      <button className="mt-4 text-sm lg:text-base -mb-[59px] group-hover:mb-0 hover:bg-primary hover:text-white duration-150  hidden md:flex items-center gap-2 py-2 px-8 border rounded text-primary border-primary">
        صفحه شعبه
        <FiChevronLeft className="text-xl" />
      </button>
    </Link>
  );
};

const BranchesList = () => {
  return (
    <section className="max-w-[1440px] container p-4 pt-8 md:py-8 mb-4 select-none">
      <h2 className="font-bold w-full text-center mb-8 md:text-lg lg:text-xl">
        ترخینه گردی
      </h2>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {barnches.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </article>
    </section>
  );
};

export default BranchesList;
