import React from "react";
import useSearch from "../../hooks/useSearch";

import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

const SearchBar = () => {
  const {
    handleInputChange,
    handleSubmit,
    formInput: { searchParam },
  } = useSearch();

  return (
    <div className="flex items-center justify-start w-full flex-1 py-4 text-center">
      <div className="w-full max-w-md bg-white rounded-lg">
        <form
          className="flex items-center rounded shadow-md border border-purple-700 border-opacity-25 hover:border-opacity-50 focus-within:border-opacity-50 focus-within:shadow-lg"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className="text-gray-700 appearance-none rounded w-full py-2 px-3 md:py-3 md:px-4 leading-tight focus:outline-none"
            type="text"
            name="searchParam"
            placeholder="Procurar Vaga"
            onChange={(e) => handleInputChange(e)}
            value={searchParam}
            required
            autoComplete="searchParam"
          />

          <button
            className="cursor-pointer bg-transparent text-purple-700 rounded p-2 hover:text-purple-900 focus:outline-none flex items-center justify-center"
            type="submit"
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
