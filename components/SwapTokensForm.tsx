import React, { useState } from "react";
import Image from "next/image";

import {
  IoChevronDown as IDown,
  IoArrowDown as IArrowDown,
  IoArrowUp as IArrowUp,
} from "react-icons/io5";
import { Button } from ".";

const SwapTokensForm = () => {
  const [tokenA, setTokenA] = useState({
    amount: "0",
    tokenName: "Eth",
  });
  const [tokenB, setTokenB] = useState({
    amount: "0",
    tokenName: "BNB",
  });
  return (
    <form className="rounded-xl shadow w-[450px] bg-white">
      <h1 className="text-center rounded-t-xl text-sm uppercase bg-light-gray p-7 font-bold">
        Swap Tokens
      </h1>
      <div className="p-5 text-xs uppercase">
        <div className="mb-6 rounded-xl py-3 px-5 bg-light-gray flex flex-row justify-between">
          <div className="flex flex-col w-1/2">
            <label className="text-inherit">Input</label>
            <input
              className="mt-4 py-2 px-2 border-b-[1.5px] border-transparent focus:border-[#eee] bg-transparent text-inherit"
              placeholder="0"
            />
          </div>
          <div className="flex flex-col w-1/2 justify-between items-end">
            <label className="text-inherit">
              Balance:
              <span className="font-bold text-sm ml-2">00.5457</span>
            </label>
            <div className="flex flex-row items-center justify-center cursor-pointer">
              <Image alt="Image" src="/ethereum.png" width="25" height="25" />
              <span className="uppercase font-bold text-sm text-inherit mx-2">
                Eth
              </span>
              <IDown className="text-xl text-inherit" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center my-3 hover:cursor-pointer">
          <div className="flex flex-row items-center justify-center bg-[#f0f0f0] py-3 px-1 rounded-full">
            <IArrowUp className="text-inherit" />
            <IArrowDown className="text-inherit" />
          </div>
        </div>
        <div className="mb-6 rounded-xl py-3 px-5 bg-light-gray flex flex-row justify-between">
          <div className="flex flex-col w-1/2">
            <label className="text-inherit">Input</label>
            <input
              className="mt-4 py-2 px-2 border-b-[1.5px] border-transparent focus:border-[#eee] bg-transparent text-inherit"
              placeholder="0"
            />
          </div>
          <div className="flex flex-col w-1/2 justify-between items-end">
            <label className="text-inherit">
              Balance:
              <span className="font-bold text-sm ml-2">00.5457</span>
            </label>
            <div className="flex flex-row items-center justify-center cursor-pointer">
              <Image alt="Image" src="/ethereum.png" width="25" height="25" />
              <span className="uppercase sm font-bold text-inherit mx-2">
                Eth
              </span>
              <IDown className="text-xl text-inherit" />
            </div>
          </div>
        </div>
        <div className="w-full mb-5 flex flex-row items-center justify-center">
          <Button text="Swap" type="submit" className="w-full h-11 btn-blue" />
        </div>
      </div>
    </form>
  );
};

export default SwapTokensForm;
