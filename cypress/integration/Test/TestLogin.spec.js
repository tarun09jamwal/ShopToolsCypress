import Login from "../../Pages/LoginUser";
describe('MyTestSuite2', function () 
{
    const login = new Login
    it('Login User', function ()
    {
        cy.login()
    })
})