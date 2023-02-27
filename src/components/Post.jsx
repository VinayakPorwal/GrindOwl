/* This example requires Tailwind CSS v2.0+ */

import "../App.css";
import logo from "../images/logopng.png";
import team3 from "../images/team3.svg";
import member from "../images/member.svg";
import { UserContext } from "../App";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { _crousel, _crouselSmall } from "./_crousel";

export default function Post() {
  const { user } = useContext(UserContext);

  let navigate = useNavigate();
  useEffect(() => {
    fetchdata();
    var check = "true";
    if (check == "true") console.log("Team");
    else navigate("/login");
  }, []);

  const [data, setData] = useState();
  const [post, setPost] = useState(false);

  //Fetch users from Database
  async function fetchdata() {
    skeleton.style.display = "block";
    const response = await fetch(
      "https://server-ten-iota.vercel.app/auth/users",
      //"http://localhost:5000/auth/users",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let info = await response.json();
    setData(info.user);
    setPost(true);
    skeleton.style.display = "none";
  }

  // Dark Mode
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  return (
    // <div className="team-member-card2">
    <>
      <div className="header">
        <div className="progress-container" id="mytrack">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>
      <div style={{ margin: "10vh 0 0 0", background: bgcolor }}>
        <_crousel />
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
          {/* <_crousel /> */}
          <h3
            className="Cardhead"
            style={{ background: bgcolor, color: Pcolor }}
          >
            Interact with USERS
          </h3>
          <img src={team3} alt="" className="CardillustrationImg" />
        </div>
        <_crouselSmall />
        <div
          className="CardData"
          id="dataofpost"
          style={{
            height: "auto",
            background: "none",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "15px",
          }}
        >
          {/* // Skeleton Card */}
          <div
            id="skeleton"
            className="ChildCard"
            style={{ background: SecondaryColor, display: "none" }}
          >
            <span className="Skeleton"></span>
          </div>

          {/* // Fetch Cards  */}
          {post &&
            data.map((user, i) => (
              <div className="team" key={i} style={{ background: "none" }}>
                <div
                  className="pcontainer left"
                  style={{ background: "none", color: Pcolor }}
                >
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
                      <h2 style={{ background: "none" }}>{user.id}</h2>
                      <p
                        className="title"
                        style={{ background: "none", color: Pcolor }}
                      >
                        {user.name}
                      </p>
                      <p
                        className="title"
                        style={{
                          background: "none",
                          color: Pcolor,
                          textOverflow: "ellipsis",
                        }}
                      >
                        {user.email}
                      </p>
                      <p style={{ background: "none", color: Pcolor }}>
                        {user.date}
                      </p>
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
