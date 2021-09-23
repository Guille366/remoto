import "../styles/global.css";
import type { AppProps } from "next/app";
import {
  createContext,
  //  Dispatch,
  //  SetStateAction,
  useState,
} from "react";

export const Context = createContext<ContextTypes | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [jobs, setJobs] = useState<DataTypes[] | null>(null);
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
