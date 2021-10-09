describe('hackathon', () => {
  beforeEach(() => cy.visit('http://localhost:4200/'));
  it('should render the component', () => {
    cy.get('hackathon-root').should('exist');
  });
});
