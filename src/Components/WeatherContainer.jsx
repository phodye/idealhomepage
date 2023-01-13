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
        getForecasts()
      })
      .catch((err) => {
        console.log('error searching coordinates', err)
      })
  }

  const getForecasts = () => {
    axios.get('/forecasts')
      .then((data) => {
        setForecastList(data.data)
      })
      .catch((err) => {
        console.log('error getting forecasts', err)
      })
  }

  useEffect(() => {
    getForecasts()
  }, [])

  return (
    <>
      <WeatherSearch findCityForecast={findCityForecast} />
      {forecastList.length > 0 ?
      forecastList.map((city, index) => {
        return <WeatherDisplay key={index} city={city} findCityForecast={findCityForecast}/>
      })
      : null}
    </>
  );
}

export default WeatherContainer;