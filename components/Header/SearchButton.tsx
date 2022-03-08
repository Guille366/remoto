import React, { Dispatch, SetStateAction } from 'react'
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

interface NavItemTypes {
    condition?: boolean;
    active?: boolean;
    onClick: Dispatch<SetStateAction<boolean>>;
}

const SearchButton: React.FC<NavItemTypes> = ({ condition, active, onClick }) => {
  return (
        <div
            className={`
                font-nunito no-underline font-bold px-4 py-1 ml-2 rounded cursor-pointer
                ${condition ? "text-white md:hover:text-gray-800" : "text-gray-800 hover:text-violet-700"}
                ${active ? "text-violet-700" : ""}
            `}
            onClick={() => onClick(true)}
        >
        <FaSearch />
    </div>
  )
}

export default SearchButton