import millify from "millify";
import { formatCurrency, formatDate } from ".";
import { ITransaction } from "../types";

const renderBody = (item: ITransaction, index: number) => {
  const { hash, blockNumber, date, from, network, to, price, value } = item;
  const trimmedHash = `
  ${hash.substring(0, 5)}.....${hash.substring(hash.length - 5)}
  `;
  const hashLink = () => {
    if (typeof window === "undefined") {
      return "";
    }
    switch (network.toLocaleLowerCase()) {
      case "bsc testnet": {
        return encodeURIComponent(`https://testnet.bscscan.io/hash/${hash}`);
      }
      case "ropsten": {
        return encodeURIComponent(`https://ropsten.etherscan.io/hash/${hash}`);
      }

      case "mumbai": {
        return encodeURIComponent(`https://mumbai.polygonscan.io/hash/${hash}`);
      }
      default: {
        return encodeURIComponent(`https://rinkeby.etherscan.io/hash/${hash}`);
      }
    }
  };
  const blockLink = () => {
    if (typeof window === "undefined") {
      return "";
    }
    switch (network.toLocaleLowerCase()) {
      case "bsc": {
        return encodeURIComponent(
          `https://testnet.bscscan.io/block-number/${blockNumber}`
        );
      }
      case "ropsten": {
        return encodeURIComponent(
          `https://ropsten.etherscan.io/block-number/${blockNumber}`
        );
      }

      case "mumbai": {
        return encodeURIComponent(
          `https://mumbai.polygonscan.io/block-number/${blockNumber}`
        );
      }
      default: {
        return encodeURIComponent(
          `https://rinkeby.etherscan.io/block-number/${blockNumber}`
        );
      }
    }
  };

  return (
    <tr key={index} className="text-left text-inherit">
      <td>
        <a href={hashLink()} className="col-start-1 col-end-2">
          {trimmedHash}
        </a>
      </td>
      <td>
        <a href={blockLink()} className="col-start-2 col-end-3">
          {blockNumber}
        </a>
      </td>
      <td className="col-start-3 col-end-4">{formatDate(date)}</td>
      <td className="col-start-4 col-end-5">
        {from === to ? "Outgoing" : "Incoming"}
      </td>
      <td className="col-start-6 col-end-7">{millify(Number(price))}</td>
      <td className="col-start-7 col-end-8">{formatCurrency(value)}</td>
    </tr>
  );
};
export default renderBody;
