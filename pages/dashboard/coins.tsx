import { NextComponentType } from "next";
import React from "react";
import { DashboardLayout, StatusCard } from "../../components";
import { CoinDetailed, Coin } from "../../components";
import { useCoins } from "../../contexts";
import { formatStats } from "../../helpers";

const Coins = () => {
  const { coins, stats } = useCoins();
  const ownedCoins = coins?.slice(3, 10);
  const status = formatStats(stats);
  return (
    <section className="p-4">
      <div className="mb-2">
        <div className="flex flex-row flex-wrap justify-center items-center text-slate-800 my-3">
          {status.map((item, index) => (
            <StatusCard status={item} key={index} index={index} page="Coins" />
          ))}
        </div>
        <h1 className="font-bold text-2xl mb-4">Owned Tokens</h1>
        <div className="flex flex-row flex-wrap items-center justify-center sm:justify-start">
          {ownedCoins.map((coin, index) => (
            <CoinDetailed coin={coin} key={index} />
          ))}
        </div>
      </div>
      <div className="mb-2">
        <h1 className="font-bold text-2xl mb-4">Popular Coins</h1>
        <div className="flex flex-row flex-wrap items-center">
          {coins.map((coin, index) => (
            <Coin coin={coin} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

Coins.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Coins;
