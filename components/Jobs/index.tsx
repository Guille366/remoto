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
      <ul className="grid md:grid-cols-2 gap-4">
        {arr.length === 0 ? (
          <li>
            <h2 className="w-full text-center pt-12 text-xl">No items...</h2>
          </li>
        ) : (
          arr.map((item) => (
            <li
              key={item.id}
              className="p-4 shadow-md rounded border-purple-700 border"
            >
              <Link href={`/jobs/${item.id}`}>
                <a className="text-gray-700">
                  <h2 className="font-mono">{item.title}</h2>
                  <div className="flex flex-row flex-wrap">
                    {item.labels.map((item, key) => (
                      <div
                        className="font-bold py-1 px-2 mx-1 my-1 rounded-lg bg-purple-900 text-gray-200"
                        key={key}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <small className="">{formatDate(item.created_at)}</small>
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
