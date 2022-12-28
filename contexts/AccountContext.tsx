import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type Account = {
  account: string;
  balance: string;
  setAccount: Dispatch<SetStateAction<string>>;
  setBalance: Dispatch<SetStateAction<string>>;
};
const AccountContext = createContext<Account>({
  account: "",
  balance: "",
  setAccount: () => {},
  setBalance: () => {},
});

export const AccountProvider = ({
  children,
}: Partial<PropsWithChildren<ReactNode>>) => {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");

  return (
    <AccountContext.Provider
      value={{
        account,
        balance,
        setAccount,
        setBalance,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);
