import { useState } from "react";
import React from "react";
import { UserContext } from "../../App";
import { useContext } from "react";
import logo from "../../images/logopng.png";

function DallEAi() {
  const [input, setInput] = useState();

  const [link1, setLink1] = useState(logo);
  const [link2, setLink2] = useState(logo);
  const [DalleLoader, setDalleLoader] = useState(false);
  const [DalleLoader2, setDalleLoader2] = useState(false);
  const [DalleLoaderImg, setDalleLoaderImg] = useState(false);
  const [DalleLoaderImg2, setDalleLoaderImg2] = useState(false);
  const [error, setError] = useState();

  // Dark Mode
  const { setToken } = useContext(UserContext);
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);
  async function DallE2() {
    setDalleLoader(true);
    setDalleLoader2(true);
    console.log(input);
    const response = await fetch(
      "https://server-ten-iota.vercel.app/Ai/image",
      // "http://localhost:5001/Ai/image",
      {
        method: "POST",
        headers: {
          mode: "no-cors",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "auth-token": sessionStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: `{"prompt":"${input}"}`,
      }
    );
    var data = await response.json();

    console.log(data);
    if (data.data) {
      setLink1(data.data.data[0].url);
      setLink2(data.data.data[1].url);
      setDalleLoader(false);
      setDalleLoader2(false);
      setDalleLoaderImg2(true);
      setDalleLoaderImg(true);
      const timeStamp = Date.now();
      setToken(timeStamp);
    } else {
      setError(data.error);
      setDalleLoader(false);
      setDalleLoader2(false);
    }
  }
  return (
    <>
      <h2
        className="Cardhead"
        style={{
          background: bgcolor,
          color: Pcolor,
          marginBottom: "0px",
        }}
      >
        Generate Your IMAGINATION
      </h2>
      <h2
        style={{
          background: "none",
          textAlign: "center",
          fontSize: "large",
          margin: "0 0 10px 0",
          color: Pcolor,
        }}
      >
        Dalle-2 Model by <b>OpenAi</b>
      </h2>
      {/* -----Prompt Input------  */}
      <div className="input-group">
        <input
          type="text"
          className="input"
          id="Email"
          placeholder="Start Imagining..."
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              DallE2();
            }
          }}
          style={{
            color: Pcolor,
          }}
        />
        <button className="button--submit" onClick={DallE2}>
          Generate
        </button>
      </div>
      <p style={{ background: "none", color: Pcolor, textAlign: "center" }}>
        {error}
      </p>
      {/* -------OutPut card------  */}
      <div className="CodeCard" style={{ backgroundColor: SecondaryColor }}>
        <div className="tools" style={{ backgroundColor: Pcolor }}>
          <div className="circle">
            <span className="red box"></span>
          </div>
          <div className="circle">
            <span className="yellow box"></span>
          </div>
          <div className="circle">
            <span className="green box"></span>
          </div>
          <div
            style={{
              background: "none",
              // float: "right",
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              color: bgcolor,
            }}
          >
            1
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              style={{
                background: "none",
                // float: "right",
                margin: "5px",
                color: "var(--dblue)",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                clipRule="evenodd"
              />
            </svg>{" "}
          </div>
        </div>
        <div className="card__content">
          <div className="Status  Cardhead" style={{ color: Pcolor }}>
            {DalleLoader && <> Generating...</>}
            {DalleLoaderImg && <> Loading...</>}
          </div>
          {/* Img 1 */}
          <div
            style={{
              display: "flex",
              background: "none",
              flexWrap: "wrap",
              width: "80vw",
              maxWidth: "700px",
            }}
          >
            <div className="Colorcard">
              <div className="Colorcard__content">
                <img
                  src={link1}
                  alt=""
                  className="link"
                  onLoad={() => setDalleLoaderImg(false)}
                  style={{
                    display: DalleLoaderImg ? "none" : "block",
                  }}
                />
                {DalleLoader && (
                  <div className="spinner">
                    <div className="spinnerin"></div>
                  </div>
                )}
                {DalleLoaderImg && (
                  <div className="Imgloader">
                    <div className="Imgwrapper">
                      <div className="line-1">
                        <img src={logo} alt="" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
            </div>

            {/* Img 2 */}
            <div className="Colorcard">
              <div className="Colorcard__content">
                {" "}
                <img
                  src={link2}
                  alt=""
                  className="link"
                  onLoad={() => setDalleLoaderImg2(false)}
                  style={{
                    display: DalleLoaderImg2 ? "none" : "block",
                  }}
                />
                {DalleLoader2 && (
                  <div className="spinner">
                    <div className="spinnerin"></div>
                  </div>
                )}
                {DalleLoaderImg2 && (
                  <div className="Imgloader">
                    <div className="Imgwrapper">
                      <div className="line-1">
                        <img src={logo} alt="" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DallEAi;
