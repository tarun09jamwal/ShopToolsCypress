class AddProductToCart {
    searchInput = '//a[@class="noo-search"]'
    innerSearch = '//input[@type="search"]'
    colorDropDown = '//select[@id="pa_color"]'
    size = '//select[@id="pa_size"]'
    addToCartButton = '(//button[@type="submit"])[2]'
    verify = '//div[@class="woocommerce-notices-wrapper"]'
    ProductDetails()
    {
        cy.xpath(this.searchInput).click()
        cy.xpath(this.innerSearch).type('PINK DROP').wait(2000).type('{enter}')
        cy.xpath(this.colorDropDown).select('Pink')
        cy.xpath(this.size).select('36')
        cy.xpath(this.addToCartButton).click()
        cy.xpath(this.verify).invoke("text").should("be.eq", "\n\t\n\t\tView cart “pink drop shoulder oversized t shirt” has been added to your cart.\t\n")
    }
}
export default AddProductToCart