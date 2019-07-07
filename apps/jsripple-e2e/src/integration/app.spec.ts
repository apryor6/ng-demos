import { getGreeting } from '../support/app.po';

describe('jsripple', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to jsripple!');
  });
});
