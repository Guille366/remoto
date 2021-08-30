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
  const ghData = await fetch("https://remoto.vercel.app/api/data");
  const data = await ghData.json();

  return {
    props: {
      data: data.data,
    },
    revalidate: 43300,
  };
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

    // Array of filter state keys
    let filterArgsArray = [];
    for (const property in context?.filterArgs) {
      const args: any = context?.filterArgs;

      if (args[property]) {
        switch (property) {
          case "junior":
            filterArgsArray.push("JUNIOR");
            break;
          case "senior":
            filterArgsArray.push("SENIOR");
            break;
          default:
            filterArgsArray.push(property.toUpperCase());
            break;
        }
      }
    }
    const mapped = filterArgsArray.map((item) => item.toUpperCase());

    // Filter filterJobs acording to keys of state
    const filter =
      filterArgsArray.length !== 0
        ? filterJobs.filter((item) => {
            let mappedValues: string[] = [];
            item.labels.forEach((i) => {
              if (i.name.includes("Júnior")) {
                mappedValues.push("JUNIOR");
                return;
              }
              if (i.name.includes("Sênior")) {
                mappedValues.push("SENIOR");
                return;
              }

              mappedValues.push(i.name.toUpperCase());
              return;
            });

            // console.log(mappedValues);

            return mapped.every((j) => mappedValues.some((z) => z.includes(j)));
          })
        : filterJobs;

    context?.setJobs(filter);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.filterArgs]);

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
