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
  jobs: JobsTypes[] | [];
  setJobs: Dispatch<SetStateAction<JobsTypes[] | []>>;
}

export const Context = createContext<ContextTypes | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [n, setN] = useState<number>(10);
  const [jobs, setJobs] = useState<JobsTypes[] | []>([]);

  return (
    <Context.Provider value={{ n, setN, setJobs, jobs }}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
export default MyApp;
