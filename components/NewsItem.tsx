import React from "react";
import Image from "next/image";
import { INewsItem } from "../types";
import { formatTimeRelative } from "../helpers";
import { BsClock as IClock } from "react-icons/bs";

const NewsItem = ({
  item: {
    category,
    datePublished,
    description,
    name,
    newsUrl,
    thumbnail,
    providerName,
    providerThumbnail,
  },
  index,
  length,
}: {
  item: INewsItem;
  index: number;
  length: number;
}) => {
  return (
    <a
      href={newsUrl}
      className={`rounded-md relative flex flex-col justify-between 
       sm:col-start-${index === 0 ? 1 : ++index} sm:col-end-${
        index === 0 ? 2 : length - ++index === 0 ? ++index : length
      } min-h-[150px] transition-colors duration-300 mb-4 shadow sm:mr-3 mb-3 news-item`}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={thumbnail}
        width="350"
        height="300"
        layout="intrinsic"
        className="rounded-t-md"
      />
      <div className="p-3 sm:text-left">
        <p className="text-xs font-bold uppercase my-2 text-slate-500">
          {category}
        </p>
        <h1 className="font-bold text-xl relative">{name}</h1>
        <p className="mt-5 sm:mt-0 text-slate-600">
          {description.length > 100
            ? description.substring(0, 100)
            : description}
          ....
        </p>
        <div className="flex flex-row items-center justify-between mt-3 sm:mt-5">
          <div className="flex flex-row items-center">
            <Image
              src={providerThumbnail}
              width="30"
              height="30"
              layout="intrinsic"
              className="rounded-full"
            />
            <span className="capialize ml-3">{providerName}</span>
          </div>
          <p>
            <IClock className="hidden sm:block" />
            <span className="ml-3">{formatTimeRelative(datePublished)}</span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default NewsItem;
