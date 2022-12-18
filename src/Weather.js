import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ColWeatherForecast from "./ColWeatherForecast.js";
import "./ColWeatherForecast.css";
//import image from "./images/sun.svg";
//import FormattedDate from "./FormattedDate.js";
import CurrentWeatherForecast from "./CurrentWeatherForecast";

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
          <CurrentWeatherForecast data={weatherData} />
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
