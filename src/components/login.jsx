import React, { useState, useEffect, useContext } from "react";
import "./css/login.css";
import "./css/projects.css";
import img from "../images/member.svg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("Loggedin") == "true") navigate("/");
    document.getElementById("formstart").scrollIntoView({ behavior: "smooth" });
  }, []);

  const loading = document.getElementById("loading");

  const handleSubmit = async (e) => {
    e.preventDefault();

    loading.style.display = "block";
    const response = await fetch(
      "https://server-ten-iota.vercel.app/auth/login",
      // "http://localhost:5000/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    // console.log(json.message);

    // console.log(credentials.email, credentials.password);

    setTimeout(() => {
      loading.style.display = "none";
      if (json.message === "Acceess Granted") {
        // Save the auth token and redirect
        sessionStorage.setItem("token", json.authtoken);
        console.log(json);
        props.setUser(true);
        sessionStorage.setItem("Loggedin", true);
        sessionStorage.setItem("id", json.user_data.user.id);
        navigate("/");
        // alert("valid credentials" + json.user._id);
      } else {
        alert("Invalid credentials");
      }
    }, 500);

    // const datacatch = await fetch(
    //   "https://sever-ten-iota.vercel.app/auth/login/5"
    // );
    // console.log("this is response of Login/5", await datacatch.json());
  };

  //for localStorage authentication system
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (localStorage.getItem(credentials.email) === credentials.password) {
  //     props.setUser(true);
  //     sessionStorage.setItem("Loggedin", true);
  //     navigate("/");
  //   } else {
  //     alert("Not match");
  //   }
  // };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Dark Mode
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

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
          Verifying
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

        <div
          className="CardData"
          style={{ background: SecondaryColor }}
          id="formstart"
        >
          <div className="container" style={{ padding: "10vw 10vw 0 10vw" }}>
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
              Login
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
              margin: "20px auto",
            }}
          >
            <button
              type="button"
              className="cancelbtn"
              onClick={() => navigate("/signup")}
            >
              Go to Signup
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
