import React from "react";
import { Link } from "react-router-dom";

import RegisterForm from "../../../components/AuthComponents/RegisterForm";
import background from "../../../assets/register.png";
import "./Register.css";

const Register = () => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    // height: "100%",
    marginTop: "-100px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="main" style={myStyle}>
      <div className="container-fluid">
        <h1 className="display-1 my-5 text-center">Register here</h1>
        <div className="row">
          <div className="col-md-5 mx-auto mt-5">
            <RegisterForm />
            <Link to="/login">Already a member? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
