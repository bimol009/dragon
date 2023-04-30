import EditorsInsight from "./EditorsInsight/EditorsInsight";
import Footer from "../../../../Shared/Footer/Footer";
import Header from "../../../../Shared/Header/Header";
import React from "react";
import RightNAv from "../../../../Shared/RightNav/RightNAv";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const News = () => {
  const newsLoad = useLoaderData();
  const { image_url, title, details, category_id } = newsLoad;
  return (
    <div>
      <Card className="mt-4">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft></FaArrowLeft> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default News;
