import Link from "next/link";
import usePagination from "../../hooks/usePagination";

const Pagination = ({
  pagesLength,
  page,
  search,
}: {
  pagesLength: number;
  page: number;
  search?: boolean;
}) => {
  const { pagination, limitedPag, pagesTotal } = usePagination(
    pagesLength,
    page
  );

  return (
    <>
      {pagination !== null && pagination.length > 1 && (
        <>
          <div className="flex flex-row justify-center my-8 font-nunito">
            {page >= 3 && (
              <div className="flex items-center">
                <Link href={search ? "/search/page/1" : "/page/1"}>
                  <a
                    className="mx-1 px-4 no-underline py-1 font-bold rounded shadow-md border border-violet-700 text-violet-700 bg-transparent hover:bg-violet-900 hover:text-white hover:shadow-lg"
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
              <Link
                href={search ? `/search/page/${item}` : `/page/${item}`}
                key={item}
              >
                <a
                  className={`${
                    item === page
                      ? "bg-violet-900 text-white"
                      : "bg-transparent text-violet-700"
                  } mx-1 px-4 no-underline py-1 font-bold rounded shadow-md border border-violet-700 hover:bg-violet-900 hover:text-white hover:shadow-lg`}
                  role="link"
                >
                  {item}
                </a>
              </Link>
            ))}
            {page <= pagination?.length - 2 && (
              <>
                <span className="px-2 py-1 font-bold">...</span>
                <Link
                  href={
                    search
                      ? `/search/page/${pagination?.length}`
                      : `/page/${pagination?.length}`
                  }
                >
                  <a
                    className={`${
                      pagination?.length === page
                        ? "bg-violet-900 text-white"
                        : "bg-transparent text-violet-700"
                    }
                      mx-1 px-4 no-underline py-1 font-bold rounded shadow-md border border-violet-700 hover:bg-violet-900 hover:text-white hover:shadow-lg`}
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
