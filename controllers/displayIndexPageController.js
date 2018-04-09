class PageController {

    /**@method homePage
     * This function render the home page
     */
    static homePage(req, res) {
        res.render("index")
    }

    /**@method forecastPage
     * This function render the forecast page 
     */
    static forecastPage(req, res) {
        res.render("forecast")
    }

    /**@method mapPage
     * This function render the favourites page 
     */
    static mapPage(req, res) {
        res.render("map")
    }

    /**@method favPage
     * This function render the fav page 
     */
    static favPage(req, res) {
        res.render("favourites")
    }
}

module.exports = PageController;