import React, { useContext, useState } from "react";
import UseTitle from "../hook/UseTitle";
import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [show, setShow] = useState(false);
  const [accepted,setAccepted] = useState(false)

  UseTitle("Registration");

  const {createUserEmailPass,showEmailVerification,forgotPass,user} = useContext(AuthContext)
  const emailRef = useRef("")

  const handleRegister = (e)=>{
    e.preventDefault();
    const form  = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name  = form.name.value;
    console.log(email,password,name,photo)
    

    createUserEmailPass(email,password)
    .then(result=>{
        const loggedUser = result.user;
        if (!loggedUser.emailVerified) {
          alert("Please Verified Email");

        }
        form.reset("");
        console.log(loggedUser)

        showEmailVerification(result.user)
        .then(result=>{
            alert('Please Verify Your Gmail')
      
        })
        
    })
    .catch(error=>console.log(error));
  }

  const passwordReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      alert("please provide your email for forget password");
    }
    forgotPass(email)
      .then(() => {
        alert("please recek");
        return;
      })
      .catch((error) => console.log(error));
  };


  const acceptHandle = (e)=>{
    setAccepted(e.target.checked)
  }

  


  return (
    <Container className="w-25 mx-auto">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            required
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            required
            ref={emailRef}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Your Photo</Form.Label>
          <Form.Control
            name="photo"
            type="text"
            required
            placeholder="Enter photo url"
          />
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
        <Form.Check onClick={acceptHandle}  type="checkbox" name="checkbox" label={<>Accept <Link to="/terms">Terms and Condition</Link></>} />
      </Form.Group>

        <Button className="w-100" disabled ={!accepted}variant="primary" type="submit">
          Register
        </Button>

        <h5 className="mt-4 text-center">
          ALready Have an <a className="btn btn-link" onClick={passwordReset} href="">forgot</a> account ?
          <Link to="/login" className="text-danger">
            Login
          </Link>
        </h5>
      </Form>
    </Container>
  );
};

export default Register;
