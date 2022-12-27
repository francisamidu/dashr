import clickOutsideRef from "./clickOutsideRef";
import Formatter from "./Formatter";
import redirect from "./redirect";
import renderBalances from "./renderBalances";
import renderBody from "./renderBody";
import renderHeader from "./renderHeader";
import renderUserMenu from "./renderUserMenu";
import renderUserToggle from "./renderUserToggle";
import uid from "./uid";

export {
  clickOutsideRef,
  redirect,
  renderHeader,
  renderBalances,
  renderBody,
  renderUserMenu,
  renderUserToggle,
  uid,
};
export const {
  formatBalances,
  formatCoins,
  formatCurrency,
  formatNFTBalances,
  formatDate,
  formatStats,
  formatTransactions,
  formatTimeRelative,
  formatNumber,
} = Formatter;
