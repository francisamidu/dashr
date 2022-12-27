import { NextComponentType } from "next";
import React from "react";
import { DashboardLayout, NewsItem } from "../../components";
import { useNews } from "../../contexts";

const News = () => {
  const { news } = useNews();
  return (
    <section className="p-4">
      <h1 className="font-bold text-2xl mb-4">Top Crypto News</h1>
      <div className="news-list min-h-screen pt-5 mt-5 grid w-full">
        {news.map((item, index) => (
          <NewsItem
            item={item}
            key={item.id}
            index={index}
            length={news.length}
          />
        ))}
      </div>
    </section>
  );
};

News.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default News;
