import "../styles/global.css";
import type { AppProps } from "next/app";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface JobsTypes {
  body: string;
  html_url: string;
  created_at: string;
  id: number;
  labels: {
    name: string;
  }[];
  title: string;
}
interface ContextTypes {
  n: number;
  setN: Dispatch<SetStateAction<number>>;
  pagination: number[] | null;
  setPagination: Dispatch<SetStateAction<number[] | null>>;
  jobs: JobsTypes[];
  setJobs: Dispatch<SetStateAction<never[]>>;
}

export const Context = createContext<ContextTypes | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [n, setN] = useState(10);
  const [pagination, setPagination] = useState<number[] | null>(null);
  const [jobs, setJobs] = useState([]);

  return (
    <Context.Provider
      value={{ n, setN, pagination, setPagination, setJobs, jobs }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
}
export default MyApp;
