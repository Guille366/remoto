import Link from "next/link";
import usePagination from "../../hooks/usePagination";

const Pagination = ({
  pagesLength,
  page,
}: {
  pagesLength: number;
  page: number;
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
