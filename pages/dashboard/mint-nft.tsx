import { NextComponentType } from "next";
import Head from "next/head";
import React, { ChangeEvent, useState } from "react";
import { Button, DashboardLayout } from "../../components";
import { toast } from "react-toastify";

const Minting = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [royalty, setRoyalty] = useState(0);
  const [tokenUrl, setTokenUrl] = useState("");
  const handleChange = (event: ChangeEvent<any>) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!image) {
      toast.error("No Image provided");
      return;
    }
    if (!name) {
      toast.error("NFT name provided");
      return;
    }
    if (!description) {
      toast.error("NFT description provided");
      return;
    }

    // try {
    //   const imageFile: any = new Moralis.File(name, {
    //     base64: Buffer.from(image).toString(),
    //   });
    //   await imageFile.saveIPFS();
    //   const imageHash = imageFile.hash();
    //   const temp = {
    //     name,
    //     description,
    //     image: `/ipfs/${imageHash}`,
    //   };
    //   const metadata: any = new Moralis.File("metadata.json", {
    //     base64: Buffer.from(JSON.stringify(temp)).toString(),
    //   });
    //   await metadata.saveIPFS();
    //   const metadataHash = metadata.hash();

    //   const {
    //     status,
    //     data: {
    //       result: { tokenAddress, tokenId },
    //     },
    //   } = await Moralis.Plugins.rarible.lazyMint({
    //     chain: "rinkeby",
    //     userAddress: Moralis.User.current().get("ethAddress"),
    //     tokenType: "ERC721",
    //     tokenUri: `/ipfs/${metadataHash}`,
    //     supply: 1,
    //     royaltiesAmount: royalty,
    //   });
    //   if (status && status === 200) {
    //     toast.success("Token has been minted and available at rarible");
    //     setTokenUrl(
    //       `https://rinkeby.rarible.com/token/${tokenAddress}:${tokenId}`
    //     );
    //   }
    // } catch (error) {
    //   toast.error("Sorry action failed.")
    //   console.log(error)
    // }
  };
  return (
    <>
      <Head>
        <title>Mint NFTs - Crypto Dashboard</title>
      </Head>
      <section className="p-4 flex flex-row items-center justify-center min-h-[70vh]">
        <form
          className="rounded-xl w-[450px] shadow pb-6 bg-white"
          onSubmit={handleSubmit}
        >
          <h1 className="text-sm uppercase font-bold text-center bg-[#eee] p-3 rounded-t-xl">
            Mint your nft
          </h1>
          <div className="flex flex-col my-6 px-6 relative">
            <label className="absolute bg-white py-1 px-2 -top-2 left-3 active:text-slate-800 text-[#777]">
              Name
            </label>
            <input
              type="text"
              id="username"
              className="mt-2 rounded-md w-full py-3 px-4 border-[1.5px] border-gray-200 placeholder:text-[#dbdbdb] outline-none text-slate-800 focus-within:border-slate-800 transition-color duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
              placeholder="James Doe"
              value={name}
            />
          </div>
          <div className="flex flex-col my-6 px-6 relative">
            <label className="absolute bg-white py-1 px-2 -top-2 left-3 active:text-slate-800 text-[#777]">
              Description
            </label>
            <input
              type="text"
              id="email"
              className="mt-2 rounded-md w-full py-3 px-4 border-[1.5px] border-gray-200 placeholder:text-[#dbdbdb] outline-none text-slate-800 focus-within:border-slate-800 transition-color duration-200 ease-in-out"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="My cool nft collection"
              value={description}
            />
          </div>
          <div className="flex flex-col my-6 px-6 relative">
            <label className="absolute bg-white py-1 px-2 -top-2 left-3 active:text-slate-800 text-[#777]">
              Royalty (1 === 0.1%)
            </label>
            <input
              type="number"
              id="email"
              className="mt-2 rounded-md w-full py-3 px-4 border-[1.5px] border-gray-200 placeholder:text-[#dbdbdb] outline-none text-slate-800 focus-within:border-slate-800 transition-color duration-200 ease-in-out"
              onChange={(e) => setRoyalty(Number(e.target.value))}
              placeholder="My cool nft collection"
              value={royalty}
            />
          </div>
          <div className="flex flex-col my-6 px-6 relative">
            <input type="file" accept="image/*" onChange={handleChange} />
          </div>
          {tokenUrl && (
            <div className="flex flex-col">
              <label className="text-slate-800">Token URL</label>
              <a href={tokenUrl} target="_blank" rel="norefferer">
                {name}
              </a>
            </div>
          )}
          <div className="px-6 w-full">
            <Button
              text="Mint"
              className="w-full bg-[#0c0c0c] border-[#0c0c0c] text-[#fff] border-2 hover:bg-[#fff] hover:text-[#0c0c0c]  shadow-none"
            />
          </div>
        </form>
      </section>
    </>
  );
};

Minting.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Minting;
