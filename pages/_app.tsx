import "../styles/global.css";
import type { AppProps } from "next/app";

// Context
import JobsProvider from "../context/jobs";
import AlertProvider from "../context/alert";
import FilterProvider from "../context/filter";

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
