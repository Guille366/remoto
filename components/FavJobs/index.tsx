import Alert from "../common/Alert";
import LoadingSpinner from "../common/LoadingSpinner";
import JobsAvailable from "../JobsAvailable";
import FavJobsListItem from "./FavJobsListItem";

const FavJobs = ({ favData }: FavTypes) => {
  const totalAvailable = favData?.length;

  return (
    <div className="font-nunito pt-4 pb-8">
      <Alert />
      <JobsAvailable totalAvailable={totalAvailable} fav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {favData !== null && favData !== undefined ? (
          favData.length === 0 ? (
            <h2 className="w-full col-span-2 font-light text-center pt-12 text-xl">
              Sem favoritos por enquanto...
            </h2>
          ) : (
            favData.map((item, key) => (
              <FavJobsListItem data={item} key={key} fav />
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
