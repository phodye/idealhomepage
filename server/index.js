require('dotenv').config();
const express = require('express')
const path = require('path');
const forecasts = require('./Controllers/forecasts.js')

let app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '../dist')));

app.post('/city', (req, res) => {
  forecasts.addForecast(req, res)
})

app.listen(3000, ()=> {
  console.log(`Listening at http://localhost:3000`);
});