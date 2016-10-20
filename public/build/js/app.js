window.onload = function() {
  $.ajax({
    url: "http://localhost:3001/api/weather",
    type: 'GET',
    success: function(response) {
      console.log(response);
    },
    error: function(err) {
      console.log("Request failed, error= " + err);
    }
  });
}
