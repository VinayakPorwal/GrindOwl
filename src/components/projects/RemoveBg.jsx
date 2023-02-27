import React, { useEffect, useState } from "react";
import { UserContext } from "../../App";
import { useContext } from "react";

import logo from "../../images/logo.png";
import logopng from "../../images/logopng.png";

function RemoveBg() {
  const [src_img, setSrc_img] = useState(logo);
  const [base64, setBase64] = useState("");
  const [src_img2, setSrc_img2] = useState("");
  const [result_src_img, setResult_src_img] = useState(logopng);
  const [DalleLoader2, setDalleLoader2] = useState(false);
  const [DalleLoaderImg2, setDalleLoaderImg2] = useState(false);
  const [color, setColor] = useState("red");

  // Dark Mode
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  async function RemoveBgApi() {
    setDalleLoader2(true);
    const response = await fetch(
      "https://vinayakporwal-remove-bg.hf.space/run/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          data: [base64],
        }),
      }
    );

    const data = await response.json();
    console.log(response, data.data);
    setResult_src_img(data.data[0]);
    setDalleLoader2(false);
    setDalleLoaderImg2(true);
  }

  function showPreview(event) {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      console.log(src);
      setSrc_img(src);
      toDataURL(src).then((dataUrl) => {
        setBase64(dataUrl);
      });
      setColor("green");
    }
  }

  const toDataURL = (url) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  return (
    <div
      style={{
        background: "none",
        marginTop: "10vh",
      }}
    >
      <h2
        className="Cardhead"
        style={{
          background: bgcolor,
          color: Pcolor,
          marginBottom: "0px",
        }}
      >
        BG Remover
        <p className="botFace" style={{ display: "inline-flex", color: color }}>
          <i className="fa fa-robot"></i>
        </p>
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
        Remove Background of images in just one Click!
      </h2>
      {/* -------OutPut card------  */}
      <div className="CodeCard" style={{ backgroundColor: SecondaryColor }}>
        <div className="tools" style={{ backgroundColor: Pcolor }}>
          <div className="circle">
            <span className={`${color} box`}></span>
          </div>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => {
              showPreview(e);
            }}
            style={{
              background: "none",
              color: bgcolor,
            }}
          />
          <div
            style={{
              background: "none",
              // float: "right",
              marginLeft: "auto",
              padding: "0 10px",
              color: bgcolor,
            }}
          >
            Free{" "}
          </div>
        </div>
        <div className="card__content">
          <div className="Status  Cardhead" style={{ color: Pcolor }}>
            {DalleLoader2 && <> Generating...</>}
            {DalleLoaderImg2 && <> Loading...</>}
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
            <div className="Colorcard" style={{ maxHeight: "none" }}>
              <div className="Colorcard__content">
                <img
                  src={src_img}
                  alt=""
                  className="link"
                  style={{
                    display: "block",
                  }}
                />
              </div>
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
              <div className="blob"></div>
            </div>

            {/* Img 2 */}
            <div className="Colorcard" style={{ maxHeight: "none" }}>
              <div className="Colorcard__content">
                {" "}
                <img
                  src={result_src_img}
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
                        {/* <img src={logo} alt="" /> */}
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
          <button
            className="button--submit"
            onClick={RemoveBgApi}
            style={{
              minHeight: "40px",
              margin: "20px auto -10px auto",
              display: "flex",
              justifyContent: "center",
              borderRadius: "6px",
            }}
          >
            Remove
          </button>
        </div>
      </div>
      {/* <button onClick={ImageGenrate}>Image</button> */}
    </div>
  );
}

export default RemoveBg;
