import { useContext, useEffect, useState } from "react";
import { Context } from "../../pages/_app";
import formatDate from "../../utils/formatDate";
import Link from "next/link";
import Alert from "../common/Alert";
import Fav from "../common/Fav";
import Filter from "../Filter";
import Pagination from "../Pagination";
import { useRouter } from "next/router";
import LoadingSpinner from "../common/LoadingSpinner";
import JobsAvailable from "../JobsAvailable";

const Jobs = () => {
  const [arr, setArr] = useState<DataTypes[] | null>(null);

  const context = useContext(Context);

  const router = useRouter();
  const { id } = router.query;
  const page = !Number(id) ? 1 : Number(id);
  const jobsLength =
    (context?.jobs !== undefined && context!.jobs?.length) || 1;

  useEffect(() => {
    const indexOne = page === 1 ? 0 : (page - 1) * 10;
    const indexTwo = page * 10;
    const limited =
      context !== null &&
      context!.jobs !== undefined &&
      context!.jobs?.slice(indexOne, indexTwo);

    setArr(limited || null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.jobs, page]);

  const today = new Date().toString();

  const totalAvailable = context?.jobs?.length;

  return (
    <div className="font-nunito pt-4 pb-8">
      <Alert />
      <div className="w-full flex flex-row justify-between">
        <JobsAvailable totalAvailable={totalAvailable} />
        <Filter />
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {!arr ? (
          <LoadingSpinner />
        ) : (
          arr.map((item) => (
            <div key={item.id} className="relative">
              <Fav id={item.id} />

              <Link
                href={{
                  pathname: `/jobs/[id]`,
                  query: { id: item.id },
                }}
              >
                <a className="text-gray-700 flex flex-col justify-center h-full p-4 no-underline shadow-md rounded border-purple-700 border border-opacity-25 hover:shadow-lg hover:border-opacity-50">
                  <small className="text-red-600 opacity-80 font-bold font-code absolute top-0 left-0 p-2 pt-1">
                    {formatDate(item.created_at) === formatDate(today) &&
                      "Nova!"}
                  </small>
                  <h2 className="font-code pt-0">{item.title}</h2>
                  <div className="flex flex-row flex-wrap">
                    {item.labels.map((item, key) => (
                      <div
                        className="font-bold text-sm py-0.5 px-1.5 mx-1 my-1 rounded-lg border border-purple-700 text-purple-700"
                        key={key}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm p-0 font-mono">
                    {formatDate(item.created_at)}
                  </p>
                </a>
              </Link>
            </div>
          ))
        )}
      </div>

      <Pagination pagesLength={jobsLength} page={page} />
    </div>
  );
};

export default Jobs;
