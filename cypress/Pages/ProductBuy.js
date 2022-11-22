class ProductBuy 
{
    viewCart = '//a[@class="button wc-forward wp-element-button"]'
    checkoutButton = '//a[@class="checkout-button button alt wc-forward wp-element-button"]'
    billFirstName = '//input[@name="billing_first_name"]'
    billLastName = '//input[@name="billing_last_name"]'
    billAddress = '//input[@name="billing_address_1"]'
    billCity = '//input[@name="billing_city"]'
    billPin = '//input[@name="billing_postcode"]'
    billPhone = '//input[@name="billing_phone"]'
    placeOrderButton = '//button[@id="place_order"]'
    termButton = '//input[@name="terms"]'
    verify = '//p[@class="woocommerce-thankyou-order-received"]'

    BuyProduct() 
    {
        cy.xpath(this.viewCart).click()
        cy.xpath(this.checkoutButton).click()
        cy.xpath(this.billFirstName).type('Tarun')
        cy.xpath(this.billLastName).type('Jamwal')
        cy.xpath(this.billAddress).type('House no 512')
        cy.xpath(this.billCity).type('Mandi')
        cy.xpath(this.billPin).type('175001')
        cy.xpath(this.billPhone).type('9876543210')
        cy.xpath(this.termButton).click()
        cy.xpath(this.placeOrderButton).click()
        cy.xpath(this.verify).invoke("text").should("be.eq", "Thank you. Your order has been received.")


    }
}
export default ProductBuy