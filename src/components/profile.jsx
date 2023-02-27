import React from "react";
import { UserContext } from "../App";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PaperClipIcon, UsersIcon } from "@heroicons/react/solid";
import { useLocation } from "react-router-dom";

import img from "../images/logopng.png";
import { useState } from "react";
import UserInfo from "./UserInfo";
function Profile() {
  const { myFunction } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const { userData } = useContext(UserContext);

  // Dark Mode
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);
  let navigate = useNavigate();

  // getting Id from url
  const queryParams = new URLSearchParams(window.location.search);

  const [term, setTerm] = useState(queryParams.get("id"));
  const id = sessionStorage.getItem("id");

  const [data, setData] = useState();
  const [post, setPost] = useState(false);
  const [account, setAccount] = useState({
    name: "----------------",
    email: "---------------",
    Bio: "Hey! We at Grindowl are building a series of APIs that will make it much easier to build and operate Decentralized applications.We are the community in search for a better web.The world is pretty big, but it can be a whole lot smaller when you stop looking at screens.",
    date: "Today",
    _id: "ll",
    Admin: "",
  });

  //User Profile
  async function getUser() {
    const response = await fetch(
      "https://server-ten-iota.vercel.app/auth/getusers",
      {
        method: "POST",
        headers: {
          mode: "no-cors",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Content-Type": "application/json",
        },
        body: `{"id": "${term}" }`,
      }
    );
    const json = await response.json();
    console.log(json);
    setAccount(json);
  }

  // All users
  async function fetchdata() {
    const response = await fetch(
      "https://server-ten-iota.vercel.app/auth/users",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let info = await response.json();
    setData(info.user);
    setPost(true);
  }
  useEffect(() => {
    getUser();
    fetchdata();

    // var check = sessionStorage.getItem("Loggedin");
    var check = user;
    if (check == "true") console.log("Profile");
    else navigate("/login");

    console.log(location.search);

    return () => {
      // setState({}); // This worked for me
    };
  }, [term]);

  return (
    <>
      <div className="header">
        <div className="progress-container" id="mytrack">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className="ProfileSideBar"
          style={{
            background: SecondaryColor,
          }}
          id="profile-side-bar"
        >
          <div className="SideBarLogo" style={{ background: bgcolor }}>
            <img src={img} alt="" />
            <h2
              className="Cardhead SideBarLogoName"
              style={{
                color: "var(--dblue)",
              }}
            >
              Craft-X
            </h2>
          </div>
          {post &&
            data.map((user, i) => (
              <div
                class="SideUsers-card"
                key={i}
                onClick={() => {
                  navigate("/profile?id=" + user._id);
                  setTerm(user._id);
                }}
              >
                <div class="SideUsers-card-top-part">
                  <div class="SideUsers-right-part">
                    <div
                      style={{
                        height: "55px",
                        width: "55px",
                        background: "var(--dblue)",
                        borderRadius: "50%",
                        position: "relative",
                        padding: "5px",
                        margin: "10px",
                        // background: "none",
                      }}
                    >
                      <img
                        src={`https://robohash.org/${user.name}?set=set3`}
                        alt=""
                        style={{ background: "none" }}
                      />
                    </div>
                  </div>
                  <div class="SideUsers-left-part">
                    <div class="SideUsers-user-name">
                      <p class="SideUsers-name" style={{ color: Pcolor }}>
                        {user.name}
                      </p>
                      {user.Admin && <p class="SideUsers-role"> Mod </p>}
                    </div>

                    <div class="SideUsers-user-position">
                      <p class="SideUsers-position">{user.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div
          className="ProfilePage"
          style={{
            minHeight: "100vh",
            background: bgcolor,
            width: "-webkit-fill-available",
            // margin: "auto",
          }}
        >
          <div
            style={{
              position: "fixed",
              background: bgcolor,
              left: 0,
              top: "10vh",
              padding: "10px",
              margin: "3px 0",
              zIndex: "5",
            }}
            id="profile-SideBarButton"
            onClick={() => {
              if (
                document.getElementById("profile-side-bar").style.display ===
                "block"
              ) {
                document.getElementById("profile-side-bar").style.display =
                  "none";
                document.getElementById(
                  "profile-SideBarButton"
                ).style.background = bgcolor;
              } else {
                document.getElementById("profile-side-bar").style.display =
                  "block";
                document.getElementById(
                  "profile-SideBarButton"
                ).style.background = SecondaryColor;
              }
            }}
          >
            <UsersIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
              style={{
                background: "none",
                alignItems: "center",
                color: Pcolor,
              }}
            />
          </div>
          <div style={{ background: "var(--dblue)", height: "40vh" }}></div>
          <div
            style={{
              width: "80vw",
              margin: "auto",
              maxWidth: "800px",
              background: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                postion: "relative",
                background: "none",
                // justifyContent: "space-evenly",
                margin: "8px 0 20px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  postion: "relative",
                  flexWrap: "wrap",
                  background: "none",
                  // justifyContent: "space-evenly",
                }}
              >
                <div
                  style={{
                    height: "120px",
                    width: "120px",
                    background: bgcolor,
                    borderRadius: "50%",
                    position: "relative",
                    // transform: "rotate(35deg)",
                    // top: "-60px",
                    padding: "10px",
                    margin: "-60px 50px 0 50px",
                  }}
                >
                  <img
                    src={`https://robohash.org/${account.name}?set=set3`}
                    alt=""
                    style={{ background: "none" }}
                  />
                </div>{" "}
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "x-large",
                    background: "none",
                    margin: "10px 50px",
                    color: Pcolor,
                  }}
                >
                  {account.name}
                </div>
              </div>
            </div>
            <UserInfo
              email={account.email}
              name={account.name}
              bio={account.Bio}
              id={account._id}
              admin={account.Admin}
            />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
