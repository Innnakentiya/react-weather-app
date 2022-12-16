import React from "react";
import image from "./images/sun.svg";

export default function ColWeatherForecast() {
  return (
    <div className="col">
      <div className="day" id="day">
        Tue
      </div>
      <div className="date" id="date">
        August 23
      </div>
      <img
        className="weather-icon"
        src={image}
        alt="Weather Icon"
        id="icon"
        width="70"
      />
      <div className="temperature-description" id="temperature-description">
        Sunny
      </div>
      <div className="temperature" id="temperature-input">
        <span className="min-temp">15℃</span>
        <span className="max-temp">/15℃</span>
      </div>
    </div>
  );
}
