import { useCallback, useContext, useEffect } from "react";
import { JobsContext } from "../context/JobsContext";
import { tagFormatter } from "../utils/formatters";

const useFilterByUserSelection = (
  filterArray: string[],
  jobsData: DataTypes[],
  search?: boolean
) => {
  const jobsContext = useContext(JobsContext);
  const setJobs = jobsContext?.setJobs;

  const filterByUserSelection = useCallback(() => {
    const filter =
      filterArray.length !== 0
        ? jobsData.filter((job) => {
            let selectedFilterValues: string[] = [];
            job.labels.forEach((label) => {
              selectedFilterValues.push(tagFormatter(label.name) || "");
              return;
            });

            let hasNoParam =
              !selectedFilterValues.includes("👦 Júnior") &&
              !selectedFilterValues.includes("👨 Pleno") &&
              !selectedFilterValues.includes("👴 Sênior");

            return filterArray.every((filterItem) => {
              return selectedFilterValues.some((value) => {
                if (
                  hasNoParam ||
                  value.includes(tagFormatter(filterItem) || "")
                ) {
                  return true;
                }
              });
            });
          })
        : jobsData;

    return filter;
  }, [filterArray, jobsData]);

  console.log("render");

  useEffect(() => {
    setJobs !== undefined && setJobs(filterByUserSelection());
  }, [filterArray, !search && jobsData]);

  return;
};

export default useFilterByUserSelection;
