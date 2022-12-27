import { format, formatDistance } from "date-fns";
import { ICoinDetailed, IStat } from "../types";
abstract class Formatter {
  static formatBalances() {}
  static formatCoins(coins: any[]) {
    // const newCoins:ICoinDetailed = coins.map((item) => JSON.parse(JSON.stringify({
    // })))
    // return newCoins
  }
  static formatCurrency(num: number | string) {
    const newNumber = Number(num);
    if (typeof newNumber === "number") {
      const formatter = new Intl.NumberFormat("en-Us", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return formatter.format(newNumber);
    } else {
      throw new Error(`${num} is not a number`);
    }
  }
  static formatDate(date: string | Date) {
    const newDate = new Date(date);
    if (!newDate) {
      throw new Error("Invalid date passed");
    }
    return format(newDate, "d/MM/yy");
  }
  static formatNFTBalances() {}
  static formatTransactions() {}
  static formatTimeRelative(date: string | Date) {
    const newDate = new Date(date);
    if (!newDate) {
      throw new Error("Invalid date passed");
    }
    const formattedTime = formatDistance(newDate, new Date(), {
      addSuffix: true,
    });
    return formattedTime;
  }
  static formatStats(stat: IStat) {
    const unwantedProps = ["base", "limit", "offset", "order"];
    let status: {
      title: string;
      count: string | number;
    }[] = [];
    for (let key of Object.keys(stat)) {
      let exists = false;
      let object = null;
      switch (key) {
        case "total": {
          object = {
            title: "Total",
            count: stat[key],
          };
          exists = status.includes(object);
          if (exists) break;
          status.push(object);
          object = {};
          break;
        }
        case "total24hVolume": {
          object = {
            title: "Total 24 Hr Volume",
            count: stat[key],
          };
          exists = status.includes(object);
          if (exists) break;
          status.push(object);
          object = {};
          break;
        }
        case "totalExchanges": {
          object = {
            title: "Total Exchanges",
            count: stat[key],
          };
          exists = status.includes(object);
          if (exists) break;
          status.push(object);
          object = {};
          break;
        }
        case "totalMarkets": {
          object = {
            title: "Total Markets",
            count: stat[key],
          };
          exists = status.includes(object);
          if (exists) break;
          status.push(object);
          object = {};
          break;
        }
        case "totalMarketCap": {
          object = {
            title: "Total Market Cap",
            count: stat[key],
          };
          exists = status.includes(object);
          if (exists) break;
          status.push(object);
          object = {};
          break;
        }
        default:
          break;
      }
    }
    return status;
  }
  static formatNumber(num: number | string) {
    const newNumber = Number(num);
    if (typeof newNumber === "number") {
      const formatter = new Intl.NumberFormat("en-Us", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return formatter.format(newNumber);
    } else {
      throw new Error(`${num} is not a number`);
    }
  }
}
export default Formatter;
