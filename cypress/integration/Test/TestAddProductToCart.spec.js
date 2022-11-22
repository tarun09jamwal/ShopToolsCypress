import Login from "../../Pages/LoginUser";
import AddProductToCart from "../../Pages/AddProductToCart"
describe('MyTestSuite3', function()
{
    const login = new Login
    const addProductToCart = new AddProductToCart
    it('Add product to cart', function () 
    {
        cy.login()
        addProductToCart.ProductDetails()
        cy.logout()
    })
})