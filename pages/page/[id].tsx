import axios from "axios";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import Banner from "../../components/Banner";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Jobs from "../../components/Jobs";
import { url } from "../../constants";
import { FilterContext } from "../../context/FilterContext";
import useFilterByDate from "../../hooks/useFilterByDate";
import useFilterByUserSelection from "../../hooks/useFilterByUserSelection";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

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

      {page === 1 && <Banner />}

      {router.isFallback ? <LoadingSpinner /> : <Jobs />}
    </div>
  );
};

export default Page;
