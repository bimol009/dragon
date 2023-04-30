import React, { useContext, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);

  const { forgotPass, signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const emailRef = useRef();

  const location = useLocation();

  const from = location?.state?.from.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;

        if (!loggedUser.emailVerified) {
          alert("please verified");
          navigate(from, { replace: true });
        }

        forgotPass();
        form.reset("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const passwordReset = () => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      alert("please provide your email for forget password");
    }
    forgotPass(email)
      .then(() => {
        alert("please recheck");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container className="w-25 mx-auto">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            ref={emailRef}
            required
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type={show ? "text" : "password"}
            required
            placeholder="Password"
          />
          <p
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <button className="btn btn-link">Hide Pass</button>
            ) : (
              <button className="btn btn-link">Show Pass</button>
            )}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p>
            Forgot password?{" "}
            <a className="btn btn-link" onClick={passwordReset}>
              Please Recheck
            </a>
          </p>
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>

        <h5 className="mt-4 text-center">
          Dont Have an account ?
          <Link to="/register" className="text-danger">
            Register
          </Link>
        </h5>
      </Form>
    </Container>
  );
};

export default Login;
