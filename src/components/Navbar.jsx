import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logopng.png";
import "./css/navbar.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function Navbar(props) {
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const { token } = useContext(UserContext);
  const { setUserData } = useContext(UserContext);
  const navigation = [
    { name: "Dashboard", href: "/", current: true },
    // { name: "Team", href: "/post", current: false },
    { name: "Projects", href: "/project", current: false },
    {
      name: "Profile",
      href: `/profile/?id=${sessionStorage.getItem("id")}`,
      current: false,
    },
    { name: "About", href: "/about", current: false },
  ];
  let location = useLocation();
  useEffect(async () => {
    console.log(location);
  }, [location]);

  useEffect(() => {
    async function getUser() {
      const token = sessionStorage.getItem("token");

      const response = await fetch(
        "https://server-ten-iota.vercel.app/auth/getuser",
        {
          method: "POST",
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setWallet(json.Wallet);
      setUserData(json);

      return json;
    }
    getUser();
  }, [token, user]);
  var [wallet, setWallet] = useState("50");

  let navigate = useNavigate();
  var check = true;

  if (props.user == "true") check = true;
  else check = false;

  function sidenav() {
    if (document.getElementById("sidebar").style.display == "none") {
      document.getElementById("sidebar").style.display = "flex";
      document.getElementById("hambar").style.transform = "rotate(90deg)";
      document.getElementById("myBar").style.height = "2px !important";
      document.getElementById("mytrack").style.background = "var(--grey)";
      document.getElementById("mytrack").style.height = "1px !important";
    } else {
      document.getElementById("sidebar").style.display = "none";
      document.getElementById("hambar").style.transform = "rotate(0deg)";
      document.getElementById("myBar").style.height = "3px ";
      document.getElementById("mytrack").style.background = "var(--lightblack)";
      document.getElementById("mytrack").style.height = "3px";
    }
  }
  return (
    <>
      <nav className="navbar" style={{ background: bgcolor }}>
        <div
          style={{
            maxWidth: "1200px",
            background: bgcolor,
            margin: "auto",
            padding: "0 10px",
          }}
        >
          <div className="rightside" style={{ background: "none" }}>
            <div className="logo" style={{ background: "none" }}>
              <i
                id="hambar"
                className="fa fa-bars"
                style={{
                  fontFamily: "FontAwesome",
                  background: "none",
                  color: Pcolor,
                }}
                onClick={sidenav}
              ></i>
              <img src={logo} alt="Workflow" />
              <div className="WalletSideNav">
                {check && (
                  <div
                    style={{
                      background: "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                      style={{
                        background: "none",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p style={{ background: "none", color: Pcolor }}>
                      {" "}
                      {wallet}
                    </p>
                  </div>
                )}
                <i
                  id="authicon"
                  className={`fa-light fa-${props.mode}`}
                  style={{
                    fontFamily: "FontAwesome",
                    background: bgcolor,
                    color: Pcolor,
                    fontStyle: "normal",
                    fontSize: "1.3rem",
                  }}
                  onClick={() => {
                    if (props.mode === "moon") {
                      props.setMode("lightbulb");
                      props.setBgcolor("black");
                      props.setPcolor("white");
                      props.setSecondaryColor("#111111");
                    } else {
                      props.setMode("moon");
                      props.setBgcolor("#f8f9fb");
                      props.setPcolor("black");
                      props.setSecondaryColor("#ECF3F9");
                    }
                  }}
                ></i>
              </div>
              {/* <i
                id="authicon"
                className="fa fa-gear"
                style={{ fontFamily: "FontAwesome", background: "none" }}
                onClick={() => {
                  sessionStorage.setItem("Loggedin", false);
                  navigate("/login");
                  props.setUser(false);
                  console.log(!props.user);
                }}
              ></i> */}
            </div>

            {/* // navigation for PC  */}
            <div className="navtab" style={{ background: "none" }}>
              <div className="tabgroup" style={{ background: "none" }}>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    className={`${
                      location.pathname === item.href ? "current" : "tab"
                    }`}
                    style={{ background: "none" }}
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="credin" style={{ background: bgcolor }}>
              {/* //------------------- Wallet ------------- */}
              {check && (
                <>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                    />
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    style={{ background: "none" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p style={{ background: "none", color: Pcolor }}> {wallet}</p>
                </>
              )}
              {/*----------------------- dark mode button ------------- */}
              <i
                className={`fa-light fa-${props.mode}`}
                style={{
                  fontFamily: "FontAwesome",
                  background: bgcolor,
                  color: Pcolor,
                  fontStyle: "normal",
                  fontSize: "1.3rem",
                }}
                onClick={() => {
                  if (props.mode === "moon") {
                    props.setMode("lightbulb");
                    props.setBgcolor("black");
                    props.setPcolor("white");
                    props.setSecondaryColor("#111111");
                  } else {
                    props.setMode("moon");
                    props.setBgcolor("#f8f9fb");
                    props.setPcolor("black");
                    props.setSecondaryColor("#ECF3F9");
                  }
                }}
              ></i>
              {/* //--------------------- login  signup logout -------------------- */}
              {check ? (
                <>
                  <button
                    id="logoutbtn"
                    onClick={() => {
                      sessionStorage.setItem("Loggedin", false);
                      sessionStorage.setItem("token", "");
                      sessionStorage.setItem("id", "");
                      navigate("/login");
                      props.setUser(false);
                      console.log(!props.user);
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" style={{ background: "none" }}>
                    <button id="loginbtn">login</button>
                  </Link>
                  <Link to="/signup" style={{ background: "none" }}>
                    <button id="signinbtn">signup</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* // Navigation for mobile  */}
        <div id="sidebar" style={{ background: bgcolor }}>
          <hr></hr>
          {navigation.map((item) => (
            <Link
              key={item.name}
              style={{ background: "none" }}
              className={`${
                location.pathname === item.href ? "current" : "sidetab"
              }`}
              to={item.href}
              onClick={() => sidenav()}
            >
              {item.name}
            </Link>
          ))}
          {check ? (
            <div className="sidetab" style={{ background: bgcolor }}>
              <button
                id="sidelogoutbtn"
                style={{ background: "none" }}
                onClick={() => {
                  sessionStorage.setItem("Loggedin", false);
                  navigate("/login");
                  props.setUser(false);
                  console.log(!props.user);
                  sidenav();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="sidetab" style={{ background: bgcolor }}>
              <Link to="/login" style={{ background: "none" }}>
                <button id="sideloginbtn" onClick={() => sidenav()}>
                  login
                </button>
              </Link>
              <Link to="/signup" style={{ background: "none" }}>
                <button id="sidesigninbtn" onClick={() => sidenav()}>
                  signup
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
