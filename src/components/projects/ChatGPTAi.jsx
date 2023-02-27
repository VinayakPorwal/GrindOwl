import { useState } from "react";
import React from "react";
import { UserContext } from "../../App";
import { useContext } from "react";
import {
  CashIcon,
  CurrencyDollarIcon,
  CurrencyYenIcon,
  InboxIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";

function ChatGPTAi() {
  const [GPTLoader, setGPTLoader] = useState(false);
  const [inputGpt, setInputGpt] = useState();
  const [output, setOutput] = useState();

  // Dark Mode
  const { setToken } = useContext(UserContext);
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  //Chat GPT Logic
  let loadInterval;

  function loader(element) {
    element.textContent = "";

    loadInterval = setInterval(() => {
      // Update the text content of the loading indicator
      element.textContent += ".";

      // If the loading indicator has reached three dots, reset it
      if (element.textContent === "....") {
        element.textContent = "";
      }
    }, 300);
  }
  function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  }

  function typeText(element, text) {
    let index = 0;

    let interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }
  function chatStripe(isBot, value, uniqueId) {
    return `<div class="wrap ${isBot ? "bot" : "User"}">
    <p class="${isBot ? "botFace" : "UserFace"}">
    <i class="fa fa-${isBot ? "robot" : "user"}"></i>
    </p>
    <li class="message" id=${uniqueId} >${value}</li>
    </div>`;
  }

  async function ChatGPT() {
    // message Cotainer
    const chatContainer = document.querySelector(".message-list");

    // user's chatstripe
    chatContainer.innerHTML += chatStripe(false, inputGpt);
    console.log(inputGpt);
    setInputGpt("");

    // bot's chatstripe
    const uniqueId = generateUniqueId();
    chatContainer.innerHTML += chatStripe(true, " ", uniqueId);

    setGPTLoader(true);

    // to focus scroll to the bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // specific message div
    const messageDiv = document.getElementById(uniqueId);
    loader(messageDiv);

    // Data Function

    try {
      const response = await fetch(
        "https://server-ten-iota.vercel.app/Ai/chat",
        {
          method: "POST",
          headers: {
            mode: "no-cors",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json",
            "auth-token": sessionStorage.getItem("token"),
          },
          body: `{"prompt":"${inputGpt}"}`,
        }
      );

      var data = await response.json();
      console.log(data);
      var parsedData;
      if (data.error) {
        parsedData = data.error;
      } else {
        parsedData = data.data[0].text; // trims any trailing spaces/'\n'
      }
      clearInterval(loadInterval);
      messageDiv.innerHTML = " ";
      typeText(messageDiv, parsedData);
      parsedData = parsedData.replace(/\n/g, "<br/>");
      // if (data.data) {
      setOutput(parsedData);
      // }
      setGPTLoader(false);
      const timeStamp = Date.now();
      setToken(timeStamp);
    } catch (e) {
      parsedData = e;
      console.log(e);
      clearInterval(loadInterval);
      messageDiv.innerHTML = " ";
      typeText(
        messageDiv,
        "We appologize for Your inconvenience!! Server is down try after Some period of time."
      );
      setGPTLoader(false);
    }
    // document.getElementById("endScroll").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
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
        Ask Anything with ChatGPT{" "}
        <p className="botFace" style={{ display: "inline-flex" }}>
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
        A GPT-3 Model by <b>OpenAi</b>
      </h2>
      <div className="Chatcard">
        <div
          className="chat-header"
          style={{ background: bgcolor, color: Pcolor }}
        >
          ChatGPT
          <div
            style={{
              background: "none",
              float: "right",
              display: "flex",
              alignItems: "center",
              color: Pcolor,
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
        <div
          className="chat-window"
          style={{ background: SecondaryColor, color: Pcolor }}
        >
          <div
            className="wrap User"
            style={{
              display: "flex",
              justifyContent: "space-around",
              border: `2px dashed ${Pcolor}`,
              margin: "2px 4px",
              background: "none",
            }}
          >
            <p className="botFace">
              <i className="fa fa-robot"></i>
            </p>
            <li className="message" style={{ width: "auto", color: Pcolor }}>
              Ask Anything
            </li>
            <p className="UserFace">
              <i className="fa fa-user"></i>
            </p>
          </div>
          <ul className="message-list">{GPTLoader && <></>}</ul>
          <div className="wrap bot" id="format" style={{ display: "none" }}>
            <p className="botFace">
              <i className="fa fa-robot"></i>
            </p>
            <li
              dangerouslySetInnerHTML={{ __html: output }}
              className="message"
            ></li>
          </div>
          <div id="endScroll"></div>
        </div>
        <div
          className="chat-input"
          style={{
            background: bgcolor,
            color: Pcolor,
            borderRadius: "0 0 5px 5px",
          }}
        >
          <input
            type="text"
            className="message-input"
            placeholder="Type your message here"
            value={inputGpt}
            onChange={(e) => setInputGpt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ChatGPT();
              }
            }}
            style={{
              background: SecondaryColor,
              outline: "none",
              border: "1px solid rgb(17,17,17)",
            }}
          />
          <button
            className="send-button"
            onClick={ChatGPT}
            style={{ background: "none" }}
          >
            <PaperAirplaneIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
              style={{
                background: "none",
                color: "var(--dblue)",
                transform: "rotate(90deg)",
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatGPTAi;
