/* eslint-disable testing-library/await-async-utils */
/* eslint-disable cypress/no-unnecessary-waiting */
describe("Yolo Table Test", () => {
  it("loads successfully", () => {
    cy.visit("http://localhost:3011");
  });

  it("gets the data", () => {
    cy.visit("http://localhost:3011");
    cy.get('#table').find('tr').should('have.length', 251)
  });

  it("filters the countries", () => {
    cy.visit("http://localhost:3011");
    cy.get("input#filter").type("ee");
    cy.get("tr").eq(1).children().contains("Estonia");
    cy.get("input#filter").clear();
    cy.get("input#filter").type("tr");
    cy.get("tr").eq(1).children().contains("Turkey");
  });
});
