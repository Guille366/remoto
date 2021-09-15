import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import range from "../../utils/range";

const Pagination = ({
  pagesLength,
  page,
}: {
  pagesLength: number;
  page: number;
}) => {
  const [pagination, setPagination] = useState<number[] | null>(null);
  const [limitedPag, setLimitedPag] = useState<number[] | null>(null);
  const [limit, setLimit] = useState<number[]>([0, 3]);

  // Update pagination array when jobs context is changed
  useEffect(() => {
    const pages = Math.ceil(pagesLength / 10);

    setPagination(range(1, pages));
  }, [pagesLength]);

  // onClick pagination fnc with useCallback so it don't update unnecessarily
  const handlePagination = useCallback(() => {
    if (page >= 3) {
      if (
        pagination !== null &&
        pagination.length - 2 < page &&
        pagination.length - 3 > 0
      ) {
        setLimit([pagination.length - 3, pagination.length]);

        return;
      }

      // if (page > item && item - 1 - 3 >= 1) {
      //   setLimit([item - 3, item + 1]);
      // } else {
      //   setLimit([item + 1 - 3, item + 1]);
      // }
      setLimit([0, 3]);

      return;
    } else {
      if (pagination !== null && pagination.length <= 3) {
        setLimit([0, pagination.length]);

        return;
      }

      setLimit([0, 3]);
      return;
    }
  }, [page, pagination]);

  // Update limited pagination array every time limit is changed
  useEffect(() => {
    const indexOne = limit[0] > 0 ? limit[0] : 0;
    const indexTwo = limit[1] < 3 ? 3 : limit[1];
    const filter =
      limit[1] - limit[0] === 3 && pagination?.slice(indexOne, indexTwo);

    setLimitedPag(filter || null);
  }, [limit, pagination]);

  // Effect to update state with the page transition, once btn clicked
  useEffect(() => {
    handlePagination();
  }, [handlePagination]);

  return (
    <>
      {pagination !== null && pagination.length > 1 && (
        <>
          <div className="flex flex-row justify-center my-8 font-nunito">
            {limit[1] > 3 && (
              <div className="mx-1 flex items-center">
                <Link href="/page/1">
                  <a
                    className="px-4 no-underline py-1 font-bold rounded shadow-md text-gray-100 bg-purple-700 hover:bg-purple-900 hover:shadow-lg"
                    role="link"
                  >
                    {1}
                  </a>
                </Link>
                <span className="px-2 py-1 font-bold">...</span>
              </div>
            )}
            {limitedPag?.map((item) => (
              <Link href={`/page/${item}`} key={item}>
                <a
                  className={`${
                    item === page ? "bg-purple-900" : "bg-purple-700"
                  } mx-1 px-4 no-underline py-1 font-bold rounded shadow-md text-gray-100 hover:bg-purple-900 hover:shadow-lg`}
                  role="link"
                >
                  {item}
                </a>
              </Link>
            ))}
            {pagination?.length > limit[1] && (
              <>
                <span className="px-2 py-1 font-bold">...</span>
                <Link href={`/page/${pagination?.length}`}>
                  <a
                    className={`${
                      pagination?.length === page
                        ? "bg-purple-900"
                        : "bg-purple-700"
                    }
                      px-4 no-underline py-1 font-bold rounded shadow-md text-gray-100 hover:bg-purple-900 hover:shadow-lg`}
                  >
                    {pagination?.length}
                  </a>
                </Link>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Pagination;
