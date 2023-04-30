import React, { useContext } from "react";
import logo2 from "../../../assets/profile.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavigationBar = () => {
  const { user, logOutEmail} = useContext(AuthContext);


  const handleLogOut=()=>{
    logOutEmail()
    .then(()=>{})
    .catch((error)=>{
      console.log(error)
    })
    
  }

  return (
    <Container>
      <Navbar
        className="mt-4 mb-4"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/">Home</Link>

              <Link>About </Link>
              <Link>career </Link>
            </Nav>
            <Nav className="profile-login">
              {user && <img className="profile-img" src={user.photoURL} alt="" />}
              {user && <p>{user.email}</p>}
            
                {user ? (
                  <Button onClick={handleLogOut} variant="dark">LogOut</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="dark">Login</Button>
                  </Link>
                )}


        
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
