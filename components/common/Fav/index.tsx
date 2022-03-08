import { memo } from "react";
import useFavIcon from "../../../hooks/useFavIcon";
import useLocalStorage from "../../../hooks/useLocalStorage";

const Fav = ({
  id,
  className = "",
  big,
  hidden,
  light,
}: {
  id: number;
  className?: string;
  big?: boolean;
  hidden?: boolean;
  light?: boolean;
}) => {
  const { icon, handleGetIcon } = useFavIcon(id);
  const { handleSaveToStorage } = useLocalStorage();

  return (
    <button
      className={`${className} ${
        big ? "static" : "absolute"
        }
        ${hidden ? "md:hidden flex" : "flex"}
        ${light ? "text-yellow-600 hover:text-yellow-600" : "text-violet-700 hover:text-yellow-600"}
      right-0 top-0 p-2 text-xl transition-colors `}
      onClick={() => {
        handleSaveToStorage(id);
        handleGetIcon(id);
      }}
    >
      {icon}
    </button>
  );
};

export default memo(Fav);
