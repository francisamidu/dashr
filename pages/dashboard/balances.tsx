import { NextComponentType } from "next";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { DashboardLayout, Table } from "../../components";
import { useAccount } from "../../contexts";
import { renderBalances, renderHeader, uid } from "../../helpers";
import { IBalance } from "../../types";
import { toast } from "react-toastify";

const Balances = () => {
  const { account } = useAccount();
  const [balances, setBalances] = useState<IBalance[]>([
    {
      balanceInCrypto: 1000000,
      balanceInFiat: 0,
      currency: "ETH",
      id: uid(),
      network: "Ropsten",
    },
    {
      balanceInCrypto: 1000000,
      balanceInFiat: 0,
      currency: "ETH",
      id: uid(),
      network: "Rinkeby",
    },
    {
      balanceInCrypto: 1000000,
      balanceInFiat: 0,
      currency: "MATIC",
      id: uid(),
      network: "Polygon Mumbai",
    },
    {
      balanceInCrypto: 1000000,
      balanceInFiat: 0,
      currency: "BNB",
      id: uid(),
      network: "BSC Testnet",
    },
  ]);

  const headers = [
    "Currency",
    "Balance In Crypto",
    "Balance In Fiat",
    "network",
  ];
  return (
    <main className="mt-5">
      <Table
        body={balances}
        header={headers}
        renderBody={(item, index) => renderBalances(item)}
        renderHead={(item, index) => renderHeader(item, index)}
      />
    </main>
  );
};

Balances.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Balances;
