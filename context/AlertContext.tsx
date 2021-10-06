import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface AlertState {
  msg: string | null;
  active: boolean;
}

interface AlertTypes {
  alert: {
    msg: string | null;
    active: boolean;
  };
  setAlert: Dispatch<SetStateAction<AlertState>>;
}

export const AlertContext = createContext<AlertTypes | null>(null);

const AlertProvider: React.FC = ({ children }) => {
  const [alert, setAlert] = useState<AlertState>({ msg: null, active: false });

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
