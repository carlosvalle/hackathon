describe('hackathon', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('hackathon-root').should('exist');
  });
});