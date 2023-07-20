import React from "react";
import { NavigationComponent } from "../../components/HomePageComponents";
import "./homepage.css";
import background from "../../assets/home.png";

const HomePage = () => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <NavigationComponent />
      <div style={myStyle}></div>
    </>
  );
};

export default HomePage;
