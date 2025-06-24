type User = {
  type: string;
  username: string;
  password: string;
};

import { LoginPage } from '../pages/LoginPage';

describe('Login Suite', () => {
  let users: User[];
  const loginPage = new LoginPage();

  before(() => {
    cy.fixture('users').then((data: User[]) => {
      users = data;
    });
  });

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login with valid credentials', () => {
    const user = users.find((u) => u.type === 'valid');
    loginPage.enterUsername(user!.username);
    loginPage.enterPassword(user!.password);
    loginPage.submit();
    cy.url().should('include', '/inventory.html');
  });

  it('should not login with invalid credentials', () => {
    const user = users.find((u) => u.type === 'invalid');
    loginPage.enterUsername(user!.username);
    loginPage.enterPassword(user!.password);
    loginPage.submit();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('should not login with empty fields', () => {
    loginPage.submit();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('should not login with locked out user', () => {
    const user = users.find((u) => u.type === 'locked');
    loginPage.enterUsername(user!.username);
    loginPage.enterPassword(user!.password);
    loginPage.submit();
    cy.get('[data-test="error"]').should('be.visible');
  });
});
