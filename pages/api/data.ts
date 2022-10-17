import { extractEmail, extractLink } from './../../utils/extractFromString';
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { URL } from '../../constants';

export default async function miscHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const reactOpenings = await axios.get(URL.SOURCE_ONE);
        const frontEndOpenings = await axios.get(URL.SOURCE_TWO);
        const backendOpenings = await axios.get(URL.SOURCE_THREE);

        const allJobs: DataTypes[] = [
          ...reactOpenings.data,
          ...frontEndOpenings.data,
          ...backendOpenings.data,
        ];

        const filteredData = allJobs.filter((item) =>
          item.labels.some((i) => i.name.toUpperCase().includes("REMOTO"))
            && !item.body.includes('parceiro da plataforma')
            && (!!extractLink(item.body) || !!extractEmail(item.body))
        );
        const obj: DataTypeArr = {
          data: filteredData,
        };

        res.status(200).json(obj);
      } catch (error: any) {
        console.error(error);
        const limitRes = await axios.get(URL.RATE_LIMIT);
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
