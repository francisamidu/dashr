import React, { useEffect, useState } from "react";
import { NextComponentType } from "next";
import { DashboardLayout, StatusCard, Table } from "../../components";

import {
  IoCalendarOutline as ICalendar,
  IoWalletOutline as IWallet,
  IoLogoBitcoin as ITrade,
  IoTrendingUpOutline as IActivity,
} from "react-icons/io5";
import {
  formatCurrency,
  formatTimeRelative,
  renderBody,
  renderHeader,
  uid,
} from "../../helpers";
import { useAccount, useTransactions } from "../../contexts";
import { headers } from "../../constants";
import { ethers } from "ethers";

const Dashboard = () => {
  const { count, getTransactions, transactions } = useTransactions();
  const { setBalance } = useAccount();

  const [status, setStatus] = useState([
    {
      id: uid(),
      icon: (
        <IWallet className="p-3  text-inherit z-[2] rounded-full bg-[#ffffff70] text-[3.5rem]" />
      ),
      count: "0",
      title: "Account Balance",
    },
    {
      id: uid(),
      icon: (
        <IActivity className="p-3  text-inherit z-[2] rounded-full bg-[#ffffff70] text-[3.5rem]" />
      ),
      // count: millify(100_000),
      count: 100_000,
      title: "No of Transactions",
    },
    {
      id: uid(),
      icon: (
        <ICalendar className="p-3  text-inherit z-[2] rounded-full bg-[#ffffff70] text-[3.5rem]" />
      ),
      count: 20,
      title: "User Created",
    },
    {
      id: uid(),
      icon: (
        <ITrade className="p-3  text-inherit z-[2] rounded-full bg-[#ffffff70] text-[3.5rem]" />
      ),
      count: 0,
      title: "Tokens traded",
    },
  ]);

  return (
    <main className="px-6 sm:p-6">
      <h2 className="font-bold text-xl">Dashboard</h2>
      <div className="flex flex-row items-center mt-2 sm:mt-5">
        <div className="flex flex-row flex-wrap items-center text-slate-800">
          {status.map((item, index) => (
            <StatusCard status={item} key={item.id} index={index} page="Home" />
          ))}
        </div>
        <div className="mt-5">{/* Chart goes here */}</div>
      </div>
      <Table
        body={transactions}
        header={headers}
        limit={5}
        path="/dashboard/transactions"
        renderBody={(item, index) => renderBody(item, index)}
        renderHead={(item, index) => renderHeader(item, index)}
      />
    </main>
  );
};
Dashboard.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default Dashboard;
