export class InventoryPage {
  visit() {
    cy.visit('/inventory.html');
  }
  getItemNames() {
    return cy.get('.inventory_item_name');
  }
  addItemToCart(itemName: string) {
    cy.contains('.inventory_item_name', itemName)
      .parents('.inventory_item')
      .find('button')
      .contains(/add to cart/i)
      .click();
  }
  goToCart() {
    cy.get('.shopping_cart_link').click();
  }
}
