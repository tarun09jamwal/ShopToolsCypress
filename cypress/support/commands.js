import Login from '../Pages/LoginUser'
import Logout from '../Pages/Logout'
const login = new Login
const logout = new Logout
const url = "https://shop.demoqa.com/"
const username = "tarun09jamwal"
const password = "qazmlpqwerty"
Cypress.Commands.add('login', () => {

    login.LoginDetails(url, username, password)

})
Cypress.Commands.add('logout', () => {
    logout.UserLogout()
})
