import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../../pages/_app";
import range from "../../utils/range";

const Pagination = () => {
  const [pagination, setPagination] = useState<number[]>([]);
  const [limitedPag, setLimitedPag] = useState<number[]>([]);
  const [limit, setLimit] = useState<number[]>([0, 3]);

  const context = useContext(Context);

  // Update pagination array when jobs context is changed
  useEffect(() => {
    const length = context?.jobs.length || 0;
    const pages = Math.ceil(length / 10);

    setPagination(range(1, pages));
  }, [context?.jobs.length]);

  // Update limited pagination array every time limit is changed
  useEffect(() => {
    const indexOne = limit[0] > 0 ? limit[0] : 0;
    const indexTwo = limit[1] < 3 ? 3 : limit[1];
    const filter =
      limit[1] - limit[0] === 3 && pagination.slice(indexOne, indexTwo);

    filter !== false && setLimitedPag(filter);
  }, [limit, pagination]);

  // Update page to context every pagination array update
  useEffect(() => {
    const p = context?.n || 0;
    const result = p / 10;

    context?.setPage(result);
  }, [context, pagination]);

  // onClick pagination fnc with useCallback so it don't update unnecessarily
  const handlePagination = useCallback(
    (item) => {
      const page = context?.page || 1;

      context?.setN(10 * item);

      if (page >= 3) {
        if (pagination.length - 2 < page && pagination.length - 3 > 0) {
          setLimit([pagination.length - 3, pagination.length]);
          window.scrollTo(0, 0);

          return;
        }

        if (page > item && item - 1 - 3 >= 1) {
          setLimit([item - 3, item + 1]);
        } else {
          setLimit([item + 1 - 3, item + 1]);
        }

        window.scrollTo(0, 0);
        return;
      } else {
        if (pagination.length <= 3) {
          setLimit([0, pagination.length]);
          window.scrollTo(0, 0);

          return;
        }

        setLimit([0, 3]);
      }

      window.scrollTo(0, 0);
      return;
    },
    [context, pagination]
  );

  // Effect to update state with the page transition, once btn clicked
  useEffect(() => {
    const page = context?.page || 1;

    page > 2 && handlePagination(page);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.page]);

  return (
    <>
      {pagination.length > 1 && (
        <>
          <div className="flex flex-row justify-center my-8 font-nunito">
            {limit[1] > 3 && (
              <>
                <button
                  className="px-4 py-1 font-bold rounded shadow-md text-gray-100 bg-purple-700 hover:bg-purple-900 hover:shadow-lg"
                  onClick={() => handlePagination(1)}
                >
                  {1}
                </button>
                <span className="px-2 py-1 font-bold">...</span>
              </>
            )}
            {limitedPag.map((item) => (
              <div className="mx-1" key={item}>
                <button
                  className={`${
                    context?.n === item * 10 ? "bg-purple-900" : "bg-purple-700"
                  } px-4 py-1 font-bold rounded shadow-md text-gray-100 hover:bg-purple-900 hover:shadow-lg`}
                  onClick={() => handlePagination(item)}
                >
                  {item}
                </button>
              </div>
            ))}
            {pagination.length > limit[1] && (
              <>
                <span className="px-2 py-1 font-bold">...</span>
                <button
                  className={`${
                    context?.n === 9 * 10 ? "bg-purple-900" : "bg-purple-700"
                  }  px-4 py-1 font-bold rounded shadow-md text-gray-100 bg-purple-700 hover:bg-purple-900 hover:shadow-lg`}
                  onClick={() => handlePagination(pagination.length)}
                >
                  {pagination.length}
                </button>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Pagination;
