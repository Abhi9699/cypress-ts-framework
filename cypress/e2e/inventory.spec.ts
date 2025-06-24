type User = {
  type: string;
  username: string;
  password: string;
};

import { InventoryPage } from '../pages/InventoryPage';
import { assertVisibleAndContains } from '../utils/assertions';

describe('Inventory Suite', () => {
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    cy.fixture('users').then((users: User[]) => {
      const user = users.find((u) => u.type === 'valid');
      cy.visit('/');
      cy.get('#user-name').type(user!.username);
      cy.get('#password').type(user!.password);
      cy.get('#login-button').click();
    });
  });

  it('should display inventory items', () => {
    cy.log('Checking that inventory items are displayed');
    inventoryPage.getItemNames().should('have.length.greaterThan', 0);
  });

  it('should add an item to the cart from inventory page', () => {
    cy.log('Adding Sauce Labs Backpack to cart');
    inventoryPage.addItemToCart('Sauce Labs Backpack');
    cy.log('Verifying cart badge increments');
    assertVisibleAndContains('.shopping_cart_badge', '1');
  });

  // Add more inventory-related tests as needed
});
