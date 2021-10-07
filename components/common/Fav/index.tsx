import { memo } from "react";
import useFav from "../../../hooks/useFav";

const Fav = ({
  id,
  className = "",
  big,
}: {
  id: number;
  className?: string;
  big?: boolean;
}) => {
  const { icon, handleSaveId } = useFav(id);

  return (
    <button
      className={`${className} ${
        big ? "static" : "absolute"
      } right-0 top-0 p-2 text-xl transition-colors hover:text-red-600`}
      onClick={() => handleSaveId(id)}
    >
      {icon}
    </button>
  );
};

export default memo(Fav);
