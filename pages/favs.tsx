import axios from "axios";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import FavJobs from "../components/FavJobs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AlertContext } from "../context/alert";

export async function getStaticProps() {
  const ghData = await axios.get("https://remoto.vercel.app/api/data");
  const data = ghData.data;

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
  const [favJobs, setFavJobs] = useState<DataTypes[]>([]);

  const context = useContext(AlertContext);

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
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
