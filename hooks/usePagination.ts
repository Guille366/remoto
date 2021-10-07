import { useCallback, useEffect, useState } from "react";
import range from "../utils/range";

const usePagination = (pagesLength: number, page: number) => {
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

  return { pagination, limitedPag, pagesTotal };
};

export default usePagination;
