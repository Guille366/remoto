import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";

const useLocalStorage = () => {
  const context = useContext(AlertContext);

  const handleSaveToStorage = (id: number) => {
    const stringId = String(id);

    if (!localStorage.getItem(stringId)) {
      localStorage.setItem(stringId, stringId);

      context?.setAlert({ msg: "Vaga favoritada.", active: true });
      return;
    }

    localStorage.removeItem(stringId);

    context?.setAlert({ msg: "Vaga removida dos favoritos.", active: true });

    return;
  };

  return { handleSaveToStorage };
};

export default useLocalStorage;
