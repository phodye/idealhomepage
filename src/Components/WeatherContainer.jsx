import React from "react";
import WeatherDisplay from './WeatherDisplay.jsx'
import WeatherSearch from './WeatherSearch.jsx'

const WeatherContainer = () => {

  return (
    <>
      <WeatherSearch />
      <WeatherDisplay />
    </>
  );
}

export default WeatherContainer;