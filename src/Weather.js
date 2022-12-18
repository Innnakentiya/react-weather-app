import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ColWeatherForecast from "./ColWeatherForecast.js";
import "./ColWeatherForecast.css";
import image from "./images/sun.svg";
import FormattedDate from "./FormattedDate.js";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  if (ready) {
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
            5-Day Weather Forecast for{" "}
            <span className="city">{props.defaultCity}</span>
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
                    className="temperature-description text-capitalize"
                    id="temperature-description"
                  >
                    {weatherData.description}
                  </div>
                </div>
                <div className="col-6">
                  <div className="current-day">
                    <strong>
                      Today <FormattedDate date={weatherData.date} />
                    </strong>
                  </div>
                  <div
                    className="current-day-temperature"
                    id="temperature-input"
                  >
                    <span className="min-temp">
                      {Math.round(weatherData.minTemp)}℃
                    </span>
                    <span className="max-temp">
                      {" "}
                      ... {Math.round(weatherData.maxTemp)}℃
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <ul>
                    <li>
                      Current temperature :
                      <span id="current-temperature">
                        {Math.round(weatherData.temperature)}
                      </span>
                      ℃
                    </li>
                    <li>
                      Humidity:{" "}
                      <span id="humidity">{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">{weatherData.wind}</span>km/h
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
  } else {
    const apiKey = "1d69840c0c590c7b98248b4102610f33";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
