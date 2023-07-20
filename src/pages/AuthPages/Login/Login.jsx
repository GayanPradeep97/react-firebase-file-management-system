import React from "react";
import { Link } from "react-router-dom";

import LoginForm from "../../../components/AuthComponents/LoginForm";
import "./Login.css";
import background from "../../../assets/login.png";

const Login = () => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    // height: "100vh",
    marginTop: "-100px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="main" style={myStyle}>
      <div className="container-fluid">
        <h2 className="display-1 my-5 text-center">Login here</h2>
        <div className="row">
          <div className="col-md-5 mx-auto mt-6">
            <LoginForm />
            <Link to="/register">Not a member? Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
