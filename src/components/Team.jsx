/* This example requires Tailwind CSS v2.0+ */

import "../App.css";
import logo from "../images/logopng.png";
import team6 from "../images/team6.svg";
import member from "../images/member.svg";
import { UserContext } from "../App";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { _crouselSmall } from "./_crousel";

const team = [
  { name: "sujoy", tag: "Developer", role: "Engineer" },
  { name: "Vijay", tag: "Developer", role: "Engineer" },
  { name: "Ajay", tag: "Developer", role: "Engineer" },
  { name: "Parajay", tag: "Developer", role: "Engineer" },
];
export default function Team() {
  const { myFunction } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  let navigate = useNavigate();
  useEffect(() => {
    // var check = sessionStorage.getItem("Loggedin");
    var check = user;
    if (check == "true") console.log("Team");
    else navigate("/login");
  }, []);

  window.onscroll = function () {
    myFunction();
  };

  return (
    // <div className="team-member-card2">
    <>
      <div className="header">
        <div className="progress-container" id="mytrack">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>

      <div
        className="containerMain"
        style={{
          display: "flex",
          background: bgcolor,
        }}
      >
        <div
          className="Cardillustration"
          style={{ backgroundColor: bgcolor, color: Pcolor }}
        >
          <h3
            className="Cardhead"
            style={{ background: bgcolor, color: Pcolor }}
          >
            OUR TEAM
          </h3>
          <img src={team6} alt="" className="CardillustrationImg" />
        </div>
        <_crouselSmall />
        <div
          className="CardData"
          style={{ height: "auto", background: "none" }}
        >
          {team.map((item) => (
            <div
              className="team"
              key={item.name}
              style={{ background: "none" }}
            >
              <div className="pcontainer left" style={{ background: "none" }}>
                <div
                  className="ChildCard"
                  style={{ background: SecondaryColor }}
                >
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
                    src={member}
                    alt="Jane"
                    style={{ height: "100px", borderRadius: "5px" }}
                  />
                  <div style={{ background: "none", color: Pcolor }}>
                    <h2 style={{ background: "none" }}>{item.name}</h2>
                    <p
                      className="title"
                      style={{ background: "none", color: Pcolor }}
                    >
                      {item.role}
                    </p>
                    <p style={{ background: "none" }}>{item.tag}</p>
                  </div>
                  <button>Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
