import React from "react";
import WeatherDisplay from './WeatherDisplay.jsx'
import WeatherSearch from './WeatherSearch.jsx'

const WeatherContainer = () => {

  const findCityCoordinates = (city, state) => {
    console.log(city, state)
  }

  return (
    <>
      <WeatherSearch findCityCoordinates={findCityCoordinates} />
      <WeatherDisplay />
    </>
  );
}

export default WeatherContainer;