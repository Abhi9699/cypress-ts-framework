// cypress/support/commands.ts
import { LoginPage } from '../pages/LoginPage';

const loginPage = new LoginPage();

Cypress.Commands.add('login', (username: string, password: string) => {
  loginPage.visit();
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.submit();
});
