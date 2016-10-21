"use strict";

window.onload = function() {

  const URL = "http://localhost:3000/api/weather";

  $.ajax({
    url: URL,
    type: 'GET',

    success: function(response) {
      neatData(response);
    },
    error: function(err) {
      console.log("Request failed, error= " + err);
    }
  });

  function neatData(response) {
    let city = response.city.name;
    console.log(response);
  }

}
