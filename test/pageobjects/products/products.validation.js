const { waitFor } = require('wd/lib/commands')
const BasePage = require('../base.page')
const ProductsPage = require('../products/products.page')

class ProductsValidation extends BasePage {

    async isOnPage() {
        return expect(ProductsPage.ctrInventory).toBeExisting()
    }
}

module.exports = new ProductsValidation();
