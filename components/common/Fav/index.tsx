import { memo } from "react";
import useFavIcon from "../../../hooks/useFavIcon";
import useLocalStorage from "../../../hooks/useLocalStorage";

const Fav = ({
  id,
  className = "",
  big,
  hidden,
}: {
  id: number;
  className?: string;
  big?: boolean;
  hidden?: boolean;
}) => {
  const { icon, handleGetIcon } = useFavIcon(id);
  const { handleSaveToStorage } = useLocalStorage();

  return (
    <button
      className={`${className} ${
        big ? "static" : "absolute"
        }
        ${hidden ? "md:hidden flex" : "flex"} 
      right-0 top-0 p-2 text-xl transition-colors hover:text-red-600`}
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
