import { useState } from "react";
import React from "react";
import { UserContext } from "../../App";
import { useContext } from "react";

function QouteApi() {
  const [qouteBody, setQouteBody] = useState(
    "Luck is what happens when preparation meets opportunity."
  );
  const [author, setAuthor] = useState("Seneca");

  // Dark Mode
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  async function Qoutes() {
    document.getElementById("QouteCard").style.transform = "rotate(2deg)";
    const response = await fetch(
      "https://server-ten-iota.vercel.app/Qoutes/random"
    );
    var data = await response.json();
    setQouteBody(data.qoute);
    setAuthor(data.author);
    console.log(author, qouteBody);
    document.getElementById("QouteCard").style.transform = "rotate(0deg)";
  }
  return (
    <>
      <h2 className="Cardhead" style={{ color: Pcolor }}>
        Qoutes API
      </h2>
      <br />
      <div
        style={{
          background: "none",
          display: "flex",
          alignItems: "center",
          width: "80vw",
          maxWidth: "700px",
          margin: "auto",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ background: "none", color: Pcolor }}>
          <h2
            className="Cardhead"
            style={{ color: Pcolor, fontSize: "x-large" }}
          >
            EndPoints
          </h2>
          <h1 className="Status" style={{ fontSize: "large" }}>
            <a style={{ background: "none", color: "var(--dblue)" }}>API </a>
            /Qoutes
          </h1>
          <h1 className="Status" style={{ fontSize: "large" }}>
            <a style={{ background: "none", color: "var(--dblue)" }}>API </a>
            /Qoutes/random
          </h1>
          <br />
        </div>
        <div
          className="Qoutecard"
          id="QouteCard"
          onClick={() => {
            Qoutes();
          }}
        >
          <div className="card-name">Tap for New QOUTE</div>
          <div className="quote">
            <svg
              width="90"
              height="100"
              viewBox="0 0 330 307"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="body-text">
            {qouteBody} <br />
            <div className="author">
              <span> - {author}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QouteApi;
