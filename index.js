"use strict";

const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const config = require("./config/config");
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === "object" && "_method" in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      message: 'Unauthorized request.'
    });
  }
  next();
});

//****** Routing *******//
var routes = require("./config/routes");
app.use("/api", routes);

//******** Front End ********* //
app.use("/", express.static(__dirname + "/public"));

app.get("/*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(config.port, function() {
  console.log(`hello !!!! on port ${config.port}`);
});
