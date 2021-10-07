import axios from "axios";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Jobs from "../../components/Jobs";
import { FilterContext } from "../../context/FilterContext";
import useFilterByDate from "../../hooks/useFilterByDate";
import useFilterByUserSelection from "../../hooks/useFilterByUserSelection";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

const env = process.env.NODE_ENV;
const url =
  env === "development"
    ? "https://remoto-hotfix.vercel.app/api/data"
    : "https://remoto.vercel.app/api/data";

export async function getStaticProps() {
  const ghData = await axios.get(url);
  const data: any = ghData.data;

  return {
    props: {
      data: data.data,
    },
    revalidate: 21600,
  };
}

const Page = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const filterContext = useContext(FilterContext);

  const router = useRouter();
  const { id } = router.query;
  const page = !Number(id) ? 1 : Number(id);

  const jobsFilteredByDate = useFilterByDate(data);

  const filterArray = filterContext?.filterArray || [];
  useFilterByUserSelection(filterArray, jobsFilteredByDate);

  return (
    <div>
      <Head>
        <title>{page === 1 ? "" : `Página ${page} | `}REMOTO</title>
        <meta
          name="description"
          content="Dev jobs para trabalhar de onde quiser."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-code min-h-total max-w-screen-lg m-auto px-4 text-gray-800">
        <Header />

        {router.isFallback ? <LoadingSpinner /> : <Jobs />}
      </main>

      <Footer />
    </div>
  );
};

export default Page;
