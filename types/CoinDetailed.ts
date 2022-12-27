import { ICoin } from ".";

interface CoinDetailed extends ICoin {
  description: string;
  website: string;
}
export default CoinDetailed;
