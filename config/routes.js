"use strict";

let express = require('express');
let router = express.Router();


//********* Controller *************//

let localeController = require("../controllers/localeController");
let weatherController = require("../controllers/weatherController");



//******* Routes ***********//

router.route('/locale')
  .get(localeController.locale);
router.route('/weather')
  .get(weatherController.weather);


module.exports = router;
