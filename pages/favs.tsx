import axios from "axios";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import FavJobs from "../components/FavJobs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { url } from "../constants";
import useFilterByDate from "../hooks/useFilterByDate";
import useFilterByFav from "../hooks/useFilterByFav";

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

const Favorites = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const jobsFilteredByDate = useFilterByDate(data);
  const favJobs = useFilterByFav(jobsFilteredByDate);

  return (
    <div>
      <Head>
        <title>Favoritos | REMOTO</title>
        <meta
          name="description"
          content="Dev jobs para trabalhar de onde quiser."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-code min-h-total max-w-screen-lg m-auto px-4 text-gray-800">
        <Header fav />

        <FavJobs favData={favJobs} />
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
