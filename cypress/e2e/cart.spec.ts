type User = {
  type: string;
  username: string;
  password: string;
};

import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { assertVisibleAndContains } from '../utils/assertions';

describe('Cart Suite', () => {
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    cy.fixture('users').then((users: User[]) => {
      const user = users.find((u) => u.type === 'valid');
      cy.visit('/');
      cy.get('#user-name').type(user!.username);
      cy.get('#password').type(user!.password);
      cy.get('#login-button').click();
    });
  });

  it('should add an item to the cart and verify it appears in the cart', () => {
    cy.log('Adding Sauce Labs Backpack to cart');
    inventoryPage.addItemToCart('Sauce Labs Backpack');
    cy.log('Navigating to cart');
    inventoryPage.goToCart();
    cy.log('Verifying item appears in cart');
    assertVisibleAndContains('.cart_item', 'Sauce Labs Backpack');
  });

  it('should remove an item from the cart', () => {
    cy.log('Adding Sauce Labs Backpack to cart');
    inventoryPage.addItemToCart('Sauce Labs Backpack');
    cy.log('Navigating to cart');
    inventoryPage.goToCart();
    cy.log('Removing item from cart');
    cartPage.removeItem('Sauce Labs Backpack');
    cy.log('Verifying cart is empty');
    cartPage.getCartItems().should('not.exist');
  });

  it('should proceed to checkout from the cart', () => {
    cy.log('Adding Sauce Labs Backpack to cart');
    inventoryPage.addItemToCart('Sauce Labs Backpack');
    cy.log('Navigating to cart');
    inventoryPage.goToCart();
    cy.log('Proceeding to checkout');
    cartPage.checkout();
    cy.log('Verifying navigation to checkout page');
    cy.url().should('include', '/checkout-step-one.html');
  });
});
