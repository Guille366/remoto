import { useContext, useEffect, useState } from "react";
import { Context } from "../../pages/_app";
import formatDate from "../../utils/formatDate";
import Link from "next/link";

interface StateTypes {
  body: string;
  html_url: string;
  created_at: string;
  id: number;
  labels: {
    name: string;
  }[];
  title: string;
}

const Jobs = () => {
  const [arr, setArr] = useState<StateTypes[] | []>([]);

  const context = useContext(Context);

  useEffect(() => {
    const limited = context?.jobs.slice(0, context?.n);

    setArr(limited || []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const limited = context?.jobs.slice(context?.n - 10, context?.n);

    setArr(limited || []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.n, context?.jobs]);

  return (
    <div className="font-nunito">
      <ul>
        {arr.length === 0 ? (
          <li>
            <h2 className="w-full text-center pt-12 text-xl">No items...</h2>
          </li>
        ) : (
          arr.map((item) => (
            <li key={item.id}>
              <Link href={`/jobs/${item.id}`}>
                <a className="">
                  {item.title}
                  <br /> {item.labels.map((item) => item.name)}
                  <br /> {formatDate(item.created_at)}
                </a>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Jobs;
