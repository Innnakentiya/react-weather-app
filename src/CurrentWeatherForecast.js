import React from "react";
import FormattedDate from "./FormattedDate.js";
//import image from "./images/sun.svg";

export default function CurrentWeatherForecast(props) {
  return (
    <div className="current-weather-forecast">
      <div className="CurrentWeatherValue">
        <div className="row">
          <div className="col-2 text-center">
            <img
              className="weather-icon-main"
              src={props.data.icon}
              //src={image}
              //icon={props.data.icon}
              alt={props.data.description}
              // alt="Weather Icon"
              id="icon"
              width="90"
            />
            <div
              className="temperature-description text-capitalize"
              id="temperature-description"
            >
              {props.data.description}
            </div>
          </div>
          <div className="col-6">
            <div className="current-day">
              <strong>
                Today <FormattedDate date={props.data.date} />
              </strong>
            </div>
            <div className="current-day-temperature" id="temperature-input">
              <span className="min-temp">
                {Math.round(props.data.minTemp)}℃
              </span>
              <span className="max-temp">
                {" "}
                ... {Math.round(props.data.maxTemp)}℃
              </span>
            </div>
          </div>
          <div className="col-4">
            <ul>
              <li>
                Current temperature :
                <span id="current-temperature">
                  {Math.round(props.data.temperature)}
                </span>
                ℃
              </li>
              <li>
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{props.data.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
