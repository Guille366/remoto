import Link from "next/link";
import { dateFormatter, tagFormatter } from "../../utils/formatters";
import getIcon from "../../utils/icons";
import Alert from "../common/Alert";
import Fav from "../common/Fav";
import LoadingSpinner from "../common/LoadingSpinner";
import JobsAvailable from "../JobsAvailable";

const FavJobs = ({ favData }: FavTypes) => {
  const totalAvailable = favData?.length;

  return (
    <div className="font-nunito pt-4 pb-8">
      <Alert />
      <JobsAvailable totalAvailable={totalAvailable} fav />

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {favData !== null && favData !== undefined ? (
          favData.length === 0 ? (
            <h2 className="w-full col-span-2 font-light text-center pt-12 text-xl">
              Sem favoritos por enquanto...
            </h2>
          ) : (
            favData.map((item) => (
              <div key={item.id} className="relative">
                <Fav id={item.id} />

                <Link
                  href={{
                    pathname: `/jobs/[id]`,
                    query: { id: item.id },
                  }}
                >
                  <a className="text-gray-700 flex flex-col justify-center h-full p-4 no-underline shadow-md rounded border-red-700 border border-opacity-25 hover:shadow-lg hover:border-opacity-50">
                    <h2 className="font-code pt-0">{item.title}</h2>
                    <div className="flex flex-row flex-wrap">
                      {item.labels.map((item, key) => (
                        <div
                          className="font-bold text-sm py-0.5 px-1.5 mx-1 my-1 rounded-lg border border-red-700 text-red-700"
                          key={key}
                        >
                          {getIcon(tagFormatter(item.name) || "")}{" "}
                          {tagFormatter(item.name)}
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm p-0 font-mono">
                      {dateFormatter(item.created_at)}
                    </p>
                  </a>
                </Link>
              </div>
            ))
          )
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default FavJobs;
