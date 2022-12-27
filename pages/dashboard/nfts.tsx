import { NextComponentType } from "next";
import React from "react";
import { DashboardLayout, NFTItem } from "../../components";
import { useNFTs } from "../../contexts";

const NFT = () => {
  const { nfts } = useNFTs();
  return (
    <section className="p-4">
      <h1 className="font-bold text-2xl mb-4">Owned NFTs</h1>
      <div className="nft-list min-h-screen pt-5 mt-5 grid w-full">
        {nfts.map((item, index) => (
          <NFTItem
            nft={item}
            key={`${item.address}-${item.name}-${item.username}`}
            index={index}
            length={nfts.length}
          />
        ))}
      </div>
    </section>
  );
};

NFT.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default NFT;
