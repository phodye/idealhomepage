import React from "react";

const WeatherDisplay = ({city}) => {
  const convertToFarhrenheit = (temp) => {
    return Math.floor(9/5 * (temp - 273) + 32)
  }

  return (
    <>
      <div className="forecast">
        <p>{city.cityname}, {city.statecode}</p>
        <p>{city.descriptor}</p>
        <p>Current: {convertToFarhrenheit(city.currenttemp)}</p>
        <p>High: {convertToFarhrenheit(city.hightemp)}</p>
        <p>Low: {convertToFarhrenheit(city.lowtemp)}</p>
        <img src={`http://openweathermap.org/img/w/${city.weathericon}.png`}></img>
      </div>
    </>
  );
}

export default WeatherDisplay;