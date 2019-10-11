describe('Test Initial UI', () => {
    beforeEach(() => {
        cy.server()
    
        cy.visit('/')
    })

    it('displays the correct header text', () => {
        cy.get('h2')
            .contains('Your seat reservations')
    })

    it('displays the correct reservation table row count', () => {
        cy.get('.table tbody tr')
            .should('have.length', 2)
    })
})