import React from "react";
import "./Weather.css";
import ColWeatherForecast from "./ColWeatherForecast.js";
import "./ColWeatherForecast.css";
import image from "./images/sun.svg";

export default function Weather() {
  return (
    <div className="weather">
      <div className="Search">
        <form id="search-form">
          <input
            type="text"
            placeholder="Type a city"
            id="city-input"
            autoComplete="off"
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="location">
        <h1>
          5-Day Weather Forecast for <span className="city">Madrid</span>
        </h1>
      </div>
      <div className="weather-forecast">
        <div className="current-weather-forecast">
          <div className="CurrentWeatherValue">
            <div className="row">
              <div className="col-2 text-center">
                <img
                  className="weather-icon-main"
                  src={image}
                  alt="Weather Icon"
                  id="icon"
                  width="90"
                />
                <div
                  className="temperature-description"
                  id="temperature-description"
                >
                  Sunny
                </div>
              </div>
              <div className="col-6">
                <div className="current-day">Today</div>
                <div className="current-day-temperature" id="temperature-input">
                  <span className="min-temp">+15℃</span>
                  <span className="max-temp"> ...+15℃</span>
                </div>
              </div>
              <div className="col-4">
                <ul>
                  <li>
                    Current temperature :<span id="current-temperature">5</span>
                    ℃
                  </li>
                  <li>
                    Humidity: <span id="humidity">67</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">3</span>km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="weatherForecast" id="forecast">
          <div className="row">
            <ColWeatherForecast />
            <ColWeatherForecast />
            <ColWeatherForecast />
            <ColWeatherForecast />
            <ColWeatherForecast />
          </div>
        </div>
      </div>
    </div>
  );
}
