import { useContext, useEffect, useState } from "react";
import { Context } from "../../pages/_app";

const Pagination = () => {
  const [pagination, setPagination] = useState<number[] | []>([]);

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
  }, []);

  return (
    <ul className="flex flex-row justify-center my-8">
      {pagination.map((item) => (
        <li className="mx-2" key={item}>
          <button
            className="px-4 py-1 rounded shadow-md bg-purple-800 text-gray-100 hover:bg-purple-900"
            onClick={() => context?.setN(10 * item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
