import { NextComponentType } from "next";
import React from "react";
import { DashboardLayout, SwapTokensForm } from "../../components";

const SwapTokens = () => {
  return (
    <section className="p-4 flex flex-row items-center justify-center min-h-[70vh]">
      <SwapTokensForm />
    </section>
  );
};

SwapTokens.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default SwapTokens;
