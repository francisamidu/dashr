import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Loading, Sidebar, Topnav } from ".";
import { useApp } from "../contexts/AppContext";

const Layout = ({ children }) => {
  const { name } = useApp();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(true);
  useEffect(() => {}, []);
  return (
    <>
      {!authenticated ? (
        <Loading />
      ) : (
        <>
          <Head>
            <title>{name} - Crypto dashboard</title>
            <meta name="description" content="Crypto dashboard for web3"></meta>
          </Head>
          <section className="flex flex-row">
            <Sidebar />
            <section className="w-full">
              <Topnav />
              {children}
            </section>
          </section>
        </>
      )}
    </>
  );
};

export default Layout;
