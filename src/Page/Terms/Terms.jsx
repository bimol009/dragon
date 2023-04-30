import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container className="text-center">
      <h2>Terms and condition</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iure
        velit sequi magni quisquam dolore libero illum nemo quis voluptas.
      </p>

<p>Go Back to<Link to="/register"> Register</Link></p>

    </Container>
  );
};

export default Terms;
