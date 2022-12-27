import React from "react";
import { BsClipboard as ICardText } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { useApp } from "../contexts";
import { renderUserToggle, renderUserMenu } from "../helpers";
import { userOptions } from "../constants";

const Topnav = () => {
  const { address } = useApp();

  return (
    <div className="h-fit py-2 px-4 flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <div className="ml-2 sm:ml-0 flex flex-col sm:flex-row">
          <span className="hidden sm:block">Address:</span>
          <span className="sm:mx-2 mr-2 font-bold">{address}</span>
        </div>
        <ICardText className="text-md text cursor-pointer" />
      </div>
      <div className="hidden sm:flex flex-row items-center justify-center">
        <div className="mr-4">
          <Dropdown
            content={userOptions}
            customToggle={() =>
              renderUserToggle({ display: "Francis", image: "/bitcoin.jpg" })
            }
            render={(item, index) => renderUserMenu(item, index)}
          />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
