import { useContext, useEffect } from "react";
import { JobsContext } from "../context/JobsContext";

const useFilterByUserSelection = (
  filterArray: string[],
  jobsData: DataTypes[]
) => {
  const jobsContext = useContext(JobsContext);

  useEffect(() => {
    const filterByUserSelection =
      filterArray.length !== 0
        ? jobsData.filter((job) => {
            let selectedFilterValue: string[] = [];
            job.labels.forEach((label) => {
              if (label.name.includes("Júnior")) {
                selectedFilterValue.push("JUNIOR");
                return;
              }
              if (label.name.includes("Sênior")) {
                selectedFilterValue.push("SENIOR");
                return;
              }

              selectedFilterValue.push(label.name.toUpperCase());
              return;
            });

            return filterArray.every((filterItem) =>
              selectedFilterValue.some((value) => value.includes(filterItem))
            );
          })
        : jobsData;

    jobsContext?.setJobs(filterByUserSelection);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterArray, jobsData]);

  return;
};

export default useFilterByUserSelection;
