import React from "react";
import { Button } from ".";
import { redirect } from "../helpers";
import { Logo } from ".";

const Navbar = () => {
  return (
    <section className="md:max-w-screen-lg md:mx-auto">
      <nav className="p-3 flex flex-row justify-between items-center">
        <Logo />
        <Button
          text="Login"
          className="btn-blue"
          onClick={() => redirect("/login")}
        />
      </nav>
    </section>
  );
};

export default Navbar;
