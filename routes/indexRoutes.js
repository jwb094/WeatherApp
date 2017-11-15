const express = require("express");
const router = express.Router();


const homePageController = require('../controllers/displayIndexPageController');

/* DISPLAY PAGES CALLS */

//home page 
router.route("/")
    .get(homePageController.homePage);
//map page 
router.route("/map")
    .get(homePageController.mapPage);
//historical page 
router.route("/historical")
    .get(homePageController.historicalPage);
//favourites page 
router.route("/favourites")
    .get(homePageController.favPage);


module.exports = router;