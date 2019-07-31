import { getGreeting } from '../support/app.po';

describe('input-validation', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to input-validation!');
  });
});
