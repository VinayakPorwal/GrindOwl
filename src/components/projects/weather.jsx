import React, { useState } from "react";
import { UserContext } from "../../App";
import { useContext } from "react";

import "./weather.css";
function Weather() {
  const [load, setLoad] = useState(false);
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);

  // ------Weather logic-------
  var input = document.querySelector(".input_text");
  var main = document.querySelector("#name");
  var temp = document.querySelector(".temp");
  var feels = document.querySelector(".feeltemp");
  var desc = document.querySelector(".desc");
  var pressu = document.querySelector(".pres");
  var humad = document.querySelector(".hum");
  var clouds = document.querySelector(".clouds");
  var button = document.querySelector("#submit");
  const [url, setUrl] = useState("http://openweathermap.org/img/w/01d.png");
  const [city, setCity] = useState("");
  const [error, setError] = useState();

  const getWeather = async () => {
    setLoad(true);

    if (!city) {
      return;
    }
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75604dabe1d443f2296dedb386f124a4`
      // "https://server-ten-iota.vercel.app/Weather/" + city
    );
    const data = await res.json();
    // const info = await res.json();
    // const data = info.data;
    console.log(data);
    if (data.cod === 200) {
      setUrl(
        "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png"
        // info.image
      );
      setError("");
      var tempValue = data["main"]["temp"];
      var feelslike = data["main"]["feels_like"];
      var nameValue = data["name"];
      var descValue = data["weather"][0]["description"];
      var cloudValue = data["clouds"]["all"];
      var pres = data["main"]["pressure"];
      var huma = data["main"]["humidity"];
      var celsius = tempValue - 273.15;
      var feelslike = feelslike - 273.15;
      celsius = Math.round(celsius * 100) / 100;
      feelslike = Math.round(feelslike * 100) / 100;

      setLoad(false);
      setCity("");
      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - " + descValue;
      humad.innerHTML = "humadity - " + huma;
      pressu.innerHTML = "pressure - " + pres;
      temp.innerHTML = "Temp - " + celsius + "°C";
      // feels.innerHTML = "feels like - " + feelslike + "°C";
      clouds.innerHTML = "Clouds - " + cloudValue;
    } else {
      setLoad(false);
      setError(data.message);
    }
    // console.log(data);
  };

  function keyPress(e) {
    if (e.keyCode === 13) {
      console.log("Enter");
      getWeather();
    }
  }
  return (
    <div
      style={{
        background: "none",
        margin: "10vh 0 0 0",
      }}
    >
      <h2 className="Cardhead" style={{ color: Pcolor }}>
        Weather API
      </h2>
      <br />
      <div className="main">
        <div className="input-group">
          <input
            type="text"
            className="input"
            id="Email"
            placeholder="Type Your City Name..."
            autoComplete="off"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={keyPress}
            style={{
              color: Pcolor,
            }}
          />
          <button className="button--submit" onClick={getWeather}>
            <i
              className="fa fa-search"
              style={{ color: "white", background: "none" }}
            ></i>
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
      </div>
      <div className="output">
        <div
          className="card card1"
          style={{ background: "var(--dblue)", color: Pcolor }}
        >
          <img className="weathericon" src={url} alt="" />
        </div>
        <div
          className="card card2"
          style={{ background: SecondaryColor, color: Pcolor }}
        >
          <h1 className="name" id="name" style={{ color: "var(--dblue)" }}>
            City
          </h1>
          <p className="temp">Temp : 00</p>
          {/* <p className="feeltemp">Temp : 00</p> */}
          <p className="clouds">Clouds : none</p>
          <p className="desc">Description : none</p>
          <p className="pres">Pressure : none</p>
          <p className="hum"> Humadity : none</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
