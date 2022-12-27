import React from "react";
import { useApp } from "../contexts";

const Footer = () => {
  const { name, year } = useApp();
  return (
    <footer className="py-5 px-10">
      <div className="md:max-w-screen-lg md:mx-auto">
        <p className="font-bold">{name}</p>
        <p className="mt-4">
          &copy;{year} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
