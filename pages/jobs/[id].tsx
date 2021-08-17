import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Details from "../../components/Details";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface DataType {
  body: string;
  html_url: string;
  created_at: string;
  id: number;
  labels: {
    name: string;
  }[];
  title: string;
}
interface ArrType {
  params: {
    id: string;
  };
}
interface ParamType {
  params: {
    id: string;
  };
}

// export async function getStaticPaths() {
//   const ghData = await fetch("http://localhost:3000/api/data");

//   const data = await ghData.json();

//   const arr: ArrType[] = [];

//   data.data.forEach((item: DataType) => {
//     arr.push({ params: { id: String(item.id) } });
//   });

//   return {
//     paths: [...arr],
//     fallback: true, // See the "fallback" section below
//   };
// }

// export async function getStaticProps({ params }: ParamType) {
//   try {
//     const ghData = await fetch("http://localhost:3000/api/data");

//     const data = await ghData.json();

//     //Filter data arr
//     const filteredData = data.data.filter(
//       (item: DataType) => item.id === Number(params.id)
//     );

//     return {
//       props: {
//         data: filteredData[0],
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

const JobDescription = () =>
  //     {
  //   data,
  // }: InferGetStaticPropsType<typeof getStaticProps>
  {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="font-mono min-h-total max-w-screen-lg m-auto px-4">
          <Header />

          {/* <Details data={data} /> */}
        </main>

        <Footer />
      </div>
    );
  };

export default JobDescription;
