import { useContext, useState, useEffect, memo } from "react";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { Context } from "../../../pages/_app";

const Fav = ({
  id,
  className = "",
  big,
}: {
  id: number;
  className?: string;
  big?: boolean;
}) => {
  const [icon, setIcon] = useState(<div />);

  const context = useContext(Context);

  const handleIcon = (id: number) => {
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
  const getIcon = (id: number) => {
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
    getIcon(id);
  }, [id]);

  return (
    <button
      className={`${className} ${
        big ? "static" : "absolute"
      } right-0 top-0 p-2 text-xl transition-colors hover:text-red-600`}
      onClick={() => handleIcon(id)}
    >
      {icon}
    </button>
  );
};

export default memo(Fav);
