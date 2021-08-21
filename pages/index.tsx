import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Jobs from "../components/Jobs";
import Pagination from "../components/Pagination";
import { Context } from "./_app";

interface DateType {
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
  try {
    const ghData = await fetch("https://remoto.vercel.app/api/data");
    const data = await ghData.json();

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const context = useContext(Context);

  useEffect(() => {
    const staticData: DateType[] = data;

    const filterJobs = staticData.sort((a, b) => {
      const dateA: any = new Date(a.created_at);
      const dateB: any = new Date(b.created_at);

      return dateB - dateA;
    });

    context?.setJobs(filterJobs);
  }, [context, data]);

  return (
    <div>
      <Head>
        <title>
          {context?.page === 1 ? "" : `Página ${context?.page} | `}REMOTO
        </title>
        <meta
          name="description"
          content="Dev jobs para trabalhar de onde quiser."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-code min-h-total max-w-screen-lg m-auto px-4 text-gray-800">
        <Header />

        <Jobs />

        <Pagination />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
