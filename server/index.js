const express = require('express')
const path = require("path");

let app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, "../dist")));

app.listen(3000, ()=> {
  console.log(`Listening at http://localhost:3000`);
});