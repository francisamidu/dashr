import Head from "next/head";
import React from "react";
import { Navbar } from ".";
import { useApp } from "../contexts/AppContext";

const Layout = ({ children }) => {
  const { name } = useApp();
  return (
    <>
      <Head>
        <title>{name} - Crypto dashboard</title>
        <meta name="description" content="Crypto dashboard for web3"></meta>
      </Head>
      {children}
    </>
  );
};

export default Layout;
