import RegisterUser from '../../Pages/RegisterUser'
describe('MyTestSuite1', function() {
    before(function () 
    {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })

    const registerUser = new RegisterUser
    it('Register New User', function() 
    {
        registerUser.Registration(this.data.registerusername, this.data.regemail, this.data.regpassword)
        cy.logout()
    })
})



