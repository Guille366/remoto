import { ReactElement, useEffect } from "react";
import { useState } from "react";

import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";

const useFavIcon = (id: number) => {
  const [icon, setIcon] = useState<ReactElement>(<div />);

  const handleGetIcon = (id: number) => {
    const stringId = String(id);

    if (localStorage) {
      if (localStorage.getItem(stringId)) {
        setIcon(<AiFillHeart className="text-red-600" />);
        return;
      }
      setIcon(
        <AiOutlineHeart className="text-purple-700 hover:text-red-600" />
      );
      return;
    }
  };

  useEffect(() => {
    handleGetIcon(id);
  }, [id]);

  return { icon, handleGetIcon };
};

export default useFavIcon;
