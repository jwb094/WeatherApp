const express = require("express");
const router = express.Router();


const homePageController = require('../controllers/displayIndexPageController');

/* DISPLAY PAGES CALLS */

//home(current weather) page 
router.route("/")
    .get(homePageController.homePage);
//forecast page 
router.route("/forecast")
    .get(homePageController.forecastPage);
//map page 
router.route("/map")
    .get(homePageController.mapPage);
//favourites page 
router.route("/favourites")
    .get(homePageController.favPage);



module.exports = router;