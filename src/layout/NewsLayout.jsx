import Footer from "../Page/Shared/Footer/Footer";
import Header from "../Page/Shared/Header/Header";
import React from "react";
import RightNAv from "../Page/Shared/RightNav/RightNAv";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNAv></RightNAv>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
        </div>
    );
};

export default NewsLayout;