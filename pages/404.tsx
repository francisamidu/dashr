import { Head } from "next/document";
import React from "react";
import { useApp } from "../contexts";

const NotFound = () => {
  const { name } = useApp();
  return (
    <>
      <Head>
        <title>404 Not Found - {name}</title>
      </Head>
      <section>
        <h1>Page Not Found</h1>
      </section>
    </>
  );
};

export default NotFound;
