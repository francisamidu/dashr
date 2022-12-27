import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "../contexts";

type LogoProps = {
  className?: string;
};
const Logo = ({ className }: LogoProps) => {
  const { name } = useApp();
  return (
    <Link
      href="/"
      className={`w-fit flex flex-row items-center ${className || ""}`}
    >
      <Image alt="logo" src="/dashr-logo.svg" width="30" height="30" />
      <h1 className="text-2xl font-bold ml-2">{name}</h1>
    </Link>
  );
};

export default Logo;
