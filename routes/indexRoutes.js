const express = require("express");
const router = express.Router();


const pagesController = require('../controllers/displayPagesController');

/* DISPLAY PAGES CALLS */

//home(current weather) page 
router.route("/")
    .get(pagesController.homePage);
//forecast page 
router.route("/forecast")
    .get(pagesController.forecastPage);
//map page 
router.route("/map")
    .get(pagesController.mapPage);




module.exports = router;