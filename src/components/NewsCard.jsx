import moment from "moment";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const NewsCard = ({ news }) => {
  const { _id, author, image_url, rating, title, total_view, details } = news;
  return (
    <Card className="w-100 mb-4">
      <Card.Header>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <img
              src={author.img}
              alt=""
              className="rounded-circle"
              style={{ width: "2.5rem", height: "2.5rem" }}
            />
            <div>
              <h6 className="mb-2">{author.name}</h6>
              <p className="m-0 text-lightgrey" style={{ fontSize: ".8rem" }}>
                {moment(author.published_date).format("YYYY-MM-DD")}
              </p>
            </div>
          </div>
          <div className="text-grey">
            <FaRegBookmark className="me-3" />
            <FaShareAlt />
          </div>
        </div>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="p-3">
          <h5 className="mb-3 fw-bold">{title}</h5>
          <img src={image_url} alt="" className="rounded w-100 mb-4" />
          <p className="m-0 text-grey">{details.slice(0, 200)}...</p>
          <Link
            to={`/news/${_id}`}
            style={{ color: "#FF8C47" }}
            className="text-decoration-none fw-semibold"
          >
            Read More
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <StarRatings
                rating={rating.number}
                starRatedColor="#FF8C47"
                numberOfStars={5}
                name="rating"
                starDimension="24px"
              />
              <span className="text-grey ms-2">{rating.number}</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-grey">
              <FaEye />
              <span>{total_view}</span>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default NewsCard;
