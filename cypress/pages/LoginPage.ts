import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  enterUsername(username: string) {
    cy.get('#user-name').clear();
    cy.get('#user-name').type(username);
  }
  enterPassword(password: string) {
    cy.get('#password').clear();
    cy.get('#password').type(password);
  }
  submit() {
    cy.get('#login-button').click();
  }
}
