import { redirect } from "../helpers";
import React, { useEffect, useRef } from "react";
import { useApp } from "../contexts";
import { Button, Navbar } from ".";
import Image from "next/image";
import Head from "next/head";

const Header = () => {
  const { name } = useApp();
  const headerRef = useRef();
  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>{name} - Crypto dashboard</title>
        <meta name="description" content="Crypto dashboard for web3"></meta>
      </Head>
      <section className="min-h-screen h-full">
        <Navbar />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl mt-10 w-4/5 sm:w-3/5 text-center">
            Your Gateway to the next generation internet. Web3
          </h1>
          <h2 className="text-md text-[#141d24] my-5 w-4/5 sm:w-2/5 text-center mx-auto">
            Explore the crypto world. Mint NFTs, see your transactions. {name}{" "}
            is the your trusted friend in all of Web3.
          </h2>
          <Button
            text="Get Started"
            onClick={() => redirect("/login")}
            className="my-4 h-11 btn"
          />
          <Image
            alt="Dashboard"
            width="650"
            height="500"
            className="bg-transparent"
            src="/dashboard.jpg"
          />
        </div>
      </section>
    </>
  );
};

export default Header;
