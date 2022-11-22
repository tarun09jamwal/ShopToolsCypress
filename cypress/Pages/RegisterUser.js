class RegisterUser 
{
    dismissbutton = '//a[contains(text(),"Dismiss")]'
    myAccount = '//a[contains(text(),"My Account")]'
    reguserNameInput = '//div[@class="u-column2 col-2"]//input[@name="username"]'
    regemail = '//div[@class="u-column2 col-2"]//input[@name="email"]'
    regpassword = '//div[@class="u-column2 col-2"]//input[@name="password"]'
    regsubmit = '//div[@class="u-column2 col-2"]//button[@name="register"]'
    verifyAccount = '//a[contains(text(),"Log out")]'

    Registration(registerusername, email, password) 
    {
        cy.visit('https://shop.demoqa.com/')
        cy.xpath(this.dismissbutton).click()
        cy.xpath(this.myAccount).click()
        cy.xpath(this.reguserNameInput).type(registerusername)
        cy.xpath(this.regemail).type(email)
        cy.xpath(this.regpassword).type(password)
        cy.xpath(this.regsubmit).click()
        cy.xpath(this.verifyAccount).invoke("text").should("be.eq", "Log out")
    }
}
export default RegisterUser
