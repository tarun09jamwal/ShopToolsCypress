import Logout from "../../Pages/Logout"
describe('MyTestSuite4', function () 
{
    const logout = new Logout
    it('Buy a product', function () 
    {
        cy.login()
        cy.logout()
    })
})