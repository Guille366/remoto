import { useEffect, useState } from "react";

const useLimitJobsPerPage = (page: number, jobs: DataTypes[]) => {
  const [jobsPerPage, setJobsPerPage] = useState<DataTypes[]>([]);

  useEffect(() => {
    const indexOne = page === 1 ? 0 : (page - 1) * 10;
    const indexTwo = page * 10;
    const limited = jobs?.slice(indexOne, indexTwo);

    setJobsPerPage(limited || []);
  }, [jobs, page]);

  return jobsPerPage;
};

export default useLimitJobsPerPage;
