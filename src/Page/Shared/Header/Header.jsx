import "./Header.css";
import Button from "react-bootstrap/Button";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-4">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

      <div className="d-flex mx-auto breaking-news p-4">
        <Button className="px-2" variant="danger">
          Latest
        </Button>
        <Marquee className="fs-3 text fw-bolder" speed={40}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
