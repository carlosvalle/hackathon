describe('hackathon', () => {
  beforeEach(() => cy.visit('/'));
  it('should render the component', () => {
    cy.get('hackathon-root').should('exist');
  });
});
