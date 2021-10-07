import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { FilterContext } from "../context/FilterContext";

const useFilterData = () => {
  const [numberOfFilters, setNumberOfFilters] = useState(0);

  const context = useContext(FilterContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    switch (name) {
      case "pj":
        context?.setFilterArgs({
          ...context?.filterArgs,
          [name]: !context?.filterArgs.pj,
        });
        break;
      case "clt":
        context?.setFilterArgs({
          ...context?.filterArgs,
          [name]: !context?.filterArgs.clt,
        });
        break;
      case "junior":
        context?.setFilterArgs({
          ...context?.filterArgs,
          [name]: !context?.filterArgs.junior,
        });
        break;
      case "pleno":
        context?.setFilterArgs({
          ...context?.filterArgs,
          [name]: !context?.filterArgs.pleno,
        });
        break;
      case "senior":
        context?.setFilterArgs({
          ...context?.filterArgs,
          [name]: !context?.filterArgs.senior,
        });
        break;

      default:
        break;
    }
  };

  const handleNumberOfFilters = useCallback(() => {
    let filterArgsArray = [];

    for (const property in context?.filterArgs) {
      const args: any = context?.filterArgs;

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

    const number = filterArgsArray.length;
    setNumberOfFilters(number);
  }, [context?.filterArgs]);

  useEffect(() => {
    handleNumberOfFilters();
  }, [handleNumberOfFilters]);

  return { handleChange, numberOfFilters };
};

export default useFilterData;
