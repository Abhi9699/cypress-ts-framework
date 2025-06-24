export class BasePage {
  visit(path: string = '/') {
    cy.visit(path);
  }
  getTitle() {
    return cy.title();
  }
}
