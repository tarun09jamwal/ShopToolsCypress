class Login 
{
    dismissbutton = '//a[contains(text(),"Dismiss")]'
    myAccount = '//a[contains(text(),"My Account")]'
    userName = '//input[@id="username"]'
    passWord = '//input[@id="password"]'
    loginButton = '//button[@name="login"]'
    verifyUser = "//strong[contains(text(),'tarun09jamwal')][1]"

    LoginDetails(url, username, password) 
    {
        cy.visit(url)
        cy.xpath(this.dismissbutton).click()
        cy.xpath(this.myAccount).click()
        cy.xpath(this.userName).type(username)
        cy.xpath(this.passWord).type(password)
        cy.xpath(this.loginButton).click()
        cy.xpath(this.verifyUser).invoke("text").should("be.eq", "tarun09jamwal")

    }
}
export default Login