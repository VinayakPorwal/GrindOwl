import React, { useState, useEffect, useContext } from "react";
import "./css/login.css";
import { useNavigate } from "react-router-dom";
import img from "../images/member.svg";
import { UserContext } from "../App";
function Signup(props) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("Loggedin") == "true") navigate("/");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    loading.style.display = "block";

    const response = await fetch(
      "https://server-ten-iota.vercel.app/auth/signup",
      {
        // const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    setTimeout(() => {
      loading.style.display = "none";
      if (json.message === "Used Created") {
        console.log(json);
        props.setUser("true");
        sessionStorage.setItem("Loggedin", true);
        navigate("/");
      } else {
        alert("Error :", json.message);
        console.log(json);
      }
    }, 500);
  };
  // for using LocalStorage Authentication
  // const handleSubmit = () => {
  //   localStorage.setItem(credentials.email, credentials.password);
  //   setUser(true);
  //   navigate("/home");
  // };

  // Dark Mode
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="header" style={{ display: "none" }}>
        <div className="progress-container" id="mytrack">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>
      <div id="loading">
        <div className="loaderback" style={{ background: Pcolor }}></div>
        <span className="loader" style={{ color: bgcolor }}>
          Generating Id
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          background: bgcolor,
          color: Pcolor,
        }}
      >
        <div className="Cardillustration" style={{ backgroundColor: bgcolor }}>
          <img
            src={img}
            alt="Avatar"
            className="avatar"
            style={{ backgroundColor: bgcolor }}
          />
        </div>

        <div className="CardData" style={{ background: SecondaryColor }}>
          <div className="container" style={{ padding: "10vw 10vw 0 10vw" }}>
            <label>
              <b>Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              value={credentials.name}
              onChange={onChange}
              id="name"
              name="name"
              aria-describedby="nameHelp"
            />
            <label>
              <b>Email</b>
            </label>
            <input
              type="email"
              className="form-control"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />

            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              className="form-control"
              value={credentials.password}
              onChange={onChange}
              name="password"
              id="password"
            />

            <button id="logbutton" type="submit">
              Submit
            </button>
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
            <span className="psw">
              <a href="#"> Forgot password?</a>
            </span>
          </div>

          <div
            className="container"
            style={{
              maxWidth: "300px",
              margin: "auto",
            }}
          >
            <button
              type="button"
              className="cancelbtn"
              onClick={() => navigate("/login")}
            >
              Go to Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
