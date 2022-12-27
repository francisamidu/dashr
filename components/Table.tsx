import React, { useEffect, useState } from "react";
import Link from "next/link";

type TableProps = {
  header: any[];
  renderHead: (item: string, index: number) => JSX.Element;
  body: any[];
  renderBody: (item: any, index: number) => JSX.Element;
  limit?: number;
  path?: string;
};
const Table = ({
  body,
  header,
  limit,
  renderBody,
  renderHead,
  path,
}: Partial<TableProps>) => {
  const initialDataShow = limit && body ? body.slice(0, limit) : body;
  const [data, setData] = useState(initialDataShow);

  useEffect(() => {
    const initialDataShow = limit && body ? body.slice(0, limit) : body;
    setData(initialDataShow);
  }, [body]);
  return (
    <section className="overflow-y-auto mt-5 p-3 shadow rounded-md text-slate-800">
      <h1 className="font-bold text-center py-3">Transactions</h1>
      <table className="py-3 rounded-md w-full min-w-[400px]">
        {header && renderHead ? (
          <thead className="bg-[#fbfbfb] w-full">
            <tr className="text-left">
              {header.map((item, index) => renderHead(item, index))}
            </tr>
          </thead>
        ) : null}
        {data && renderBody ? (
          <tbody>{data.map((item, index) => renderBody(item, index))}</tbody>
        ) : null}
      </table>
      {limit && path ? (
        <Link href={path} className="text-[#0074e7] text-center my-2 block">
          View All
        </Link>
      ) : null}
    </section>
  );
};

export default Table;
