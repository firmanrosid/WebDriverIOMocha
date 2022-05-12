const BasePage = require('../base.page')

class ProductsPage extends BasePage {
    get ctrInventory() {
        return $("#inventory_container")
    }

}

module.exports = new ProductsPage()