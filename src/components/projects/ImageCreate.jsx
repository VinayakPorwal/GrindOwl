import { useState } from "react";
import React from "react";
import { UserContext } from "../../App";
import { useContext } from "react";
import logo from "../../images/logopng.png";

function CreateImage() {
  const [input, setInput] = useState();

  const [link1, setLink1] = useState(logo);
  const [DalleLoader, setDalleLoader] = useState(false);
  const [DalleLoaderImg, setDalleLoaderImg] = useState(false);
  const [error, setError] = useState();

  // Dark Mode
  const { setToken } = useContext(UserContext);
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  async function ImageGenrate() {
    setDalleLoader(true);
    const response = await fetch(
      "https://vinayakporwal-imagecreator.hf.space/run/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          data: [input],
        }),
      }
    );

    const data = await response.json();
    console.log(response, data.data);
    if (data.data) {
      setLink1(data.data[0]);
      setDalleLoader(false);
      setDalleLoaderImg(true);
      const timeStamp = Date.now();
      setToken(timeStamp);
    } else {
      setError(data.error);
      setDalleLoader(false);
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
        Create image by giving Prompt
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
              ImageGenrate();
            }
          }}
          style={{
            color: Pcolor,
          }}
        />
        <button className="button--submit" onClick={ImageGenrate}>
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
              padding: " 0 10px",
              color: bgcolor,
            }}
          >
            Free{" "}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateImage;
