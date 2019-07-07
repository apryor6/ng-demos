import { getGreeting } from '../support/app.po';

describe('di-directive', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to di-directive!');
  });
});
