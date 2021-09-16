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

  const pagesTotal = Math.ceil(pagesLength / 10);

  // Update pagination array when jobs context is changed
  useEffect(() => {
    setPagination(range(1, pagesTotal));
  }, [pagesTotal]);

  // Pagination fnc with useCallback so it don't update unnecessarily
  const handlePagination = useCallback(() => {
    if (page < 3) {
      if (pagesTotal < 3) {
        setLimitedPag(range(1, pagesTotal));

        return;
      }

      setLimitedPag(range(1, 3));

      return;
    } else if (page === pagination?.length) {
      const last = pagination?.length || 4;

      const filter = pagination?.slice(last - 3, last) || null;

      setLimitedPag(filter);

      return;
    }

    const indexOne = page - 2;
    const indexTwo = page + 1;

    const filter = pagination?.slice(indexOne, indexTwo) || null;

    setLimitedPag(filter);

    return;
  }, [page, pagination, pagesTotal]);

  // Effect to update state with the page transition, once btn clicked
  useEffect(() => {
    handlePagination();
  }, [handlePagination]);

  return (
    <>
      {pagination !== null && pagination.length > 1 && (
        <>
          <div className="flex flex-row justify-center my-8 font-nunito">
            {page >= 3 && (
              <div className="flex items-center">
                <Link href="/page/1">
                  <a
                    className="mx-1 px-4 no-underline py-1 font-bold rounded shadow-md text-gray-100 bg-purple-700 hover:bg-purple-900 hover:shadow-lg"
                    role="link"
                  >
                    {1}
                  </a>
                </Link>
                {pagesTotal > 3 && (
                  <span className="px-2 py-1 font-bold">...</span>
                )}
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
            {page <= pagination?.length - 2 && (
              <>
                <span className="px-2 py-1 font-bold">...</span>
                <Link href={`/page/${pagination?.length}`}>
                  <a
                    className={`${
                      pagination?.length === page
                        ? "bg-purple-900"
                        : "bg-purple-700"
                    }
                      mx-1 px-4 no-underline py-1 font-bold rounded shadow-md text-gray-100 hover:bg-purple-900 hover:shadow-lg`}
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
