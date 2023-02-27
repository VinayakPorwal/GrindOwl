import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import { useEffect } from "react";
import { UserContext } from "../../App";
import { useContext } from "react";
import { PencilIcon } from "@heroicons/react/solid";
function QnA() {
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  const [model, setModel] = useState();
  const [passage, setPassage] = useState();
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState();
  const [load, setLoad] = useState(false);
  const [sub, setSub] = useState(false);
  const [color, setColor] = useState("red");

  useEffect(async () => {
    const Load_model = await qna.load();
    setModel(Load_model);
    console.log("model loaded");
    setColor("#74ee15");
  }, []);

  async function find() {
    setLoad(true);
    const answers = await model.findAnswers(question, passage);
    console.log("Answers: ", answers);
    if (answers.length) {
      setAnswer(answers[0]["text"]);
      setError(null);
    } else {
      setError("No result found.");
      setAnswer(null);
    }
    setLoad(false);
  }

  return (
    <div
      style={{
        background: bgcolor,
        color: Pcolor,
        Width: "80vw",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      {/* -------- Chat Gpt ---------- */}
      <h2
        className="Cardhead"
        style={{
          marginTop: "10vh",
          background: bgcolor,
          color: Pcolor,
          marginBottom: "0px",
        }}
      >
        Q_&_A Bot AI
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
        }}
      >
        ex: Unseen Passage Solver
        <br />
        Submit Passage • Type question • Get answer
      </h2>

      {!sub && (
        <>
          <h2
            style={{
              background: "none",
            }}
          >
            • Submit Your Passage
          </h2>

          {/* -----Prompt Input------  */}
          <div className="input-group">
            <input
              type="text"
              className="input"
              placeholder="Type Your Question..."
              autoComplete="off"
              value={passage}
              onChange={(e) => setPassage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSub(true);
                }
              }}
              style={{
                color: Pcolor,
              }}
            />
            <button
              className="button--submit"
              onClick={() => {
                setSub(true);
              }}
            >
              Submit
            </button>
          </div>
        </>
      )}
      {sub && (
        <>
          • Your passage:{" "}
          <PencilIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
            style={{
              // float: "right",
              display: "inline-block",
              background: "none",
              color: "var(--dblue)",
              margin: "5px",
              cursor: "pointer",
            }}
            onClick={() => setSub(false)}
          />
          <h3
            style={{
              // background: "none",
              maxHeight: "300px",
              overflow: "scroll",
              margin: "5px 0",
              padding: "5px",
              textAlign: "justify",
              background: SecondaryColor,
            }}
          >
            {passage}
          </h3>
        </>
      )}
      <h1
        style={{
          background: "none",
          margin: "10px 0 0 0",
        }}
      >
        • Type your question
      </h1>
      {/* -----Prompt Input------  */}
      <div className="input-group">
        <input
          type="text"
          className="input"
          placeholder="Type Your Question..."
          autoComplete="off"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              find();
            }
          }}
          style={{
            color: Pcolor,
          }}
        />
        <button className="button--submit" onClick={find}>
          Search
        </button>
      </div>
      <p style={{ background: "none", color: Pcolor, textAlign: "center" }}>
        {error}
      </p>
      {load && (
        <div
          style={{ margin: "auto", maxWidth: "500px" }}
          className="Ytloader"
        ></div>
      )}
      <h2
        style={{
          background: "none",
        }}
      >
        Answer: {" " + answer}
      </h2>
      <br />
    </div>
  );
}

export default QnA;
