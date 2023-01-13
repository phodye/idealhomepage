import React from "react";

const WeatherDisplay = ({city}) => {
  console.log(city)
  const convertToFarhrenheit = (temp) => {
    return Math.floor(9/5 * (temp - 273) + 32)
  }

  function msToTime(ms) {
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60) return Math.round(seconds) + " seconds ago";
    else if (minutes < 60) return Math.round(minutes) + " minutes ago";
    else if (hours < 24) return Math.round(hours) + " hours ago";
    else return days + " days ago"
  }

  let utcDate = city.added;  // ISO-8601 formatted date returned from server
  let lastUpdated = new Date(utcDate)
  lastUpdated = new Date().getTime() - lastUpdated.getTime()
  lastUpdated = msToTime(lastUpdated)

  return (
    <>
      <div className="forecast">
        <p>{city.cityname}, {city.statecode}</p>
        <p>{city.descriptor}</p>
        <p>Current: {convertToFarhrenheit(city.currenttemp)}</p>
        <p>High: {convertToFarhrenheit(city.hightemp)}</p>
        <p>Low: {convertToFarhrenheit(city.lowtemp)}</p>
        <img src={`http://openweathermap.org/img/w/${city.weathericon}.png`}></img>
        <p>Last Updated: {lastUpdated}</p>
      </div>
    </>
  );
}

export default WeatherDisplay;