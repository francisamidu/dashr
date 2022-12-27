type Balance = {
  id: number | string;
  currency: string;
  balanceInCrypto: string | number;
  balanceInFiat: string | number;
  network: string;
};
export default Balance;
