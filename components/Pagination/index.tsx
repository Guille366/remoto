import { useContext, useEffect, useState } from "react";
import { Context } from "../../pages/_app";

const Pagination = () => {
  const [pagination, setPagination] = useState<number[]>([]);
  const [page, setPage] = useState<number>(1);

  const context = useContext(Context);

  useEffect(() => {
    const length = context?.jobs.length || 0;
    const pages = length / 10;
    const paginationArr = [];

    for (let i = 1; i <= pages; i++) {
      paginationArr.push(i);
    }

    setPagination(paginationArr);
  }, [context?.jobs]);

  useEffect(() => {
    const p = context?.n || 0;
    const result = p / 10;

    setPage(result);
  }, [pagination, context?.n]);

  function handleBtn(item: number) {
    context?.setN(10 * item);

    window.scrollTo(0, 0);
  }

  function handleBtnMobile(direction: string) {
    switch (direction) {
      case "previous":
        context?.setN(context?.n - 10);
        break;
      case "next":
        context?.setN(context?.n + 10);
        break;
      default:
        break;
    }

    window.scrollTo(0, 0);
  }

  return (
    <>
      <ul className="hidden md:flex flex-row justify-center my-8">
        {pagination.map((item) => (
          <li className="mx-2" key={item}>
            <button
              className={`${
                context?.n === item * 10 ? "bg-purple-900" : "bg-purple-700"
              } px-4 py-1 rounded shadow-md text-gray-100 hover:bg-purple-900`}
              onClick={() => handleBtn(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <div className="md:hidden block">
        <p className="w-full text-center text-sm">
          {page}/{pagination.length}
        </p>
        <ul className="md:hidden flex flex-row justify-center mb-8">
          <li className="mx-2">
            <button
              className={`px-4 py-1 rounded shadow-md text-gray-100 bg-purple-700 hover:bg-purple-900`}
              onClick={() => handleBtnMobile("previous")}
              disabled={context?.n === 10}
            >
              {"<<"}
            </button>
          </li>
          <li className="mx-2">
            <button
              className={`px-4 py-1 rounded shadow-md text-gray-100 bg-purple-700 hover:bg-purple-900`}
              onClick={() => handleBtnMobile("next")}
              disabled={context?.n === 100}
            >
              {">>"}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
