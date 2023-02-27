import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/projects.css";
import logo from "../images/logopng.png";

import { UserContext } from "../App";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Weather from "./projects/weather";
import ChatGPTAi from "./projects/ChatGPTAi";
import DallEAi from "./projects/DallEAi";
import QouteApi from "./projects/QouteApi";
import YouTool from "./projects/YouTool";

import Spline from "@splinetool/react-spline";

import ImageClassifier from "./projects/ImageClassifier";
import {
  MenuAlt1Icon,
  MenuAlt2Icon,
  MenuAlt3Icon,
  MenuAlt4Icon,
} from "@heroicons/react/solid";
import All_Porjects from "./projects/AllProjects";
import Game from "./test";
import QnA from "./projects/QnA";
import RemoveBg from "./projects/RemoveBg";
import CreateImage from "./projects/ImageCreate";
// import Example from "./test";

function Project() {
  const { myFunction } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const [tab, setTab] = useState("1");

  let navigate = useNavigate();
  useEffect(() => {
    // var check = sessionStorage.getItem("Loggedin");
    var check = user;
    if (check === "true") console.log("Project");
    // else navigate("/login");
  }, []);

  // Dark Mode
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  const SideBarData = [
    {
      name: "Games",
      data: [
        {
          name: "Maze-X",
          link: "Mazex",
          tab: "4",
        },
      ],
    },
    {
      name: "Ai/ml",
      data: [
        {
          name: "Unseen Passage Solver Ai",
          link: "QnA",
          tab: "1",
        },
        {
          name: "ChatGPT",
          link: "ChatGptAi",
          tab: "1",
        },
        {
          name: "Background Remover",
          link: "RemoveBg",
          tab: "1",
        },
        {
          name: "Image Generator Free",
          link: "CreateImage",
          tab: "1",
        },
        {
          name: "Image Generator OpenAi",
          link: "DalleAi",
          tab: "1",
        },
        {
          name: "Image Classifier",
          link: "ImageClassify",
          tab: "1",
        },
      ],
    },

    {
      name: "Projects",
      data: [
        {
          name: "Movie reviews App",
          desc: "",
          link: "MovieReviewApp",
          tab: "3",
        },
        {
          name: "Youtube Clone",
          desc: "Youtube Clone",
          link: "YoutubeClone",
          tab: "3",
        },
        {
          name: "PortFolio",
          link: "Portfolio",
          tab: "3",
        },
        {
          name: "Firebase Chat Web App",
          link: "ChatWebApp",
          tab: "3",
        },
        {
          name: "Weather App",
          desc: "",
          tab: "3",
          link: "WeatherApp",
        },
        {
          name: "Snake Game",
          desc: "",
          link: "SnakeGame",
          tab: "3",
        },
        {
          name: "PHP Chat Web App",
          link: "PhpChatApp",
          tab: "3",
        },
        {
          name: "PHP Social Web App",
          link: "PhpSocialApp",
          tab: "3",
        },
        {
          name: "PHP E-Book Web App",
          link: "PhpEbook",
          tab: "3",
        },
      ],
    },
    {
      name: "Api",
      data: [
        {
          name: "Weather API",
          link: "WeatherApi",
          tab: "2",
        },
        {
          name: "OpenAi API",
          link: "OpenAiApi",
          tab: "2",
        },

        {
          name: "Qoute API",
          link: "QouteApi",
          tab: "2",
        },
        {
          name: "Movie reviews API",
          link: "OmdbApi",
          tab: "2",
        },
        {
          name: "Youtube Captions Scraper",
          link: "",
          tab: "2",
        },
        {
          name: "Youtube Downloader API",
          link: "YoutubeDownloadApi",
          tab: "2",
        },
      ],
    },
  ];
  return (
    <>
      <div className="header">
        <div className="progress-container " id="mytrack">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>
      <div style={{ display: "flex", background: bgcolor }}>
        <div
          className="ProjectSidebar"
          id="project-side-bar"
          style={{ background: SecondaryColor }}
        >
          <div className="SideBarLogo" style={{ background: bgcolor }}>
            <img src={logo} alt="" />
            <h2
              className="Cardhead SideBarLogoName"
              style={{
                color: "var(--dblue)",
              }}
            >
              Craft-X
            </h2>
          </div>
          {SideBarData.map((data, i) => (
            <div className="ApiAndTools SideBarCategory">
              <h2 className="Cardhead SideBarCategoryName">{data.name}</h2>
              {data.data.map((data, j) => (
                <div
                  key={j}
                  className="Status SideBarCategoryData"
                  onClick={() => {
                    setTab(data.tab);
                    document
                      .getElementById(data.link)
                      .scrollIntoView({ behavior: "smooth" });

                    console.log(data.tab);
                  }}
                >
                  <a
                    // href="#DalleAi"
                    style={{ background: "none", color: Pcolor }}
                  >
                    {data.name}
                  </a>
                </div>
              ))}
              <br />
            </div>
          ))}
        </div>
        <div
          style={{
            position: "fixed",
            background: bgcolor,
            left: 0,
            top: "10vh",
            padding: "10px",
            margin: "3px 0",
            zIndex: "5",
          }}
          id="project-SideBarButton"
          onClick={() => {
            if (
              document.getElementById("project-side-bar").style.display ===
              "block"
            ) {
              document.getElementById("project-side-bar").style.display =
                "none";
              document.getElementById(
                "project-SideBarButton"
              ).style.background = bgcolor;
            } else {
              document.getElementById("project-side-bar").style.display =
                "block";
              document.getElementById(
                "project-SideBarButton"
              ).style.background = SecondaryColor;
            }
          }}
        >
          <MenuAlt4Icon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
            style={{ background: "none", alignItems: "center", color: Pcolor }}
          />
        </div>
        <div
          className="projects"
          style={{
            background: bgcolor,
            width: "82vw",
            margin: "10vh auto 0 auto",
          }}
        >
          {tab === "0" && (
            <div
              className="containerMainR"
              style={{
                display: "flex",
                margin: "0 auto",
                background: bgcolor,
                maxWidth: "90vw",
              }}
            >
              <div
                className="CardData"
                style={{
                  height: "80vh",
                }}
              >
                {" "}
                <div className="Catcard">
                  <div className="item item--1">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="rgba(149,149,255,1)"
                        d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                      ></path>
                    </svg>
                    <span className="quantity"> 3+ </span>
                    <span className="text text--1"> Ai </span>
                  </div>
                  <div className="item item--2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0L24 0 24 24 0 24z"></path>
                      <path
                        d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z"
                        fill="rgba(252,161,71,1)"
                      ></path>
                    </svg>{" "}
                    <span className="quantity"> 5+ </span>
                    <span className="text text--2"> API </span>
                  </div>
                  <div className="item item--3">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="rgba(66,193,110,1)"
                        d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                      ></path>
                    </svg>
                    <span className="quantity"> 7+ </span>
                    <span className="text text--3"> React Apps </span>
                  </div>
                  <div className="item item--4">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="rgba(220,91,183,1)"
                        d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                      ></path>
                    </svg>
                    <span className="quantity"> 2+ </span>
                    <span className="text text--4"> Servers </span>
                  </div>
                </div>
              </div>
              <div
                className="Cardillustration"
                style={{
                  backgroundColor: bgcolor,
                  color: Pcolor,
                  height: "80vh",
                }}
              >
                <h3
                  className="Cardhead"
                  style={{ background: bgcolor, color: Pcolor }}
                >
                  OUR PROJECTS
                </h3>
                <div
                  className="CardillustrationImg"
                  style={{ margin: "10px auto" }}
                >
                  <span className="projectsAnimation"></span>
                </div>
                {/* <img src={projectimg} alt="" className="CardillustrationImg" /> */}
              </div>
            </div>
          )}

          {tab === "4" && (
            <>
              <div style={{ background: "none" }} id="mazex">
                <br />
                <div style={{ background: "none", height: "100vh" }}>
                  <Spline
                    scene="https://prod.spline.design/c45M7gPnoq7KQlTG/scene.splinecode"
                    style={{ background: "none" }}
                    // className="HomeCard"
                  />
                </div>
              </div>
              {/* <Game /> */}
            </>
          )}
          {tab === "1" && (
            <>
              <div style={{ background: "none" }} id="QnA">
                <br />
                <QnA />
              </div>
              <div style={{ background: "none" }} id="ChatGptAi">
                <br />
                <ChatGPTAi />
              </div>
              <div style={{ background: "none" }} id="RemoveBg">
                <br />
                <RemoveBg />
              </div>
              <div style={{ background: "none" }} id="CreateImage">
                <br />
                <br />
                <br />
                <CreateImage />
              </div>
              <div style={{ background: "none" }} id="DalleAi">
                <br />
                <br />
                <br />
                <DallEAi />
              </div>
              <div style={{ background: "none" }} id="ImageClassify">
                <br />
                <br />
                <ImageClassifier />
              </div>
            </>
          )}
          <br />
          <br />
          <br />
          <br />
          {/* Qoutes  */}

          {tab === "2" && (
            <>
              <div style={{ background: "none" }} id="QouteApi">
                <br />
                <br />
                <br />
                <QouteApi />
              </div>

              <br />
              <div style={{ background: "none" }} id="WeatherApi">
                <br />
                <Weather />
              </div>
              <br />
              <div style={{ background: "none" }} id="YoutubeDownloadApi">
                <br />
                <YouTool />
              </div>

              <br />
            </>
          )}
          {tab === "3" && (
            <>
              <All_Porjects />
            </>
          )}
        </div>
      </div>
      {/* <Example /> */}
    </>
  );
}

export default Project;

{
  /* <div className="CardData" style={{ height: "auto" }}>
  {project.map((item) => (
    <div className="team" key={item.name} style={{ background: "none" }}>
      <div className="pcontainer pleft" style={{ background: "none" }}>
        <div className="ChildCard" style={{ background: SecondaryColor }}>
          <div
            style={{
              padding: "5px 10px 0 0",
              background: "none",
            }}
          >
            <img
              src={logo}
              alt="Jane"
              style={{ height: "30px", marginRight: "0" }}
            />
          </div>
          <img
            src={projectimg}
            alt="Jane"
            style={{ height: "100px", borderRadius: "5px" }}
          />
          <div style={{ background: "none", color: Pcolor }}>
            <p style={{ background: "none", color: Pcolor }} className="title">
              {item.name}
            </p>
            <p style={{ background: "none" }}>{item.tag}</p>
          </div>
          <p style={{ background: "none" }}>
            <Link to={item.href}>
              <button>Details</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  ))}

 
</div>; */
}
