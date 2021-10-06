import { useEffect, useState } from "react";

const useFilterByFav = (jobsData: DataTypes[]) => {
  const [favJobs, setFavJobs] = useState<DataTypes[]>([]);

  useEffect(() => {
    const filterByFav = jobsData.filter((job) =>
      localStorage.getItem(String(job.id))
    );

    setFavJobs(filterByFav);
  }, [jobsData]);

  return favJobs;
};

export default useFilterByFav;
