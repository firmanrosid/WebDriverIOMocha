const LoginPage =require('../pageobjects/login/login.page')
const LoginValidation =require('../pageobjects/login/login.validation')
const ProductsValidation =require('../pageobjects/products/products.validation')

describe('Login to Web', async () => {
    beforeEach(async () => {
        await LoginPage.open()
        await expect(LoginPage.btnSubmit).toBeExisting()
    })
    
    it('Login with valid username and password', async () => {
        await LoginPage.login("standard_user", "secret_sauce")
        await ProductsValidation.isOnPage()
    })
    
    it ('Login with invalid username and password', async () => {
        await LoginPage.login("invalid_user", "invalid_password")
        await LoginValidation.errorMessage("Username and password do not match any user in this service")
    })

    it ('Login with invalid username and valid password', async () => {
        await LoginPage.login("invalid_user", "secret_sauce")
        await LoginValidation.errorMessage("Username and password do not match any user in this service")
    })

    it ('Login with valid username and invalid password', async () => {
        await LoginPage.login("standard_user", "invalid_password")
        await LoginValidation.errorMessage("Username and password do not match any user in this service")
    })

    it ('Login without username and password', async () => {
        await LoginPage.login("", "")
        await LoginValidation.errorMessage("Username is required")
    })

    it ('Login without username and with password', async () => {
        await LoginPage.login("", "secret_sauce")
        await LoginValidation.errorMessage("Username is required")
    })

    it ('Login with username and without password', async () => {
        await LoginPage.login("standard_user", "")
        await LoginValidation.errorMessage("Password is required")
    })
})