import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface FilterTypes {
  setFilterArgs: Dispatch<
    SetStateAction<{
      pj: boolean;
      clt: boolean;
      junior: boolean;
      pleno: boolean;
      senior: boolean;
    }>
  >;
  filterArgs: {
    pj: boolean;
    clt: boolean;
    junior: boolean;
    pleno: boolean;
    senior: boolean;
  };
}

interface FilterState {
  pj: boolean;
  clt: boolean;
  junior: boolean;
  pleno: boolean;
  senior: boolean;
}

export const FilterContext = createContext<FilterTypes | null>(null);

const FilterProvider: React.FC = ({ children }) => {
  const [filterArgs, setFilterArgs] = useState<FilterState>({
    pj: false,
    clt: false,
    junior: false,
    pleno: false,
    senior: false,
  });

  return (
    <FilterContext.Provider value={{ filterArgs, setFilterArgs }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
