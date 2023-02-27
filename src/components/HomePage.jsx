/* This example requires Tailwind CSS v2.0+ */
import home from "../images/home.svg";
import logo from "../images/logopng.png";
import "../App.css";
import "./css/home.css";
import React, { useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../App";
import Game from "./test";
// import data from "./data";

function HomePage() {
  //Via Context Api or Context Hook
  const { myFunction } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  let navigate = useNavigate();
  useEffect(() => {
    // var check = sessionStorage.getItem("Loggedin");

    var check = user;
    if (check == "true") console.log("Home");
    // else navigate("/login");
    scroll();
    scrollInterval.current = setInterval(scroll, 5);

    return () => clearInterval(scrollInterval.current);
  }, []);

  const barRef = useRef(null);
  const scrollInterval = useRef(null);
  function scroll() {
    barRef.current.scrollLeft += 1;
    if (barRef.current.scrollLeft >= 2860) barRef.current.scrollLeft = 1;
  }

  // var myFunction = props.myFunction;
  window.onscroll = () => {
    myFunction();
  };
  return (
    <div className="home" style={{ background: bgcolor }}>
      {/* <canvas id="animemain"></canvas> */}
      <div className="header">
        <div className="progress-container" id="mytrack">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>
      <div
        className="containerMainR"
        style={{
          display: "flex",

          background: "none",
        }}
      >
        <div className="homerow" style={{ background: "none", color: Pcolor }}>
          <p className="medium" style={{ background: "none" }}>
            Some Web Services,<br></br> Some Information, And<br></br> Some Free
            Software
          </p>
          <p className="paragraph" style={{ background: "none" }}>
            Hi 😉 I've created a website for all things web 3.0. We call it
            <span className="company"> Craft-X</span>.<br></br> It has several
            tools and services for newbies to get started quickly and easily :)
          </p>

          <button className="homebutton">Get Started</button>
        </div>
        <div
          className="Cardillustration"
          style={{
            margin: "auto",
            height: "65vh",
            justifyContent: "center",
            backgroundImage: "none",
            background: "none",
          }}
        >
          {/* <img src={home} alt="" className="CardillustrationImg" /> */}
          {/* <Game /> */}

          <div className="HomeCard">
            <img src={logo} alt="" className="img" />
            <div className="textBox">
              <p className="text CardHead">Craft-X</p>
              <span>WebServices and Tools</span>
            </div>
          </div>

          {/* <div className="CardillustrationImg"> */}
          {/* <span className="bear"></span> */}
          {/* </div> */}
        </div>
      </div>
      <div className="Cardhead" style={{ background: "none", color: Pcolor }}>
        Our Services
      </div>
      <div className="Servicegroup" ref={barRef} style={{ background: "none" }}>
        <div style={{ display: "flex", background: "none" }}>
          <div className="services">Weather App</div>
          <div className="services">Qoute App</div>
          <div className="services">Snake Game</div>
          <div className="services">Node js Api</div>
          <div className="services">Node js Website</div>
          <div className="servicesS">Weather App</div>
          <div className="servicesS">Qoute App</div>
          <div className="servicesS">Snake Game</div>
          <div className="servicesS">Node js Api</div>
          <div className="servicesS">Node js Website</div>
          <div className="servicesS">Weather App</div>
          <div className="servicesS">Qoute App</div>
          <div className="servicesS">Snake Game</div>
          <div className="servicesS">Node js Api</div>
          <div className="servicesS">Node js Api</div>
        </div>
      </div>
      <div className="Cardhead" style={{ background: "none", color: Pcolor }}>
        Categories
      </div>
      <div className="Projectgroup" style={{ background: bgcolor }}>
        <div className="row1">
          {/* <div
            className="projectType"
            style={{
              background: bgcolor,
              color: Pcolor,
              boxShadow: "none",
              fontSize: "large",
            }}
          >
            Static Websites
          </div> */}

          <div
            className="projectType"
            style={{ background: SecondaryColor, color: Pcolor }}
          >
            Three js Websites
          </div>
          <div
            className="projectType"
            style={{ background: SecondaryColor, color: Pcolor }}
          >
            Php Server Web Sites
          </div>
          <div
            className="projectType"
            style={{ background: SecondaryColor, color: Pcolor }}
          >
            Node js Server Web Sites
          </div>
        </div>
        <div className="row2">
          {/* <div
            className="projectType"
            style={{
              background: bgcolor,
              color: Pcolor,
              boxShadow: "none",
              fontSize: "large",
            }}
          >
            Dynamic Websites
          </div> */}
          <div
            className="projectType"
            style={{ background: SecondaryColor, color: Pcolor }}
          >
            React Application
          </div>
          <div
            className="projectType"
            style={{ background: SecondaryColor, color: Pcolor }}
          >
            Next js application
          </div>
          {/* <div
            className="projectType"
            style={{ background: SecondaryColor, color: Pcolor }}
          >
            3d Three js Websites
          </div> */}
          <div
            className="projectType"
            style={{ background: SecondaryColor, color: Pcolor }}
          >
            Api Generation And Deploy
          </div>
        </div>
      </div>

      <h2 className="Cardhead" style={{ background: "none", color: Pcolor }}>
        API we Offers
      </h2>
      <div
        style={{
          display: "flex",
          background: "none",
          width: "80vw",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 0 10vh 0",
          justifyContent: "center",
          minHeight: "50vh",
          flexWrap: "wrap",

          alignItems: "center",
        }}
      >
        <div style={{ background: "none", width: "500px" }}>
          <lottie-player
            // src="https://assets6.lottiefiles.com/packages/lf20_fQij9m.json"

            src={
              // "https://assets3.lottiefiles.com/packages/lf20_bKe7QcfThB.json"
              "https://assets8.lottiefiles.com/packages/lf20_jM2b59ngbZ.json"
            }
            // animationData={build}
            background="transparent"
            speed="1"
            style={{ background: "none" }}
            loop
            autoplay
          ></lottie-player>
        </div>
        <div
          className="ApiAndTools"
          style={{
            background: "none",
            color: Pcolor,
            // width: "40vw",
            maxWidth: "600px",
            // padding: "0 100px",
          }}
        >
          <h2
            className="Cardhead"
            style={{ color: Pcolor, fontSize: "x-large" }}
          >
            EndPoints
          </h2>
          <li className="Status" style={{ fontSize: "large" }}>
            <a style={{ background: "none", color: "var(--dblue)" }}>API </a>
            /Qoutes
          </li>
          <li className="Status" style={{ fontSize: "large" }}>
            <a style={{ background: "none", color: "var(--dblue)" }}>API </a>
            /Qoutes/random
          </li>
          <li className="Status" style={{ fontSize: "large" }}>
            <a style={{ background: "none", color: "var(--dblue)" }}>API </a>
            {"/Weather/{cityName}"}
            <a
              style={{
                background: "none",
                color: "var(--dblue)",
                fontSize: "small",
              }}
            ></a>
          </li>

          <li className="Status" style={{ fontSize: "large" }}>
            <a style={{ background: "none", color: "var(--dblue)" }}>API </a>
            {"/download?id={variable}"}
          </li>
          <li className="Status" style={{ fontSize: "large" }}>
            <a style={{ background: "none", color: "var(--dblue)" }}>API </a>
            {"/caption?id={variable}"}
          </li>

          <br />
        </div>
      </div>
      <h2 className="Cardhead" style={{ background: "none", color: Pcolor }}>
        Tools we Offers
      </h2>
      <div
        style={{
          display: "flex",
          background: "none",
          width: "80vw",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 0 10vh 0",
          justifyContent: "center",
          minHeight: "50vh",
          flexWrap: "wrap",

          alignItems: "center",
        }}
      >
        <div style={{ background: "none", width: "500px" }}>
          <lottie-player
            // src="https://assets6.lottiefiles.com/packages/lf20_fQij9m.json"
            // src={"https://assets7.lottiefiles.com/packages/lf20_w4byznij.json"}
            src={
              "https://assets7.lottiefiles.com/packages/lf20_EXQ7j6b2WO.json"
            }
            // animationData={build}
            background="transparent"
            speed="1"
            style={{ background: "none" }}
            loop
            autoplay
          ></lottie-player>
        </div>
        <div
          className="ApiAndTools"
          style={{
            background: "none",
            color: Pcolor,
            // width: "40vw",
            maxWidth: "600px",
          }}
        >
          <h2
            className="Cardhead"
            style={{ fontSize: "x-large", color: "var(--dblue)" }}
          >
            Tools
          </h2>
          <li className="Status" style={{ fontSize: "large" }}>
            <a style={{ background: "none", color: "var(--dblue)" }}> </a>
            ChatGpt
          </li>
          <li className="Status" style={{ fontSize: "large" }}>
            <a style={{ background: "none", color: "var(--dblue)" }}> </a>
            Image Generation(DallE)
          </li>
          <li className="Status" style={{ fontSize: "large" }}>
            <a style={{ background: "none", color: "var(--dblue)" }}> </a>
            Image Classifier
          </li>
          <li className="Status" style={{ fontSize: "large" }}>
            <a style={{ background: "none", color: "var(--dblue)" }}> </a>
            Youtube Video Downloader
          </li>
          <li className="Status" style={{ fontSize: "large" }}>
            Weather App
          </li>
          <h2
            className="Cardhead"
            style={{ fontSize: "x-large", color: "var(--yellow)" }}
          >
            Games
          </h2>
          <li className="Status" style={{ fontSize: "large" }}>
            <a style={{ background: "none", color: "var(--dblue)" }}> </a>
            Snake Game
          </li>

          <br />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
