import millify from "millify";
import { formatCurrency } from ".";
import { IBalance } from "../types";

const renderBalances = (item: IBalance) => {
  const { balanceInCrypto, balanceInFiat, currency, network, id } = item;
  console.log(item);
  return (
    <tr key={id} className="text-left text-inherit">
      <td className="col-start-1 col-end-2">{currency.toLocaleUpperCase()}</td>
      <td className="col-start-2 col-end-3">
        {millify(Number(balanceInCrypto))}
      </td>
      <td className="col-start-3 col-end-4">
        {formatCurrency(Number(balanceInFiat))}
      </td>
      <td className="col-start-4 col-end-5">{network}</td>
    </tr>
  );
};
export default renderBalances;
