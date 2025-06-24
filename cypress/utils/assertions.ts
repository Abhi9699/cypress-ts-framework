// Custom assertion utilities for Cypress specs

/**
 * Asserts that an element is visible and contains the expected text.
 * @param selector - The selector for the element.
 * @param expectedText - The text expected to be found in the element.
 */
export function assertVisibleAndContains(selector: string, expectedText: string) {
  cy.get(selector).should('be.visible').and('contain.text', expectedText);
}

/**
 * Asserts that an element does not exist or is not visible.
 * @param selector - The selector for the element.
 */
export function assertNotVisible(selector: string) {
  cy.get(selector).should('not.exist');
}
