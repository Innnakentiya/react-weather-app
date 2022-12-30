import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}℃`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}℃`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function month() {
    let date = new Date(props.data.dt * 1000);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = date.getMonth();
    let monthDay = date.getDate();
    return `${months[month]} ${monthDay}`;
  }
  return (
    <div>
      <div className="day" id="day">
        {day()}
      </div>
      <div className="date" id="date">
        {month()}
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="temperature-description" id="temperature-description">
        {props.data.weather[0].description}
      </div>
      <div className="temperature" id="temperature-input">
        <span className="min-temp">{minTemperature()}</span>
        <span className="max-temp">/{maxTemperature()}</span>
      </div>
    </div>
  );
}
