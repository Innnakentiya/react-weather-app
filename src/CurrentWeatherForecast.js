import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function CurrentWeatherForecast(props) {
  return (
    <div className="current-weather-forecast">
      <div className="CurrentWeatherValue">
        <div className="row">
          <div className="col-md-2 text-center">
            <WeatherIcon code={props.data.icon} size={60} />

            <div
              className="temperature-description text-capitalize"
              id="temperature-description"
            >
              {props.data.description}
            </div>
          </div>
          <div className="col-md-6">
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
          <div className="col-md-4">
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
