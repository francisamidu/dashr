import React from "react";

type StatusCardProps = {
  status: {
    id?: string | number;
    icon?: JSX.Element;
    count: number | string;
    title: string;
  };
  index?: number;
  page: string;
};
const StatusCard = ({
  status: { count, icon, title },
  index,
  page,
}: StatusCardProps) => {
  return (
    <>
      {page === "Home" ? (
        <div
          className={`bg-white p-8 rounded-xl status-card flex flex-row overflow-hidden z-[1] border-[1px] border-[#f3f3f3] hover:border-transparent w-[400px] mb-3 sm:mb-0 sm:w-auto relative text-slate-800 ${
            index > 0 && "sm:ml-4"
          }`}
        >
          {icon}
          <div className="ml-4 z-[2]">
            <h4 className="font-bold text-3xl text-inherit">{count}</h4>
            <h5 className="font-bold text-[.9rem] text-inherit">{title}</h5>
          </div>
        </div>
      ) : (
        <div
          className={`bg-white py-8 px-5 rounded-xl status-card  overflow-hidden z-[1] border-[1px] border-[#f3f3f3] hover:border-transparent w-[300px] sm:w-[200px] mb-3 sm:mb-0 relative text-slate-800 ${
            index > 0 && "sm:ml-4"
          }`}
        >
          <div className="flex flex-col items-center">
            <h5 className="z-[10] capitalize text-1xl sm:text-[1rem] text-inherit">
              {title}
            </h5>
            <h4 className="z-[10] font-bold text-[1rem] sm:text-xl text-inherit">
              {count}
            </h4>
          </div>
        </div>
      )}
    </>
  );
};

export default StatusCard;
