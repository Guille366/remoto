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

interface AlertTypes {
  msg: string | null;
  active: boolean;
}
interface ContextTypes {
  n: number;
  setN: Dispatch<SetStateAction<number>>;
  jobs: JobsTypes[] | [];
  setJobs: Dispatch<SetStateAction<JobsTypes[] | []>>;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  setFavPage: Dispatch<SetStateAction<number>>;
  favPage: number;
  alert: {
    msg: string | null;
    active: boolean;
  };
  setAlert: Dispatch<SetStateAction<AlertTypes>>;
  favN: number;
  setFavN: Dispatch<SetStateAction<number>>;
}

export const Context = createContext<ContextTypes | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [n, setN] = useState<number>(10);
  const [favN, setFavN] = useState<number>(10);
  const [jobs, setJobs] = useState<JobsTypes[] | []>([]);
  const [page, setPage] = useState<number>(1);
  const [favPage, setFavPage] = useState<number>(1);
  const [alert, setAlert] = useState<AlertTypes>({ msg: null, active: false });

  return (
    <Context.Provider
      value={{
        n,
        setN,
        setJobs,
        jobs,
        page,
        setPage,
        alert,
        setAlert,
        favN,
        setFavN,
        favPage,
        setFavPage,
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
}
export default MyApp;
