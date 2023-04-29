import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EditorsInsight = ({ category_id, newsId }) => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4001/api/categories/${category_id}`)
      .then((res) => res.json())
      .then((data) =>
        setNews(data.news.filter((i) => i._id !== newsId).slice(0, 3))
      )
      .catch((err) => console.error(err));
  }, [category_id]);
  return (
    <div className="my-4">
      <h4 className="fw-semibold mb-3">Editors Insight</h4>
      <div className="row g-3">
        {news.map((item) => (
          <div
            onClick={() => navigate(`/news/${item._id}`)}
            className="col-4"
            style={{ cursor: "pointer" }}
          >
            <img src={item.image_url} alt="" className="w-100 mb-3" />
            <h5 className="fw-semibold mb-4">{item.title}</h5>
            <p className="d-flex align-items-center g-3 text-grey">
              <FaRegCalendar />
              <span className="ms-3">
                {moment(item.author.published_date).format("MMM DD, YYYY")}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsInsight;
