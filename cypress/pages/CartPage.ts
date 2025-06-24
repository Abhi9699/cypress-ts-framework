export class CartPage {
  visit() {
    cy.visit('/cart.html');
  }
  getCartItems() {
    return cy.get('.cart_item');
  }
  removeItem(itemName: string) {
    cy.contains('.cart_item', itemName)
      .find('button')
      .contains(/remove/i)
      .click();
  }
  checkout() {
    cy.get('[data-test="checkout"]').click();
  }
}
