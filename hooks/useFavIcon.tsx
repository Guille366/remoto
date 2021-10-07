import { ReactElement, useContext, useEffect } from "react";
import { useState } from "react";

import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { AlertContext } from "../context/AlertContext";

const useFavIcon = (id: number) => {
  const [icon, setIcon] = useState<ReactElement>(<div />);

  const context = useContext(AlertContext);

  const handleSaveId = (id: number) => {
    const stringId = String(id);

    if (!localStorage.getItem(stringId)) {
      localStorage.setItem(stringId, stringId);
      setIcon(<AiFillHeart className="text-red-600" />);

      context?.setAlert({ msg: "Vaga favoritada.", active: true });
      return;
    }

    localStorage.removeItem(stringId);
    setIcon(<AiOutlineHeart className="text-purple-700 hover:text-red-600" />);

    context?.setAlert({ msg: "Vaga removida dos favoritos.", active: true });

    return;
  };
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

  return { icon, handleSaveId };
};

export default useFavIcon;
