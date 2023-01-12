require('dotenv').config();
const express = require('express')
const path = require('path');
const coordinates = require('./Controllers/coordinates.js')

let app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '../dist')));

app.post('/coordinates', (req, res) => {
  console.log('coordinates on the server', req.body)
  coordinates.addForecast(req, res)
  res.end()
})

app.listen(3000, ()=> {
  console.log(`Listening at http://localhost:3000`);
});