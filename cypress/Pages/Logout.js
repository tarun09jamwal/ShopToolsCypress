class Logout 
{
    myAccount = '//a[contains(text(),"My Account")]'
    logout = "//a[contains(text(),'Logout')]"

    UserLogout() 
    {
        cy.xpath(this.myAccount).click()
        cy.xpath(this.logout).click()
    }
}
export default Logout