import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface JobsTypes {
  jobs: DataTypes[] | null;
  setJobs: Dispatch<SetStateAction<DataTypes[] | null>>;
}

export const JobsContext = createContext<JobsTypes | null>(null);

const JobsProvider: React.FC = ({ children }) => {
  const [jobs, setJobs] = useState<DataTypes[] | null>(null);

  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobsContext.Provider>
  );
};

export default JobsProvider;
