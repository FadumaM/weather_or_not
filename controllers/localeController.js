"use strict";

let rp = require("request-promise");


function getLocale(req, res) {

  console.log("hi");

  var options = {
    uri: "http://ip-api.com/json",
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
  locale: getLocale
}
