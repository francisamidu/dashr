import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { IAppValues } from "../types";

const AppContext = createContext<
  IAppValues & {
    setData: Dispatch<SetStateAction<IAppValues>>;
  }
>({
  address: "0x00",
  balance: 0,
  name: "",
  year: 0,
  setData: () => {},
});

export const AppContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>) => {
  const [data, setData] = useState({
    address: "0x000000000000000001010000",
    balance: 0,
    name: "Dashr",
    year: new Date().getFullYear(),
  });

  return (
    <AppContext.Provider value={{ ...data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
