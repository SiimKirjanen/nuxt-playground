describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome');
    cy.contains('p', 'Examples of Nuxt usage');
  });
});
