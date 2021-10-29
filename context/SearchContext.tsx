import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface SearchTypes {
  searchParam: string;
  setSearchParam: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchTypes | null>(null);

const SearchProvider: React.FC = ({ children }) => {
  const [searchParam, setSearchParam] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchParam, setSearchParam }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
