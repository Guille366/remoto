import { useContext } from "react";
import Alert from "../common/Alert";
import Filter from "../Filter";
import Pagination from "../Pagination";
import { useRouter } from "next/router";
import LoadingSpinner from "../common/LoadingSpinner";
import JobsAvailable from "../JobsAvailable";
import { JobsContext } from "../../context/JobsContext";
import useLimitJobsPerPage from "../../hooks/useLimitJobsPerPage";
import ListItem from "./ListItem";

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
            limitedJobsPerPage.map((item, key) => (
              <ListItem data={item} key={key} />
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
