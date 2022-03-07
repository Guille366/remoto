import { useCallback, useContext, useEffect } from "react";
import { JobsContext } from "../context/JobsContext";
import { tagFormatter } from "../utils/formatters";

const useSearchByParam = (searchParam: string, jobsData: DataTypes[]) => {
  const jobsContext = useContext(JobsContext);
  const setJobs = jobsContext?.setJobs;
  const normalizedSearchParam = searchParam.toUpperCase() || "undefined";

  const filterByUserSelection = useCallback(() => {
    const filter = jobsData.filter((job) => {
      if (job.title.toUpperCase().includes(normalizedSearchParam)) {
        return true;
      }

      return job.labels.some((label) => {
        const labelName = tagFormatter(label.name) || "undefined";

        return labelName.toUpperCase().includes(normalizedSearchParam);
      });
    });

    return filter;
  }, [normalizedSearchParam, jobsData]);

  useEffect(() => {
    setJobs !== undefined && setJobs(filterByUserSelection());
  }, [setJobs, filterByUserSelection]);

  return;
};

export default useSearchByParam;
