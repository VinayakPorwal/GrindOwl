import React from "react";
import { UserContext } from "../App";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { _crousel, _crouselSmall } from "./_crousel";
import img from "../images/team6.svg";

import "./css/about.css";

function About() {
  const { myFunction } = useContext(UserContext);
  const { user } = useContext(UserContext);

  let navigate = useNavigate();
  useEffect(() => {
    // var check = sessionStorage.getItem("Loggedin");
    var check = "true";
    if (check == "true") console.log("About");
    else navigate("/login");
  }, []);
  window.onscroll = function () {
    myFunction();
  };
  // Dark Mode
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  return (
    <div className="about">
      <div
        className="containerMainR"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0px",
          background: bgcolor,
        }}
      >
        <div
          className="aboutrow"
          style={{ background: bgcolor, color: Pcolor }}
        >
          <h3
            className="abouthead"
            style={{ background: bgcolor, color: Pcolor }}
          >
            ABOUT US
          </h3>
          <div
            className="aboutpara"
            style={{ background: "none", color: Pcolor }}
          >
            Hey! We at Craft-X are building a series of APIs that will make it
            much easier to build and operate Decentralized applications. <br />{" "}
            We are the community in search for a better web.
            <br /> The world is pretty big, but it can be a whole lot smaller
            when you stop looking at screens.
          </div>
        </div>
        <div className="aboutillus" style={{ background: bgcolor }}>
          {/* <img src={img} alt="" /> */}
          <lottie-player
            src={
              // "https://assets1.lottiefiles.com/packages/lf20_ljotbiif.json"
              // "https://assets3.lottiefiles.com/packages/lf20_zcXkVX8JmC.json"
              "https://assets3.lottiefiles.com/packages/lf20_bKe7QcfThB.json"
            }
            background="transparent"
            speed="1"
            style={{ background: "none" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
      <_crousel />
      {/* <Team /> */}
      <div
        style={{
          background: bgcolor,
          fontSize: "xxx-large",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: Pcolor,
        }}
      >
        Stay Tuned For Api-Section
      </div>
    </div>
  );
}

export default About;
