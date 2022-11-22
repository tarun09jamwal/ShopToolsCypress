import AddProductToCart from "../../Pages/AddProductToCart"
import ProductBuy from "../../Pages/ProductBuy"
describe('MyTestSuite4', function () 
{
    const addProductToCart = new AddProductToCart
    const productBuy = new ProductBuy
    it('Buy a product', function () 
    {
        cy.login()
        addProductToCart.ProductDetails()
        productBuy.BuyProduct()
        cy.logout()
    })
})