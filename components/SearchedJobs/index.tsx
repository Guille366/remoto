import { useRouter } from "next/router";
import Link from "next/link";
import React, { useContext } from "react";
import { JobsContext } from "../../context/JobsContext";
import useLimitJobsPerPage from "../../hooks/useLimitJobsPerPage";
import Alert from "../common/Alert";
import Fav from "../common/Fav";
import LoadingSpinner from "../common/LoadingSpinner";
import Filter from "../Filter";
import JobsAvailable from "../JobsAvailable";
import {
  dateFormatter,
  handleLevel,
  tagFormatter,
  titleFormatter,
} from "../../utils/formatters";
import getIcon from "../../utils/icons";
import Pagination from "../Pagination";
import useSearchByParam from "../../hooks/useSearchByParam";
import useFilterByDate from "../../hooks/useFilterByDate";
import { FilterContext } from "../../context/FilterContext";
import useFilterByUserSelection from "../../hooks/useFilterByUserSelection";
import Badges from "../common/Badges";
import Labels from "../common/Labels";

const SearchedJobs = ({
  searchParam,
  data,
}: {
  searchParam: string;
  data: DataTypes[];
}) => {
  const context = useContext(JobsContext);
  const jobsFilteredByDate = useFilterByDate(data);
  useSearchByParam(searchParam, jobsFilteredByDate);

  const router = useRouter();
  const { id } = router.query;
  const page = !Number(id) ? 1 : Number(id);
  const jobsLength =
    (context?.jobs !== undefined && context!.jobs?.length) || 1;
  const jobs = context?.jobs || [];

  const limitedJobsPerPage = useLimitJobsPerPage(page, jobs);

  const today = new Date().toString();

  const totalAvailable = context?.jobs?.length;

  const filterContext = useContext(FilterContext);
  const filterArray = filterContext?.filterArray || [];
  useFilterByUserSelection(filterArray, jobs);

  return (
    <div className="font-nunito pt-4 pb-8">
      <Alert />
      <div className="w-full flex flex-row justify-between">
        <Filter search />
        <JobsAvailable totalAvailable={totalAvailable} />
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {limitedJobsPerPage !== null && limitedJobsPerPage !== undefined ? (
          limitedJobsPerPage.length === 0 ? (
            <p>Vaga não encontrada.</p>
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
                        dateFormatter(item.created_at).standard === dateFormatter(today).standard
                      }
                      hotOpening={item.reactions.total_count >= 1}
                    />
                    <h2 className="font-code pb-2  pt-0">
                      {titleFormatter(item.title)}
                    </h2>
                    <div className="flex flex-row flex-wrap">
                      {item.labels.map(
                        (item, key) =>
                          key <= 12 && (
                            <Labels
                              key={key}
                              level={handleLevel(tagFormatter(item.name) || "")}
                              name={item.name}
                            >
                              {getIcon(tagFormatter(item.name) || "")}{" "}
                              {tagFormatter(item.name)}
                            </Labels>
                          )
                      )}
                    </div>
                    <p className="text-gray-500 text-xs p-0 mt-4 font-mono">
                      ⏱️ {dateFormatter(item.created_at).fromNow}
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

      <Pagination search pagesLength={jobsLength} page={page} />
    </div>
  );
};

export default SearchedJobs;
