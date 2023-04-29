import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get(
        "https://news-dragon-sam.vercel.app/api/categories"
      );
      if (res.status === 200) {
        setCategories(res.data.categories);
      }
    };
    fetchCategory();
  }, []);

  const handleNewsCategory = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <div>
      <h4 className="mb-3 fw-semibold">All Category</h4>
      <h5 className="px-4 py-3 mb-3 bg-darkgrey rounded fw-semibold">
        National News
      </h5>
      <ul className="list-unstyled">
        {categories.map((category) => (
          <li
            onClick={() => handleNewsCategory(category.id)}
            key={category.id}
            className={`px-4 py-3 h5 ${
              params?.id === category.id ? "text-grey" : "text-lightgrey"
            }`}
            style={{ cursor: "pointer" }}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
