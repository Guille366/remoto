import { ReactElement, useCallback, useEffect } from "react";
import { useState } from "react";

import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";

const useFavIcon = (id: number) => {
  const [icon, setIcon] = useState<ReactElement>(<div />);

  const handleGetIcon = useCallback((id: number) => {
    const stringId = String(id);

    if (localStorage) {
      if (localStorage.getItem(stringId)) {
        setIcon(<AiFillHeart className="text-yellow-600" />);
        return;
      }
      setIcon(
        <AiOutlineHeart />
      );
      return;
    }
  }, []);

  useEffect(() => {
    handleGetIcon(id);
  }, [id, handleGetIcon]);

  return { icon, handleGetIcon };
};

export default useFavIcon;
