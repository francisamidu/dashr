import React, { useState } from "react";
import { Button, Logo } from "../components";
import { useAccount, useApp } from "../contexts";

import { FaUser as IUser, FaAt as IAt } from "react-icons/fa";
import Head from "next/head";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const login = () => {
  const { name } = useApp();
  const { setAccount } = useAccount();
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const handleSubmit = async () => {
    if (!user.username) {
      toast.error("Please provide username");
      return;
    }

    if (!user.email) {
      toast.error("Please provide email");
      return;
    }
  };
  return (
    <>
      <Head>
        <title>Sign In - {name}</title>
      </Head>
      <section className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
        <div className="col-start-1 col-end-2 flex flex-col justify-center py-5 sm:px-20 px-5">
          <Logo className="self-start justify-self-start" />
          <form
            className="flex-1 flex flex-col mt-10 sm:mt-20"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl mb-4 font-bold">Welcome to {name}</h1>
            <h2 className="text mb-6">
              Get started with Web3. Notice you need to have a crypto account
              and metamask installed!
            </h2>
            <div className="flex flex-col mb-10 relative">
              <label className="absolute bg-white py-1 px-2 -top-2 left-3 active:text-slate-800 text-[#777]">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-2 rounded-md w-full py-3 px-4 border-[1.5px] border-gray-200 placeholder:text-[#dbdbdb] outline-none text-slate-800 focus-within:border-slate-800 transition-color duration-200 ease-in-out"
                onChange={(e) =>
                  setUser({
                    ...user,
                    username: e.target.value,
                  })
                }
                placeholder="James Doe"
                value={user.username}
              />
              <IUser className="text-xl text-[#ccc] absolute top-6 right-3" />
            </div>
            <div className="flex flex-col mb-10 relative">
              <label className="absolute bg-white py-1 px-2 -top-2 left-3 active:text-slate-800 text-[#777]">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="mt-2 rounded-md w-full py-3 px-4 border-[1.5px] border-gray-200 placeholder:text-[#dbdbdb] outline-none text-slate-800 focus-within:border-slate-800 transition-color duration-200 ease-in-out"
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
                placeholder="user@example-site.com"
                value={user.email}
              />
              <IAt className="text-xl text-[#ccc] absolute top-6 right-3" />
            </div>
            <Button text="Sign In" className="w-full transform-none" />
          </form>
        </div>
        <div className="hidden col-start-2 col-end-3 login-aside sm:block">
          <div className="overlay flex flex-col justify-center py-14 px-20">
            <h3 className="text-4xl text-white font-bold w-full  sm:w-[65%]">
              Explore the next-gen Internet
            </h3>
            <h4 className="w-full text-white sm:w-[70%] mt-4">
              Discover new things, follow popular trends and become a part of
              the most revolutionary technology
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;
