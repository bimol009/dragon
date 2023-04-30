import "./RightNAv.css";
import Qzone from "../Qzone/Qzone";
import React from "react";
import bg from "../../../assets/bg.png";
import { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";

const RightNAv = () => {

  const{googleSignEmailPass,gitHubProviderEmailPass} = useContext(AuthContext)

  const googleSignPop = ()=>{
    googleSignEmailPass()
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
  })

  .catch(error=>{
      console.log(error)
  })
  }
  const githubSignPop = ()=>{
    gitHubProviderEmailPass()
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
  })

  .catch(error=>{
      console.log(error)
  })
  }



  return (
    <div className="p-2">
      <h2>Login With</h2>
      <Button onClick={googleSignPop} className="mb-2 px-5" variant="outline-primary"><FaGoogle /> Login With Google</Button>
      <Button onClick={githubSignPop} className="px-5" variant="outline-secondary"> <FaGithub />  Login With  Github </Button>
      <div className="social-sec mt-4">
        <h2>Find Us On</h2>
        <ListGroup>
      <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
      
    </ListGroup>
      </div>
      <Qzone></Qzone>

      <div className="background mt-4 p-4 text-center">
        <h1 className=" mb-4">Create an Amazing Newspaper</h1>
        <p className=" mb-4">Discover thousands of <br></br> options, easy to <br></br> customize layouts, one-<br></br>click to import demo <br></br> and much more.</p>
        <button className="btn btn-danger mb-4 p-3">Learn More</button>
      </div>
    </div>
    
  );
};

export default RightNAv;
