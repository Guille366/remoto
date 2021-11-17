import { useContext } from "react";
import Link from "next/link";
import Alert from "../common/Alert";
import Fav from "../common/Fav";
import Filter from "../Filter";
import Pagination from "../Pagination";
import { useRouter } from "next/router";
import LoadingSpinner from "../common/LoadingSpinner";
import JobsAvailable from "../JobsAvailable";
import { JobsContext } from "../../context/JobsContext";
import useLimitJobsPerPage from "../../hooks/useLimitJobsPerPage";
import {
  dateFormatter,
  tagFormatter,
  titleFormatter,
} from "../../utils/formatters";
import getIcon from "../../utils/icons";
import Badges from "../common/Badges";

const Jobs = () => {
  const context = useContext(JobsContext);
  const allJobs = context?.jobs || [];

  const router = useRouter();
  const { id } = router.query;
  const page = !Number(id) ? 1 : Number(id);
  const jobsLength =
    (context?.jobs !== undefined && context!.jobs?.length) || 1;

  const limitedJobsPerPage = useLimitJobsPerPage(page, allJobs);

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
        {limitedJobsPerPage !== null && limitedJobsPerPage !== undefined ? (
          limitedJobsPerPage.length === 0 ? (
            <LoadingSpinner />
          ) : (
            limitedJobsPerPage.map((item) => (
              <div key={item.id} className="relative">
                <Fav id={item.id} />

                <Link
                  href={{
                    pathname: `/jobs/[id]`,
                    query: { id: item.id },
                  }}
                >
                  <a className="text-gray-700 flex flex-col justify-center h-full p-4 no-underline shadow-md rounded border-purple-700 border border-opacity-25 hover:shadow-lg hover:border-opacity-50">
                    <Badges
                      newOpening={
                        dateFormatter(item.created_at) === dateFormatter(today)
                      }
                      hotOpening={item.reactions.total_count >= 1}
                    />

                    <h2 className="font-code font-normal pt-0">
                      {titleFormatter(item.title)}
                    </h2>
                    <div className="flex flex-row flex-wrap">
                      {item.labels.map(
                        (item, key) =>
                          key <= 12 && (
                            <div
                              className="font-bold text-sm flex items-center justify-center py-0.5 px-1.5 mx-1 my-1 rounded-lg border border-purple-700 text-purple-700"
                              key={key}
                            >
                              {getIcon(tagFormatter(item.name) || "")}{" "}
                              {tagFormatter(item.name)}
                            </div>
                          )
                      )}
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

      <Pagination pagesLength={jobsLength} page={page} />
    </div>
  );
};

export default Jobs;
