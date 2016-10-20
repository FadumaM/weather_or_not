"use strict";

let rp = require("request-promise");

function getLocale() {

  console.log("hi");

  var localeObject = {
    uri: "http://ip-api.com/json",
    json: true
  };

  return rp(localeObject)
}

function getWeather(city) {

  var options = {
    uri: "http://api.openweathermap.org/data/2.5/forecast",
    qs: {
      APPID: process.env.WEATHER_API_KEY,
      q: city
    },
    json: true
  };

  return rp(options)

}

function start(req, res) {
  return getLocale()
    .then(function(response) {
      let city = response.city
      return getWeather(city);
    })
    .then(function(response) {
      console.log(response);
      return res.status(200).send(response);
    })
    .catch(function(err) {
      console.log(err);
      if (err.error.code === 'no_topics') return res.sendStatus(404);
      return res.status(500).send(err);
    });

}

module.exports = {
  weather: start
}
