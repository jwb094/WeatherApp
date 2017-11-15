require('dotenv').config()
const express = require("express");
//var expressLayouts = require('express-ejs-layouts');
const bodyParser = require("body-parser");
const app = express();

const indexroutes = require("./routes/indexRoutes");
const weatherRoutes = require("./routes/weatherRoutes");

app.set('view engine', 'ejs');
//app.use(expressLayouts);

//middleware used for web-app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(indexroutes);
app.use(weatherRoutes);

//( environemnt=> different envi e.g. devices || local use)
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});