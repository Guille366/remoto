import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
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
  filterArray: string[];
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
  const [filterArray, setFilterArray] = useState<string[]>([]);

  useEffect(() => {
    let filterArgsArray = [];
    for (const property in filterArgs) {
      const args: any = filterArgs;

      if (args[property]) {
        switch (property) {
          case "junior":
            filterArgsArray.push("JUNIOR");
            break;
          case "senior":
            filterArgsArray.push("SENIOR");
            break;
          default:
            filterArgsArray.push(property.toUpperCase());
            break;
        }
      }
    }
    const mapped = filterArgsArray.map((item) => item.toUpperCase());

    setFilterArray(mapped);
  }, [filterArgs]);

  return (
    <FilterContext.Provider value={{ filterArgs, setFilterArgs, filterArray }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
