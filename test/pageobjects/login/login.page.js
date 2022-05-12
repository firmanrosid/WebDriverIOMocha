const BasePage = require('../base.page')

class LoginPage extends BasePage {

    get inputUsername () {
        return $('#user-name')
    }

    get inputPassword () {
        return $('#password')
    }

    get btnSubmit () {
        return $('#login-button')
    }

    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
    }

    open () {
        return super.open("")
    }
}

module.exports = new LoginPage()
