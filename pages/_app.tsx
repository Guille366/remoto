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
  jobs: JobsTypes[] | null;
  setJobs: Dispatch<SetStateAction<JobsTypes[] | null>>;
  alert: {
    msg: string | null;
    active: boolean;
  };
  setAlert: Dispatch<SetStateAction<AlertTypes>>;
  filterArgs: {
    pj: boolean;
    clt: boolean;
    junior: boolean;
    pleno: boolean;
    senior: boolean;
  };
  setFilterArgs: Dispatch<
    SetStateAction<{
      pj: boolean;
      clt: boolean;
      junior: boolean;
      pleno: boolean;
      senior: boolean;
    }>
  >;
}

export const Context = createContext<ContextTypes | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [jobs, setJobs] = useState<JobsTypes[] | null>(null);
  const [alert, setAlert] = useState<AlertTypes>({ msg: null, active: false });
  const [filterArgs, setFilterArgs] = useState({
    pj: false,
    clt: false,
    junior: false,
    pleno: false,
    senior: false,
  });

  return (
    <Context.Provider
      value={{
        setJobs,
        jobs,
        alert,
        setAlert,
        filterArgs,
        setFilterArgs,
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
}
export default MyApp;
