import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { uid } from "../helpers";
import { ICoinDetailed, IStat } from "../types";
import { getCoins } from "../services/Api";
import { toast } from "react-toastify";

interface CoinExtended extends ICoinDetailed {
  id: string;
}
type CoinResponse = {
  coins: Partial<ICoinDetailed>[];
  stats: IStat;
};
const CoinsContext = createContext<{ coins: CoinExtended[]; stats: IStat }>({
  coins: [],
  stats: null,
});

export const CoinsContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>) => {
  const [coins, setCoins] = useState<CoinExtended[]>([
    {
      id: uid(),
      amount: 700,
      description: "This is bitcoin",
      marketCap: "12000000000000",
      dailyChange: 10.1,
      price: "750000",
      name: "Bitcoin",
      icon: "/ethereum.png",
      rank: 1,
      symbol: "BTC",
      website: "www.bitcoin.org",
    },
    {
      id: uid(),
      amount: 350,
      description: "This is ethereum",
      marketCap: "140000000000",
      dailyChange: 2.51,
      price: "2400",
      name: "Ethereum",
      icon: "/ethereum.png",
      rank: 2,
      symbol: "ETH",
      website: "www.ethereum.org",
    },
    {
      id: uid(),
      amount: 350,
      description: "This is Litecoin",
      name: "Litecoin",
      marketCap: "13242520000",
      dailyChange: 3.5,
      price: "1700",
      icon: "/ethereum.png",
      rank: 3,
      symbol: "LIC",
      website: "www.litecoin.org",
    },
    {
      id: uid(),
      amount: 350,
      description: "This is Solana",
      marketCap: "153575220000",
      dailyChange: 2.1,
      price: "1000",
      name: "Solana",
      icon: "/ethereum.png",
      rank: 4,
      symbol: "SOL",
      website: "www.solana.org",
    },
    {
      id: uid(),
      amount: 350,
      description: "This is Polygon",
      marketCap: "15552550000",
      dailyChange: 3.5,
      price: "1700",
      name: "Polygon",
      icon: "/ethereum.png",
      rank: 5,
      symbol: "POL",
      website: "www.polygon.org",
    },
    {
      id: uid(),
      amount: 350,
      description: "This is Polkadot",
      name: "Polkadot",
      marketCap: "132453200",
      dailyChange: 1.5,
      price: "700",
      icon: "/ethereum.png",
      rank: 6,
      symbol: "DOT",
      website: "www.polkadot.org",
    },
    {
      id: uid(),
      amount: 350,
      description: "This is Cardano",
      marketCap: "3555520000",
      dailyChange: 3.5,
      price: "300",
      name: "Cardano",
      icon: "/ethereum.png",
      rank: 7,
      symbol: "CAD",
      website: "www.tether-usdt.org",
    },
    {
      id: uid(),
      amount: 350,
      description: "This is Ripple",
      marketCap: "354354000",
      dailyChange: 41.5,
      price: "200",
      name: "Ripple",
      icon: "/ethereum.png",
      rank: 8,
      symbol: "XRP",
      website: "www.ripple.org",
    },
    {
      id: uid(),
      amount: 350,
      description: "This is Avalanche",
      marketCap: "345344510",
      dailyChange: 13.5,
      price: "100",
      name: "Avalanche",
      icon: "/ethereum.png",
      rank: 9,
      symbol: "AVAX",
      website: "www.avalanche.org",
    },
    {
      id: uid(),
      amount: 350,
      description: "This is Fantom",
      marketCap: "1322520000",
      dailyChange: 3.5,
      price: "75",
      name: "Fantom",
      icon: "/ethereum.png",
      rank: 10,
      symbol: "FAN",
      website: "www.fantom.org",
    },
  ]);
  const [stats, setStats] = useState<IStat>({
    total: 0,
    total24hVolume: 0,
    totalExchanges: 0,
    totalMarketCap: 0,
    totalMarkets: 0,
  });

  useEffect(() => {
    const queryCoins = async () => {
      try {
        const data: CoinResponse = await getCoins();
        // const coins = formatCoins(data.coins)
        // setStats(data.stats);
        console.log(data);
      } catch (error) {
        toast.error("Failed to get coins");
        console.log(error);
      }
    };
  }, []);

  return (
    <CoinsContext.Provider value={{ coins, stats }}>
      {children}
    </CoinsContext.Provider>
  );
};

export const useCoins = () => useContext(CoinsContext);
