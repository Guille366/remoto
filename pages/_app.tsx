import "../styles/global.css";
import type { AppProps } from "next/app";

// Context
import JobsProvider from "../context/JobsContext";
import AlertProvider from "../context/AlertContext";
import FilterProvider from "../context/FilterContext";
import Layout from "../components/Layout";
import SearchProvider from "../context/SearchContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <JobsProvider>
        <AlertProvider>
          <FilterProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </FilterProvider>
        </AlertProvider>
      </JobsProvider>
    </SearchProvider>
  );
}
export default MyApp;
