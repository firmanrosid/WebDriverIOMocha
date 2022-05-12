const { waitFor } = require('wd/lib/commands')
const BasePage = require('../base.page')


class LoginValidation extends BasePage {

    async errorMessage (messageNotification) {
        await expect($("h3[data-test='error']")).toHaveTextContaining(messageNotification)
    }

}

module.exports = new LoginValidation()
