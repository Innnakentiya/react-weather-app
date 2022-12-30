import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import ColWeatherForecast from "./ColWeatherForecast.js";
import "./ColWeatherForecast.css";
//import image from "./images/sun.svg";
//import FormattedDate from "./FormattedDate.js";
import CurrentWeatherForecast from "./CurrentWeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    //console.log(response.data);
    setWeatherData({
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "1d69840c0c590c7b98248b4102610f33";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="weather">
        <div className="Search">
          <form onSubmit={handleSubmit} id="search-form">
            <input
              type="text"
              placeholder="Type a city"
              id="city-input"
              autoComplete="off"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="location">
          <h1>
            5-Day Weather Forecast for{" "}
            <span className="city">{weatherData.city}</span>
          </h1>
        </div>
        <div className="weather-forecast">
          <CurrentWeatherForecast data={weatherData} />
          <hr />
          <div className="weatherForecast" id="forecast">
            <ColWeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
