import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/index.scss";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import {
  AccountProvider,
  AppContextProvider,
  CoinsContextProvider,
  NewsContextProvider,
  NFTContextProvider,
  TransactionsContextProvider,
} from "../contexts";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout): unknown => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <AccountProvider>
      <AppContextProvider>
        <ToastContainer />
        <TransactionsContextProvider>
          <CoinsContextProvider>
            <NewsContextProvider>
              <NFTContextProvider>
                {getLayout(<Component {...pageProps} />)}
              </NFTContextProvider>
            </NewsContextProvider>
          </CoinsContextProvider>
        </TransactionsContextProvider>
      </AppContextProvider>
    </AccountProvider>
  );
};

export default App;
