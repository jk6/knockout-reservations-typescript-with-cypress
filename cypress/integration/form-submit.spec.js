describe("button events", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });

  it("removes a reservation row when the Remove button is clicked", () => {
    cy.get("#removeReservation").click();

    cy.wait(500).then(() => {
      cy.get(".table tbody tr").should("have.length", 1);
    });
  });

  it("adds a reservation row when reserve button is clicked", () => {
    cy.get("#addReservation").click();

    cy.wait(500).then(() => {
      cy.get(".table tbody tr").should("have.length", 3);
    });

    cy.get(":nth-child(3) > :nth-child(2) > .form-control").contains(
      "Standard (sandwich)"
    );

    cy.get(":nth-child(3) > :nth-child(1) > .form-control").should("be.empty");
  });
});
