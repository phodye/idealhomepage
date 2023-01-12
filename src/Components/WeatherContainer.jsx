import React from "react";
import WeatherDisplay from './WeatherDisplay.jsx'
import WeatherSearch from './WeatherSearch.jsx'
import axios from 'axios';

const { useState, useEffect } = React;

const WeatherContainer = () => {
  const [forecastList, setForecastList] = useState([])

  const findCityForecast = (city, state, country) => {
    axios.post('/city', { city, state, country })
      .then(() => {
        console.log('posted')
      })
      .catch((err) => {
        console.log('error searching coordinates', err)
      })
  }

  const getForecasts = () => {
    axios.get('/forecasts')
  }

  return (
    <>
      <WeatherSearch findCityForecast={findCityForecast} />
      <WeatherDisplay />
    </>
  );
}

export default WeatherContainer;