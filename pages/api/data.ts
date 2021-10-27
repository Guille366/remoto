import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

// URLS
const reactBrPageOne =
  "https://api.github.com/repos/react-brasil/vagas/issues?state=open&page=1&per_page=100";
const frontBrPageOne =
  "https://api.github.com/repos/frontendbr/vagas/issues?state=open&&page=1&per_page=100";
const backBr =
  "https://api.github.com/repos/backend-br/vagas/issues?state=open&&page=1&per_page=100";
const rateLimitUrl = "https://api.github.com/rate_limit";

export default async function miscHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const reactOpenings = await axios.get(reactBrPageOne);
        const frontEndOpenings = await axios.get(frontBrPageOne);
        const backendOpenings = await axios.get(backBr);

        const allJobs: DataTypes[] = [
          ...reactOpenings.data,
          ...frontEndOpenings.data,
          ...backendOpenings.data,
        ];

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
      } catch (error: any) {
        console.log(error);
        const limitRes = await axios.get(rateLimitUrl);
        const rateLimit = limitRes.data.resources.core.remaining;
        if (rateLimit === 0) {
          res.status(429).send({
            error:
              "Exceeded the rate limit, wait for 60 min to renew your rate limit.",
          });
        }

        res.status(400).json({ error: error.message });
      }
      break;

    default:
      res.status(400).json({ error: "Wrong Method." });
      break;
  }
}
