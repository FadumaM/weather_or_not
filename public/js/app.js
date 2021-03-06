"use strict";

window.onload = function () {

  var URL = "http://localhost:3000/api/weather";

  $.ajax({
    url: URL,
    type: 'GET',

    success: function success(response) {
      neatData(response);
    },
    error: function error(err) {
      console.log("Request failed, error= " + err);
    }
  });

  function neatData(response) {
    var city = response.city.name;
    console.log(response);
  }
};