import { getGreeting } from '../support/app.po';

describe('di', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to di!');
  });
});
