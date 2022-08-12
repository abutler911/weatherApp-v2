const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { prependListener } = require("process");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const sendData = {
    location: "Location",
    temp: "Temp",
    description: "Description",
    windDirection: "Wind Direction",
    windSpeed: "Wind Speed",
    uvIndex: "UV Index",
    state: "State",
    country: "Country",
    time: "Time",
  };
  res.render("index", { sendData: sendData });
});

// app.post("/", async (req, res) => {
//   let location = await req.body.city;
//   const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${location}`;
//   const response = await axios.get(url);

//   const state = response.data.location.region;
//   const country = response.data.location.country;
//   const temp = response.data.current.temperature;
//   const time = response.data.current.observation_time;
//   const windDirection = response.data.current.wind_dir;
//   const windSpeed = response.data.current.wind_speed;
//   const description = response.data.current.weather_descriptions;
//   const uvIndex = response.data.current.uv_index;
//   const humidity = response.data.current.humidity;
//   const precip = response.data.current.precip;

//   const sendData = {};
//   sendData.location = location;
//   sendData.state = state;
//   sendData.country = country;
//   sendData.temp = temp;
//   sendData.time = time;
//   sendData.windDirection = windDirection;
//   sendData.windSpeed = windSpeed;
//   sendData.description = description;
//   sendData.uvIndex = uvIndex;
//   sendData.humidity = humidity;
//   sendData.precip = precip;
//   res.render("index", { sendData: sendData });
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
