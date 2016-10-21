"use strict";

let express = require('express');
let router = express.Router();


//********* Controller *************//

let weatherController = require("../controllers/weatherController");



//******* Routes ***********//

router.route('/weather')
  .get(weatherController.weather);


module.exports = router;
