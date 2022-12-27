import { NextComponentType } from "next";
import React, { useEffect } from "react";
import { DashboardLayout, Table } from "../../components";
import { renderBody, renderHeader } from "../../helpers";
import { headers } from "../../constants";
import { useTransactions } from "../../contexts";

const Transactions = () => {
  const { getTransactions, transactions } = useTransactions();

  useEffect(() => {
    getTransactions();
    return () => {};
  }, []);
  return (
    <main className="mt-5">
      <Table
        body={transactions}
        header={headers}
        renderBody={(item, index) => renderBody(item, index)}
        renderHead={(item, index) => renderHeader(item, index)}
      />
    </main>
  );
};

Transactions.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Transactions;
