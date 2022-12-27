import { ethers } from "ethers";
import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  ReactNode,
} from "react";
import { toast } from "react-toastify";
import { formatTimeRelative } from "../helpers";
import { IMoralisTransaction } from "../types";
import { useAccount } from "./AccountContext";

const TransactionsContext = createContext<{
  transactions: IMoralisTransaction[];
  getTransactions: () => any;
  count: number;
}>({
  transactions: [],
  getTransactions: () => {},
  count: 0,
});

export const TransactionsContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>) => {
  const { account: userAccount } = useAccount();
  const [transactionCount, setTransactionCount] = useState(0);
  const [transactions, setTransactions] = useState<
    IMoralisTransaction[] | any[]
  >([]);
  const getTransactions = async () => {
    try {
      
    } catch (error) {
      console.log(error);
      toast.error("Couldnt fetch transactions");
    }
  };

  return (
    <TransactionsContext.Provider
      value={{ count: transactionCount, transactions, getTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionsContext);
