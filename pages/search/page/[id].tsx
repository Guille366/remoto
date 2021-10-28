import { useRouter } from "next/router";
import Head from "next/head";
import React, { useContext } from "react";
import axios from "axios";
import { InferGetStaticPropsType } from "next";
import BackButton from "../../../components/common/Buttons/Back";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import SearchedJobs from "../../../components/SearchedJobs";
import { url } from "../../../constants";
import { SearchContext } from "../../../context/SearchContext";

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

const Search = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const id: any = router.query.id;
  const page = !Number(id) ? 1 : Number(id);
  const searchContext = useContext(SearchContext);

  const param = searchContext?.searchParam || "";

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
      <BackButton />
      <h1>
        Search terms: <strong>{param}</strong>
      </h1>
      {router.isFallback ? (
        <LoadingSpinner />
      ) : (
        <SearchedJobs searchParam={param} data={data} />
      )}
    </div>
  );
};

export default Search;
