import { useState } from "react";
import React from "react";
import { UserContext } from "../../App";
import { useContext } from "react";
function YouTool() {
  const [Download, setDownload] = useState();
  const [input, setInput] = useState();
  const [load, setLoad] = useState(false);
  const [urlPlayer, setUrlPlayer] = useState();

  // Dark Mode
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  async function download(id) {
    setLoad(true);
    console.log(input);
    const response = await fetch(
      `https://server-ten-iota.vercel.app/download/?url=${input}`,
      {
        // mode: "no-cors",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      }
    );
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
    const data = await response.json();

    console.log(data);
    setDownload(data.info);
    setUrlPlayer(data.url);
    setLoad(false);
  }

  return (
    <>
      <h2
        className="Cardhead"
        style={{
          background: bgcolor,
          color: Pcolor,
        }}
      >
        Download Youtube Videos
      </h2>
      {/* -----Prompt Input------  */}
      <div className="input-group">
        <input
          type="text"
          className="input"
          id="Email"
          placeholder="Paste your Video Link..."
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              download();
            }
          }}
          style={{
            color: Pcolor,
          }}
        />
        <button className="button--submit" onClick={download}>
          <i className="fa fa-download" style={{ background: "none" }}></i>
        </button>
      </div>
      {load && (
        <div
          style={{ margin: "auto", maxWidth: "600px" }}
          className="Ytloader"
        ></div>
      )}

      <div
        style={{
          height: "50vh",
          overflow: "scroll",
          width: "80vw",
          maxWidth: "500px",
          margin: "auto",
          background: "none",
        }}
      >
        {Download &&
          Download.map((format, i) => (
            <div
              key={i}
              style={{ padding: "10px 0", background: "none" }}
              download
            >
              <a
                href={format.url}
                style={{
                  padding: "0 0 0 10px",
                  color: "var(--dblue)",
                  background: "none",
                }}
              >
                Download
              </a>
              {format && (
                <a
                  href={format.url}
                  download
                  style={{
                    padding: "0 20px",
                    color: Pcolor,
                    background: "none",
                  }}
                >
                  {format.mimeType.split(";")[0]}{" "}
                  {format.hasVideo ? format.height + "p" : ""}
                  {!format.hasAudio && (
                    <i
                      className="fa fa-volume-mute text-danger"
                      style={{ background: "none", color: "var(--yellow)" }}
                    ></i>
                  )}
                </a>
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default YouTool;
