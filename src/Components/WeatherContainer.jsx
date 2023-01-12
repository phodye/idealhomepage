import React from "react";
import WeatherDisplay from './WeatherDisplay.jsx'
import WeatherSearch from './WeatherSearch.jsx'
import axios from 'axios';

const WeatherContainer = () => {

  const findCityCoordinates = (city, state, country) => {
    console.log(city, state, country)
    axios.post('/coordinates', { city, state, country })
      .then(() => {
        console.log('posted')
      })
      .catch((err) => {
        console.log('error searching coordinates', err)
      })
  }

  return (
    <>
      <WeatherSearch findCityCoordinates={findCityCoordinates} />
      <WeatherDisplay />
    </>
  );
}

export default WeatherContainer;