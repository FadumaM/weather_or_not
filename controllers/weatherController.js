"use strict";

let rp = require("request-promise");


function getWeather(req, res) {

  console.log(process.env.WEATHER_API_KEY);

  var options = {
    uri: "http://api.openweathermap.org/data/2.5/forecast",
    qs: {
      APPID: process.env.WEATHER_API_KEY,
      q: "London"
    },
    json: true
  };

  return rp(options)
    .then(function(response) {
      console.log(response);
      return res.status(200).send(response);
    })
    .catch(function(err) {
      console.log("ERROR");
      if (err.error.code === 'no_topics') return res.sendStatus(404);
      return res.status(500).send(err);
    });
}

module.exports = {
  weather: getWeather
}
