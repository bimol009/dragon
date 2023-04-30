import "./NewsCard.css";
import Rating from "react-rating";
import React from "react";
import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <div>
      <Card className=" mb-4 mt-4">
        <Card.Header className="">
          <div className="d-flex icon-sec align-items-center">
            <Image className="img-sec " src={author?.img} roundedCircle />
            <div className="ms-3 mb-0 flex-grow-1 ">
              <h5 className="mb-0">{author?.name}</h5>
              <p className="mb-0">
                {moment(author?.published_date).format("yyyy-MM-DD")}
              </p>
            </div>
            <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="d-flex icon-sec align-items-center">
            <Rating
            placeholderRating={rating?.number}
            emptySymbol=
            {<FaRegStar></FaRegStar>  }
            readonly
            placeholderSymbol=
            {<FaStar className="text-warning"></FaStar>}
            fullSymbol=
            {<FaStar></FaStar>}>
        
            </Rating>
            <div className="flex-grow-1 ms-1">
              <span>{rating?.number}</span>
            </div>
            <div>
              <FaEye></FaEye> {total_view}
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
