import { useContext, useEffect } from "react";
import { AlertContext } from "../../../context/AlertContext";

const Alert = () => {
  const context = useContext(AlertContext);

  useEffect(() => {
    const clearAlert = setTimeout(() => {
      context?.setAlert({ msg: null, active: false });
    }, 1000);

    return () => {
      clearTimeout(clearAlert);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.alert.active === true]);

  return (
    <>
      {context?.alert.active && (
        <div className="fixed z-50 right-4 top-4 p-1 px-2 text-sm text-gray-200 rounded font-mono font-bold bg-purple-700">
          {context?.alert.msg}
        </div>
      )}
    </>
  );
};

export default Alert;
