import Footer from "../Page/Shared/Footer/Footer";
import Header from "../Page/Shared/Header/Header";
import LeftNav from "../Page/Shared/LeftNav/LeftNav";
import NavigationBar from "../Page/Shared/NavigationBar/NavigationBar";
import React from "react";
import RightNAv from "../Page/Shared/RightNav/RightNAv";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
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

export default Main;
