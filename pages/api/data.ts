import type { NextApiRequest, NextApiResponse } from "next";

// Types
interface DataType {
  data: {
    body: string;
    html_url: string;
    created_at: string;
    id: number;
    labels: {
      name: string;
    }[];
    title: string;
  }[];
}
interface FilteredDataType {
  body: string;
  html_url: string;
  created_at: string;
  id: number;
  labels: {
    name: string;
  }[];
  title: string;
}

// URLS
const reactBrPageOne =
  "https://api.github.com/repos/react-brasil/vagas/issues?state=open&page=1&per_page=100";
const frontBrPageOne =
  "https://api.github.com/repos/frontendbr/vagas/issues?state=open&&page=1&per_page=100";
const reactBrPageTwo =
  "https://api.github.com/repos/react-brasil/vagas/issues?state=open&page=2&per_page=100";
const frontBrPageTwo =
  "https://api.github.com/repos/frontendbr/vagas/issues?state=open&&page=2&per_page=100";

// check if is in prod or dev
// const isDev = !process.env.AWS_REGION;

export default async function miscHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const rbPageOne = await fetch(reactBrPageOne);
        const rbPageTwo = await fetch(reactBrPageTwo);
        const fbPageOne = await fetch(frontBrPageOne);
        const fbPageTwo = await fetch(frontBrPageTwo);

        const rbOne = await rbPageOne.json();
        const rbTwo = await rbPageTwo.json();
        const fbOne = await fbPageOne.json();
        const fbTwo = await fbPageTwo.json();
        const allJobs: FilteredDataType[] = [
          ...rbOne,
          ...fbOne,
          ...rbTwo,
          ...fbTwo,
        ];

        const filteredData = allJobs.filter((item) =>
          item.labels.some((item) => item.name.toUpperCase().includes("REMOTO"))
        );
        const obj: DataType = {
          data: filteredData,
        };

        res.setHeader(
          "Cache-Control",
          "s-maxage=43200, stale-while-revalidate"
        );

        res.status(200).json(obj);
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Server Error." });
      }
      break;

    default:
      res.status(400).json({ error: "Wrong Method." });
      break;
  }
}
