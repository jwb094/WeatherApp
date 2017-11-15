class PageController {

    /**@method homePage
     * This function render the home page
     */
    static homePage(req, res) {
        res.render("index")
    }

    /**@method mapPage
     * This function render the map page 
     */
    static mapPage(req, res) {
        res.render("maps")
    }

    /**@method historicalPage
     * This function render the historical page 
     */
    static historicalPage(req, res) {
        res.render("historical")
    }

    /**@method favPage
     * This function render the favourites page 
     */
    static favPage(req, res) {
        res.render("favourites")
    }
}

module.exports = PageController;