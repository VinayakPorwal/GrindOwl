import React from "react";
import cover from "../../images_projects/ImageClassifier.png";
import { UserContext } from "../../App";
import { useContext } from "react";
import { useEffect } from "react";
import { ExternalLinkIcon, LinkIcon } from "@heroicons/react/solid";
export default function ImageClassifier() {
  // Dark Mode
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);
  return (
    <div style={{ color: Pcolor, background: "none" }}>
      <h2 className="Cardhead" style={{ color: Pcolor, background: "none" }}>
        Image Classifier
      </h2>
      <div
        className="ProjectCard-card"
        style={{ color: Pcolor, background: SecondaryColor }}
      >
        <div className="ProjectCard-card-img">
          <img src={cover} alt="" />
        </div>
        <div
          className="ProjectCard-card-info"
          style={{ color: Pcolor, background: "none" }}
        >
          <p className="ProjectCard-text-title">Image Classifier </p>
          <p className="ProjectCard-text-body">
            This is an Image classifying model which classifies objects based on
            trained data and returns a fair classification with a confidence
            percentage as a result.
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
  );
}
