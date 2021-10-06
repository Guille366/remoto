import { useEffect, useState } from "react";

const useFilterByDate = (jobsData: DataTypes[]) => {
  const [jobsByDate, setJobsByDate] = useState<DataTypes[]>([]);

  useEffect(() => {
    const filterByDate = jobsData.sort((a, b) => {
      const dateA: any = new Date(a.created_at);
      const dateB: any = new Date(b.created_at);

      return dateB - dateA;
    });

    setJobsByDate(filterByDate);
  }, [jobsData]);

  return jobsByDate;
};

export default useFilterByDate;
