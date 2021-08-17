import { useContext, useEffect, useState } from "react";
import { Context } from "../../pages/_app";

const Pagination = () => {
  const [pagination, setPagination] = useState<number[]>([]);

  const context = useContext(Context);

  useEffect(() => {
    const length = context?.jobs.length || 0;
    const pages = length / 10;
    const paginationArr = [];

    for (let i = 1; i < pages; i++) {
      paginationArr.push(i);
    }

    setPagination(paginationArr);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.jobs]);

  return (
    <>
      <ul className="hidden md:flex flex-row justify-center my-8">
        {pagination.map((item) => (
          <li className="mx-2" key={item}>
            <button
              className={`${
                context?.n === item * 10 ? "bg-purple-900" : "bg-purple-700"
              } px-4 py-1 rounded shadow-md text-gray-100 hover:bg-purple-900`}
              onClick={() => context?.setN(10 * item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <ul className="md:hidden flex flex-row justify-center mb-8">
        <li className="mx-2">
          <button
            className={`px-4 py-1 rounded shadow-md text-gray-100 bg-purple-700 hover:bg-purple-900`}
            onClick={() => context?.setN(context?.n - 10)}
            disabled={context?.n === 10}
          >
            {"<<"}
          </button>
        </li>
        <li className="mx-2">
          <button
            className={`px-4 py-1 rounded shadow-md text-gray-100 bg-purple-700 hover:bg-purple-900`}
            onClick={() => context?.setN(context?.n + 10)}
            disabled={context?.n === 100}
          >
            {">>"}
          </button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
