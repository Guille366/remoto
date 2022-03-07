import { useRouter } from "next/router";
import React, { useContext } from "react";
import { JobsContext } from "../../context/JobsContext";
import useLimitJobsPerPage from "../../hooks/useLimitJobsPerPage";
import Alert from "../common/Alert";
import LoadingSpinner from "../common/LoadingSpinner";
import Filter from "../Filter";
import JobsAvailable from "../JobsAvailable";
import Pagination from "../Pagination";
import useSearchByParam from "../../hooks/useSearchByParam";
import useFilterByDate from "../../hooks/useFilterByDate";
import { FilterContext } from "../../context/FilterContext";
import useFilterByUserSelection from "../../hooks/useFilterByUserSelection";
import ListItem from "../Jobs/JobsListItem";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {limitedJobsPerPage !== null && limitedJobsPerPage !== undefined ? (
          limitedJobsPerPage.length === 0 ? (
            <p>Vaga não encontrada.</p>
          ) : (
            limitedJobsPerPage.map((item, key) => (
              <ListItem data={item} key={key} />
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
