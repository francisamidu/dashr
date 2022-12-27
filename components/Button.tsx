import React, { MouseEventHandler } from "react";

type ButtonProps = {
  icon?: JSX.Element;
  text: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  left?: boolean;
  right?: boolean;
  className?: string;
};
const Button = ({
  text,
  onClick,
  left = false,
  right = false,
  className,
  type = "button",
  icon,
}: ButtonProps) => {
  const handleClick = typeof onClick === "function" ? onClick : () => {};
  if (className) {
    return (
      <button
        className={`shadow-lg hover:shadow-blue-100 cursor-pointer w-max h-11 px-8 py-2 rounded-xl text-white font-bold text-sm flex flex-row items-center justify-center transition duration-500 outline-none bg-[#0074e7] hover:bg-[#0080ff] ${className} main-text`}
        onClick={handleClick}
        type={type}
      >
        {left && icon ? icon : null}
        {text}
        {right && icon ? icon : null}
      </button>
    );
  }
  return (
    <button
      className="hover:-translate-y-1 cursor-pointer w-max h-11 px-8 py-2 rounded-xl text-white flex flex-row items-center justify-center transition duration-500 outline-none font-bold text-sm bg-[#0074e7] hover:bg-[#0080ff] shadow-lg hover:shadow-blue-100 main-text"
      onClick={handleClick}
      type={type}
    >
      {text}
      {right && icon ? icon : null}
    </button>
  );
};

export default Button;
