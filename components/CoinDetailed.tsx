import React from "react";
import { ICoinDetailed } from "../types";
import Image from "next/image";
import millify from "millify";
import Button from "./Button";
import { redirect } from "../helpers";

type CoinProps = {
  coin: Partial<ICoinDetailed>;
};
const CoinDetailed = ({ coin }: CoinProps) => {
  const { icon, name, amount, description, website } = coin;
  return (
    <div className="w-[300px] min-w-[300px] sm:w-[auto] shadow rounded-md sm:mr-3 mb-3">
      <div className="flex flex-row items-center">
        <Image
          alt="Icon"
          src={icon}
          width="300"
          height="275"
          className="rounded-t-md"
        />
      </div>
      <div className="p-5 text-center sm:text-left">
        <h1 className="font-bold text-xl text-center my-3 coin-name relative">
          {name}
        </h1>
        <p className="mt-7 sm:mt-0">
          {description.length > 100
            ? description.substring(0, 100)
            : description}
          ....
        </p>
        <p>
          Owned: <span className="font-bold">{millify(Number(amount))}</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center my-3">
          <Button
            text="Swap Token"
            onClick={() => redirect(`/swap-tokens?token=${name}`)}
            className="mb-3 sm:mb-0 sm:mr-2 btn-blue h-11 transform-none"
          />
          <Button
            text="Read More"
            onClick={() => window.location.assign(website)}
            className="sm:ml-2 btn-bordered h-11"
          />
        </div>
      </div>
    </div>
  );
};

export default CoinDetailed;
