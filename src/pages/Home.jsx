import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/newsCard";

const Home = () => {
  const { news } = useLoaderData();

  return (
    <div>
      <h4 className="fw-semibold mb-3">Dragon News Home</h4>
      {news.length === 0 && (
        <p className="py-4 text-center text-danger">No news by this category</p>
      )}
      {news.map((item) => (
        <NewsCard key={item._id} news={item} />
      ))}
    </div>
  );
};

export default Home;
