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

// URLS
const rbrUrl =
  "https://api.github.com/repos/react-brasil/vagas/issues?state=open&per_page=50";
const fbrUrl =
  "https://api.github.com/repos/react-brasil/vagas/issues?state=open&per_page=50";

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
        const rbrRes = await fetch(rbrUrl);
        const fbrRes = await fetch(fbrUrl);

        const rbr = await rbrRes.json();
        const fbr = await fbrRes.json();

        const obj: DataType = {
          data: [...rbr, ...fbr],
        };

        res.setHeader(
          "Cache-Control",
          "s-maxage=43200000, stale-while-revalidate"
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
