const pool = require('../.././database/pool.js')
const axios = require('axios')
require('dotenv').config()

const addForecast = (request, response) => {
  let cityName = request.body.city
  let stateCode = request.body.state
  let countryCode = request.body.country
  let existQuery = `SELECT * FROM forecasts WHERE CITYNAME = $1`
  let addQuery = `INSERT INTO forecasts (cityname, statecode, countrycode, currenttemp, hightemp, lowtemp, descriptor, weathericon) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
  let updateQuery = `UPDATE forecasts SET currenttemp = $1, hightemp = $2, lowtemp = $3, descriptor = $4, weathericon = $5 WHERE cityname = $6`

  pool
    .query(existQuery, [cityName])
    .then((res) => {
      if (res.rows.length === 0) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},${countryCode}&appid=${process.env.appid}`)
        .then((data) => {
          let forecast = data.data
          pool
            .query(addQuery, [cityName, stateCode, countryCode, forecast.main.temp, forecast.main.temp_max, forecast.main.temp_min, forecast.weather[0].main, forecast.weather[0].icon])
              .then(response.send())
              .catch((err) => {
                console.log('error adding forecast to db', err)
                response.status(500)
              })
        })
        .catch((err) => console.log(err))
      } else {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},${countryCode}&appid=${process.env.appid}`)
        .then((data) => {
          let forecast = data.data
          pool
            .query(updateQuery, [forecast.main.temp, forecast.main.temp_max, forecast.main.temp_min, forecast.weather[0].main, forecast.weather[0].icon, cityName])
              .then(response.send())
              .catch((err) => {
                console.log('error updating forecast in db', err)
                response.status(500)
              })
        })
        .catch((err) => console.log(err))
      }
    })
    .catch((err) => {
      console.log('error in add coordinates', err)
      response.status(500);
    })
}

const getAllForecasts = (request, response) => {
  let getQuery = `SELECT * FROM forecasts`

  pool
    .query(getQuery)
      .then((data) => {
        response.send(data.rows)
      })
      .catch((err) => {
        console.log('error getting forecasts', err)
        response.status(500)
      })
}

module.exports = {addForecast, getAllForecasts}