import React, {
  createContext,
  useEffect,
  useState,
  PropsWithChildren,
  ReactNode,
  useContext,
} from "react";
import { uid } from "../helpers";
import { INewsItem } from "../types";

type News = {
  news: INewsItem[];
};
const NewsContext = createContext<News>({
  news: [],
});

export const NewsContextProvider = ({
  children,
}: Partial<PropsWithChildren<ReactNode>>) => {
  const [news, setNews] = useState<News["news"]>([
    {
      id: uid(),
      category: "Crypto",
      datePublished: new Date("2022-5-13").toDateString(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem voluptate necessitatibus quas, porro accusamus possimus deserunt dolorum nesciunt eligendi odio, placeat inventore assumenda magni sequi, saepe corporis obcaecati nihil!",
      name: "It is possible to invest in Bitcoin",
      newsUrl: "https://www.msn.com/en-us/news/crypto",
      providerName: "MSN",
      providerThumbnail: "/dashr-logo.svg",
      thumbnail: "/bitcoin.jpg",
      videoUrl: "amazonaws.bitcoin-crypto.mp4",
    },
    {
      id: uid(),
      category: "Crypto",
      datePublished: new Date("2022-5-7").toDateString(),
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo dignissimos repellendus inventore omnis nulla velit error praesentium excepturi cupiditate dolores ipsam fugiat, minima et, similique optio ducimus quia hic.",
      name: "It is possible to invest in Ethereum",
      newsUrl: "https://www.msn.com/en-us/news/crypto",
      providerName: "MSN",
      providerThumbnail: "/dashr-logo.svg",
      thumbnail: "/ethereum.png",
      videoUrl: "amazonaws.ethereum-crypto.mp4",
    },
    {
      id: uid(),
      category: "NFT",
      datePublished: new Date("2022-5-1").toDateString(),
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo dignissimos repellendus inventore omnis nulla velit error praesentium excepturi cupiditate dolores ipsam fugiat, minima et, similique optio ducimus quia hic.",
      name: "It is possible to invest in NFTs",
      newsUrl: "https://www.msn.com/en-us/news/crypto",
      providerName: "MSN",
      providerThumbnail: "/dashr-logo.svg",
      thumbnail: "/nft.jpg",
      videoUrl: "amazonaws.nft-crypto.mp4",
    },
    {
      id: uid(),
      category: "NFT",
      datePublished: new Date("2022-5-14").toDateString(),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non impedit accusamus, accusantium provident quasi mollitia sunt dicta quidem minus, nisi aliquid molestiae? Alias molestiae earum laboriosam numquam at autem ipsum?",
      name: "It is possible to invest in NFTs",
      newsUrl: "https://www.msn.com/en-us/news/crypto",
      providerName: "MSN",
      providerThumbnail: "/dashr-logo.svg",
      thumbnail: "/nightbus.jpg",
      videoUrl: "amazonaws.nft-crypto.mp4",
    },
    {
      id: uid(),
      category: "Analytics",
      datePublished: new Date("2022-5-12").toDateString(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis quia illo, autem at tempore itaque velit saepe? Consectetur aspernatur non voluptate voluptates perferendis dolore recusandae suscipit, amet ab distinctio!",
      name: "It is possible to invest in NFTs",
      newsUrl: "https://www.msn.com/en-us/news/crypto",
      providerName: "MSN",
      providerThumbnail: "/dashr-logo.svg",
      thumbnail: "/people-comparing-analytics.jpg",
      videoUrl: "amazonaws.nft-crypto.mp4",
    },
    {
      id: uid(),
      category: "NFT",
      datePublished: new Date("2022-5-4").toDateString(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis quia illo, autem at tempore itaque velit saepe? Consectetur aspernatur non voluptate voluptates perferendis dolore recusandae suscipit, amet ab distinctio!",
      name: "It is possible to invest in Post NFTs",
      newsUrl: "https://www.msn.com/en-us/news/crypto",
      providerName: "MSN",
      providerThumbnail: "/dashr-logo.svg",
      thumbnail: "/posts.jpg",
      videoUrl: "amazonaws.nft-crypto.mp4",
    },
    {
      id: uid(),
      category: "Analytics",
      datePublished: new Date("2022-5-5").toDateString(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis quia illo, autem at tempore itaque velit saepe? Consectetur aspernatur non voluptate voluptates perferendis dolore recusandae suscipit, amet ab distinctio!",
      name: "It is possible to invest in Post Analyticss",
      providerName: "MSN",
      providerThumbnail: "/dashr-logo.svg",
      newsUrl: "https://www.msn.com/en-us/news/crypto",
      thumbnail: "/group-analysis.jpg",
      videoUrl: "amazonaws.nft-crypto.mp4",
    },
  ]);

  return (
    <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
