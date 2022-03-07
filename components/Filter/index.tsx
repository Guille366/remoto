import { useContext, useState } from "react";
import { IoIosAdd } from "@react-icons/all-files/io/IoIosAdd";
import useFilterData from "../../hooks/useFilterData";
import { FilterContext } from "../../context/FilterContext";
import Checkbox from "./FilterListItem";

const Filter = ({ search }: { search?: boolean }) => {
  const [open, setOpen] = useState(false);

  const context = useContext(FilterContext);

  const { numberOfFilters, handleChange } = useFilterData(search);

  return (
    <div className={`flex w-full h-6 items-center relative`}>
      {open && (
        <div
          className={`flex absolute top-8 bg-white text-gray-800 rounded shadow-lg z-50 px-8 py-4 flex-col items-center justify-end`}
        >
          <Checkbox 
            active={context?.filterArgs.junior}
            handleChange={handleChange}
            text="👦 Júnior"
            name="junior"
          />
          <Checkbox 
            active={context?.filterArgs.pleno}
            handleChange={handleChange}
            text="👨 Pleno"
            name="pleno"
          />
          <Checkbox 
            active={context?.filterArgs.senior}
            handleChange={handleChange}
            text="👴 Sênior"
            name="senior"
          />
        </div>
      )}

      <button
        className={`px-4 py-1 m-2 ml-0 flex flex-row whitespace-nowrap border border-purple-700 rounded-md  ${open ? "bg-purple-700 text-white" : "text-purple-700 hover:bg-purple-50"}`}
        onClick={() => setOpen(!open)}
      >
        Adicionar Filtro 
        <IoIosAdd className="text-2xl" />
        <span className="font-light">{`(${numberOfFilters})`}</span>
      </button>
    </div>
  );
};

export default Filter;
