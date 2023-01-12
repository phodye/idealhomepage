const pool = require('../.././database/pool.js')
const axios = require('axios')
require('dotenv').config()

const addForecast = (request, response) => {
  console.log('city and state in controller', request.body)

  let cityName = request.body.city
  let stateCode = request.body.state
  let countryCode = request.body.country
  let existQuery = `SELECT * FROM forecasts WHERE CITYNAME = $1`
  let addQuery = `INSERT INTO forecasts (cityname, statecode, countrycode, currenttemp, hightemp, lowtemp, descriptor, weathericon) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`

  pool
    .query(existQuery, [cityName])
    .then((res) => {
      console.log(res.rows)
      if (res.rows.length === 0) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},${countryCode}&appid=${process.env.appid}`)
        .then((data) => {
          console.log(data.data)
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
      }
    })
    .catch((err) => {
      console.log('error in add coordinates', err)
      response.status(500);
    })
}

module.exports = {addForecast}