import { useContext, useState } from "react";
import { IoFilterCircleSharp } from "@react-icons/all-files/io5/IoFilterCircleSharp";
import { IoFilterCircleOutline } from "@react-icons/all-files/io5/IoFilterCircleOutline";
import useFilterData from "../../hooks/useFilterData";
import { FilterContext } from "../../context/FilterContext";

const Filter = ({ search }: { search?: boolean }) => {
  const [open, setOpen] = useState(false);

  const context = useContext(FilterContext);

  const { numberOfFilters, handleChange } = useFilterData(search);

  return (
    <div className={`flex w-full h-6 items-center justify-end`}>
      {open && (
        <div
          className={`flex sm:w-full absolute sm:static top-52 mt-28 sm:mt-0 right-4 bg-purple-700 sm:bg-transparent text-white sm:text-gray-800 rounded shadow sm:shadow-none z-50 px-4 py-2 sm:pr-0 sm:flex-row flex-col items-start justify-end`}
        >
          <div
            className={`${
              context?.filterArgs.junior ? "sm:text-purple-700" : ""
            } py-2 flex flex-row items-center`}
          >
            <label className="mr-1 cursor-pointer" htmlFor="junior">
              Júnior
            </label>
            <input
              className={`mr-3 cursor-pointer`}
              type="checkbox"
              id="junior"
              name="junior"
              checked={context?.filterArgs.junior}
              onChange={(e) => handleChange(e)}
              data-testId="junior-input"
            />
          </div>

          <div
            className={`${
              context?.filterArgs.pleno ? "sm:text-purple-700" : ""
            } py-2 flex flex-row items-center`}
          >
            <label className="mr-1 cursor-pointer" htmlFor="pleno">
              Pleno
            </label>
            <input
              className={`mr-3 cursor-pointer`}
              type="checkbox"
              id="pleno"
              name="pleno"
              checked={context?.filterArgs.pleno}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div
            className={`${
              context?.filterArgs.senior ? "sm:text-purple-700" : ""
            } py-2 flex flex-row items-center`}
          >
            <label className="mr-1 cursor-pointer" htmlFor="senior">
              Sênior
            </label>
            <input
              className={`mr-3 cursor-pointer`}
              type="checkbox"
              id="senior"
              name="senior"
              checked={context?.filterArgs.senior}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      )}

      <button
        className="p-4 pr-0 flex flex-row whitespace-nowrap text-purple-700 hover:text-purple-900"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <IoFilterCircleSharp className="text-2xl" />
        ) : (
          <IoFilterCircleOutline className="text-2xl" />
        )}
        <span className="font-light">{`(${numberOfFilters})`}</span>
      </button>
    </div>
  );
};

export default Filter;
