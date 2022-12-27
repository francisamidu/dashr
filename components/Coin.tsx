import React from "react";
import { ICoinDetailed as ICoin } from "../types";
import Image from "next/image";
import millify from "millify";

type CoinProps = {
  coin: Partial<ICoin>;
};
const Coin = ({ coin }: CoinProps) => {
  const { icon, name, rank, dailyChange, marketCap, price, website } = coin;
  return (
    <div className="sm:w-auto min-w-[320px] w-full shadow rounded-md sm:mr-3 mb-3">
      <a href={`https:${website}`} className="flex flex-col">
        <div className="flex flex-row items-center justify-between border-b-[1.5px] border-[#eee] py-3 px-5">
          <h1>
            {rank}. {name}
          </h1>
          <Image
            alt="Icon"
            src={icon}
            width="30"
            height="30"
            layout="intrinsic"
          />
        </div>
        <div className="p-5">
          <p className="mb-1">
            Price: <span className="font-bold">{millify(Number(price))}</span>
          </p>
          <p className="mb-1">
            Market Cap:{" "}
            <span className="font-bold">{millify(Number(marketCap))}</span>
          </p>
          <p className="mb-1">
            Daily Change:{" "}
            <span className="font-bold">{millify(Number(dailyChange))}%</span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default Coin;
