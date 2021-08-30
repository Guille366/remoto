import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import FavJobs from "../components/FavJobs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import { Context } from "./_app";

interface DataTypes {
  body: string;
  html_url: string;
  created_at: string;
  id: number;
  labels: {
    name: string;
  }[];
  title: string;
}

export async function getStaticProps() {
  const ghData = await fetch("https://remoto.vercel.app/api/data");
  const data = await ghData.json();

  return {
    props: {
      data: data.data,
    },
    revalidate: 43300,
  };
}

const Favorites = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [favJobs, setFavJobs] = useState<DataTypes[]>([]);

  const context = useContext(Context);

  useEffect(() => {
    const staticData: DataTypes[] = data;

    const filterByDate = staticData.sort((a, b) => {
      const dateA: any = new Date(a.created_at);
      const dateB: any = new Date(b.created_at);

      return dateB - dateA;
    });

    const filterByFav = filterByDate.filter((item) =>
      localStorage.getItem(String(item.id))
    );

    setFavJobs(filterByFav);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const staticData: DataTypes[] = data;

    const filterByFav = staticData.filter((item) =>
      localStorage.getItem(String(item.id))
    );

    setFavJobs(filterByFav);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.alert.active === true]);

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

        {/* <Pagination fav favLength={favJobs.length} /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
