import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "../components/EditorsInsight";

const News = () => {
  const { news } = useLoaderData();
  const { _id, image_url, title, details, category_id } = news;
  return (
    <div>
      <h4 className="fw-semibold mb-4">Dragon News</h4>
      <div className="border rounded p-4">
        <img src={image_url} alt="" className="img-fluid mb-4" />
        <h4 className="fw-bold mb-4">{title}</h4>
        <p className="text-grey mb-4">{details}</p>
        <Link
          to={`/category/${category_id}`}
          className="bg-danger text-white px-4 py-2 text-decoration-none"
        >
          All news in this category
        </Link>
      </div>

      <EditorsInsight category_id={category_id} newsId={_id} />
    </div>
  );
};

export default News;
