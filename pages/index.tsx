import axios from "axios";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useContext } from "react";
import Banner from "../components/Banner";
import Title from "../components/common/Title";
import Jobs from "../components/Jobs";
import { url } from "../config";
import { FilterContext } from "../context/FilterContext";
import useFilterByDate from "../hooks/useFilterByDate";
import useFilterByUserSelection from "../hooks/useFilterByUserSelection";

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

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const filterContext = useContext(FilterContext);

  const jobsFilteredByDate = useFilterByDate(data);

  const filterArray = filterContext?.filterArray || [];
  useFilterByUserSelection(filterArray, jobsFilteredByDate);

  return (
    <div>
      <Head>
        <title>REMOTO</title>
        <meta
          name="description"
          content="Dev jobs para trabalhar de onde quiser."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <Title>Todas as vagas</Title>
      <Jobs />
    </div>
  );
};

export default Home;
