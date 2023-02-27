import React from "react";
import cover from "../../images_projects/ImageClassifier.png";
import { UserContext } from "../../App";
import { useContext } from "react";
import { useEffect } from "react";
import { ExternalLinkIcon, LinkIcon } from "@heroicons/react/solid";
import Chathook1 from "../../images_projects/Chathook1.png";
import MovieApp1 from "../../images_projects/MovieApp.png";
import SnakeGame from "../../images_projects/SnakeGame.png";
import WeatherApp from "../../images_projects/weatherApp.png";
import PhpChathook from "../../images_projects/PhpChathook.png";
import Portfolio from "../../images_projects/Portfolio.png";
import youtool from "../../images_projects/youtool.png";
import fookreywebs from "../../images_projects/fookreywebs.png";

export default function All_Porjects() {
  // Dark Mode
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  const data = [
    {
      name: "Movie review App",
      desc: "",
      tab: "3",
      auhtor: "",
      link: "https://fluxmovies.vercel.app",
      id: "MovieReviewApp",
      img: MovieApp1,
    },
    {
      name: "Youtube Clone",
      desc: "Youtube Clone",
      tab: "3",
      auhtor: "",
      link: "https://you-tool.vercel.app",
      img: youtool,
      id: "YoutubeClone",
    },
    {
      name: "PortFolio",
      desc: "",
      tab: "3",
      auhtor: "",
      link: "https://vinayakporwal.netlify.app",
      img: Portfolio,
      id: "Portfolio",
    },
    {
      name: "Firebase Chat Web App",
      tab: "3",
      auhtor: "",
      link: "https://chathook-f2855.web.app",
      img: Chathook1,
      id: "ChatWebApp",
      desc: "",
    },
    {
      name: "Weather App",
      desc: "",
      tab: "3",
      link: "https://vinayakporwal.github.io/WeatherApp/",
      auhtor: "",
      img: WeatherApp,
      id: "WeatherApp",
    },
    {
      name: "Snake Game",
      desc: "",
      tab: "3",
      auhtor: "",
      link: "https://vinayakporwal.gihtub.io/SnakeGame",
      img: SnakeGame,
      id: "SnakeGame",
    },
    {
      name: "PHP Chat Web App",
      desc: "",
      tab: "3",
      auhtor: "",
      link: "http://chathook.epizy.com",
      img: PhpChathook,
      id: "PhpChatApp",
    },
    {
      name: "PHP Social Web App",
      desc: "",
      tab: "3",
      auhtor: "",
      link: "",
      img: fookreywebs,
      id: "PhpSocialApp",
    },
  ];
  return (
    <div style={{ color: Pcolor, background: "none", margin: "-15vh 0 0 0" }}>
      {data.map((project, i) => (
        <div
          style={{ background: "none", padding: "20px 0 0 0" }}
          id={project.id}
        >
          <br />
          <br />
          <h2
            className="Cardhead"
            style={{ color: Pcolor, background: "none" }}
            // id={project.id}
          >
            {project.name}
          </h2>

          <div
            className="ProjectCard-card"
            style={{ color: Pcolor, background: SecondaryColor }}
            key={i}
          >
            <div className="ProjectCard-card-img">
              <img src={project.img} alt="" />
            </div>
            <div
              className="ProjectCard-card-info"
              style={{ color: Pcolor, background: "none" }}
            >
              <p className="ProjectCard-text-title">{project.name} </p>
              <p className="ProjectCard-text-body">
                This is an Image classifying model which classifies objects
                based on trained data and returns a fair classification with a
                confidence percentage as a result.
              </p>
            </div>
            <div className="ProjectCard-card-footer">
              <span className="ProjectCard-text-title">Model by ML5.js</span>
              <a
                href="http://vinayakporwal.github.io/machineLearning"
                style={{ background: "none" }}
              >
                <div className="ProjectCard-card-button">
                  {/* <LinkIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
              style={{ background: "none" }}
            /> */}
                  Live Demo
                  <ExternalLinkIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    style={{ background: "none", alignItems: "center" }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
