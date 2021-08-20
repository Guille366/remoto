import { useContext, useEffect, useState } from "react";
import { Context } from "../../pages/_app";
import range from "../../utils/range";

const Pagination = ({
  fav,
  favLength = 0,
}: {
  fav?: boolean;
  favLength?: number;
}) => {
  const [pagination, setPagination] = useState<number[]>([]);
  const [limitedPag, setLimitedPag] = useState<number[]>([]);
  const [limit, setLimit] = useState<number[]>([0, 5]);

  const context = useContext(Context);

  useEffect(() => {
    const length = fav ? favLength : context?.jobs.length || 0;
    const pages = Math.ceil(length / 10);

    setPagination(range(1, pages));
  }, [fav, favLength, context?.jobs.length]);

  useEffect(() => {
    const filter = pagination.slice(limit[0], limit[1]);

    setLimitedPag(filter);
  }, [limit, pagination, context?.page]);

  useEffect(() => {
    const p = fav ? context?.favN || 0 : context?.n || 0;
    const result = p / 10;

    fav ? context?.setFavPage(result) : context?.setPage(result);
  }, [pagination, context?.n, context, fav]);

  useEffect(() => {
    const page = context?.page || 1;

    if (page >= 5) {
      if (pagination.length - 5 < page) {
        return setLimit([pagination.length - 5, pagination.length]);
      }
      setLimit([limit[0] + 1, page + 1]);
    }
    if (page < 5) {
      if (pagination.length <= 5) {
        setLimit([0, pagination.length]);
        return;
      }

      setLimit([0, 5]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.page, pagination.length]);

  function handleBtn(item: number) {
    const page = context?.page || 1;
    if (fav) {
      context?.setFavN(10 * item);

      if (page >= 5) {
        context?.favPage === limit[1] &&
          setLimit([limit[0] + 1, context?.favPage + 1]);
      }
      if (page < 5) {
        if (pagination.length <= 5) {
          setLimit([0, pagination.length]);

          window.scrollTo(0, 0);
          return;
        }

        setLimit([0, 5]);
      }
    } else {
      context?.setN(10 * item);

      if (page >= 5) {
        if (pagination.length - 5 < page) {
          setLimit([pagination.length - 5, pagination.length]);
          window.scrollTo(0, 0);

          return;
        }
        setLimit([limit[0] + 1, page + 1]);
      }
      if (page < 5) {
        if (pagination.length <= 5) {
          setLimit([0, pagination.length]);
          window.scrollTo(0, 0);

          return;
        }

        setLimit([0, 5]);
      }
    }

    window.scrollTo(0, 0);
    return;
  }

  console.log(context?.page);

  return (
    <>
      {pagination.length > 1 && (
        <>
          <div className="flex flex-row justify-center my-8 font-nunito">
            {limit[1] > 5 && (
              <>
                <button
                  className="px-4 py-1 font-bold rounded shadow-md text-gray-100 bg-purple-700 hover:bg-purple-900 hover:shadow-lg"
                  onClick={() => handleBtn(1)}
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
                    !fav && context?.n === item * 10
                      ? "bg-purple-900"
                      : "bg-purple-700"
                  } ${
                    fav && context?.favN === item * 10
                      ? "bg-purple-900"
                      : "bg-purple-700"
                  } px-4 py-1 font-bold rounded shadow-md text-gray-100 hover:bg-purple-900 hover:shadow-lg`}
                  onClick={() => handleBtn(item)}
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
                    !fav && context?.n === 9 * 10
                      ? "bg-purple-900"
                      : "bg-purple-700"
                  } ${
                    fav && context?.favN === 9 * 10
                      ? "bg-purple-900"
                      : "bg-purple-700"
                  } px-4 py-1 font-bold rounded shadow-md text-gray-100 bg-purple-700 hover:bg-purple-900 hover:shadow-lg`}
                  onClick={() => handleBtn(pagination.length)}
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
