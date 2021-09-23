import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

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
        const rbPageOne = await axios.get(reactBrPageOne);
        const rbPageTwo = await axios.get(reactBrPageTwo);
        const fbPageOne = await axios.get(frontBrPageOne);
        const fbPageTwo = await axios.get(frontBrPageTwo);

        const rbOne = rbPageOne.data;
        const rbTwo = rbPageTwo.data;
        const fbOne = fbPageOne.data;
        const fbTwo = fbPageTwo.data;
        const allJobs: DataTypes[] = [...rbOne, ...fbOne, ...rbTwo, ...fbTwo];

        const filteredData = allJobs.filter((item) =>
          item.labels.some((i) => i.name.toUpperCase().includes("REMOTO"))
        );
        const obj: DataTypeArr = {
          data: filteredData,
        };

        // res.setHeader(
        //   "Cache-Control",
        //   "s-maxage=43200, stale-while-revalidate"
        // );

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
