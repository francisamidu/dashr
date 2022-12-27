import React from "react";
import Image from "next/image";
import { INFTItem } from "../types";
import millify from "millify";

type NFTItemProps = {
  nft: INFTItem;
  index: number;
  length: number;
};
const NFTItem = ({
  nft: { amount, avatar, image, name, nftType, username },
  index,
  length,
}: NFTItemProps) => {
  return (
    <div
      className={`rounded-md relative flex flex-col 
    sm:col-start-${index === 0 ? 1 : ++index} sm:col-end-${
        index === 0 ? 2 : length - ++index === 0 ? ++index : length
      } min-h-[150px] transition-colors duration-300 shadow sm:mr-3 mb-3 nft-item`}
    >
      <div className="py-3 flex flex-row items-center px-4">
        <Image
          alt="Item"
          src={avatar}
          width="30"
          height="30"
          className="rounded-full"
        />
        <span className="ml-3">@{username}</span>
      </div>
      <div className="flex flex-row justify-center place-center">
        <Image
          alt="Image"
          src={image}
          width="310"
          height="300"
          className="rounded-md"
        />
      </div>
      <div className="px-4 sm:text-left">
        <p className="text-xs font-bold uppercase my-2 text-slate-500">
          {nftType}
        </p>
        <h1 className="font-bold text-xl relative">{name}</h1>
        <p className="mt-2">
          Owned: <span className="font-bold">{millify(Number(amount))}</span>
        </p>
      </div>
    </div>
  );
};

export default NFTItem;
