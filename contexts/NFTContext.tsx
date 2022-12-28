import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { INFTItem } from "../types";

type nfts = {
  nfts: INFTItem[];
  getNFTs: () => Promise<any> | any;
};

const NFTContext = createContext<nfts>({ nfts: [], getNFTs: () => {} });

export const NFTContextProvider = ({
  children,
}: Partial<PropsWithChildren<ReactNode>>) => {
  const [nfts, setNFTs] = useState<nfts["nfts"]>([
    {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      amount: 1,
      avatar: "/dashr-logo.svg",
      image: "/bitcoin.jpg",
      name: "Bitcoin NFT",
      nftType: "ERC721",
      username: "Francis",
    },
    {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      amount: 15,
      avatar: "/dashr-logo.svg",
      image: "/ethereum.png",
      name: "Ethereum NFT",
      nftType: "ERC1155",
      username: "Francis",
    },
    {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      amount: 1,
      avatar: "/dashr-logo.svg",
      image: "/discussing-code.jpg",
      name: "Code NFT",
      nftType: "ERC721A",
      username: "Francis",
    },
    {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      amount: 1,
      avatar: "/dashr-logo.svg",
      image: "/nft.jpg",
      name: "Hardcore NFT",
      nftType: "ERC721",
      username: "Francis",
    },
    {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      amount: 1,
      avatar: "/dashr-logo.svg",
      image: "/nightbus.jpg",
      name: "Buss NFT",
      nftType: "ERC721",
      username: "Francis",
    },
  ]);

  const getNFTs = async () => {
    try {
    } catch (error) {}
  };

  useEffect(() => {}, []);

  return (
    <NFTContext.Provider value={{ nfts, getNFTs }}>
      {children}
    </NFTContext.Provider>
  );
};

export const useNFTs = () => useContext(NFTContext);
