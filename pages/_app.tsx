import "../styles/global.css";
import type { AppProps } from "next/app";

// Context
import JobsProvider from "../context/JobsContext";
import AlertProvider from "../context/AlertContext";
import FilterProvider from "../context/FilterContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <JobsProvider>
      <AlertProvider>
        <FilterProvider>
          <Component {...pageProps} />
        </FilterProvider>
      </AlertProvider>
    </JobsProvider>
  );
}
export default MyApp;
