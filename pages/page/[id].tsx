import axios from "axios";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Jobs from "../../components/Jobs";
import { FilterContext } from "../../context/filter";
import { JobsContext } from "../../context/jobs";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

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

const Page = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const filterContext = useContext(FilterContext);
  const jobsContext = useContext(JobsContext);

  const router = useRouter();
  const { id } = router.query;
  const page = !Number(id) ? 1 : Number(id);

  useEffect(() => {
    const staticData: DataTypes[] = data;

    // Filter by date
    const filterJobs = staticData?.sort((a, b) => {
      const dateA: any = new Date(a.created_at);
      const dateB: any = new Date(b.created_at);

      return dateB - dateA;
    });

    // Array of filter state keys
    let filterArgsArray = [];
    for (const property in filterContext?.filterArgs) {
      const args: any = filterContext?.filterArgs;

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
      filterArgsArray?.length !== 0
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

            return mapped.every((j) => mappedValues.some((z) => z.includes(j)));
          })
        : filterJobs;

    jobsContext?.setJobs(filter);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filterContext?.filterArgs]);

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
