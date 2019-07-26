/* eslint-disable */

describe("React Rollup example", function() {
  beforeEach(() => {
    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          registration.unregister();
        });
      });
    }
  });
  it("Clicks and loads", function() {
    cy.on('uncaught:exception', (err, runnable) => {
        // prevents electron from failling the test when `import()` throws
        return false;
    })
    cy.visit("/");
    cy.get("h1").should("contain", "React rollup example");
    cy.get("p").should("contain", "Hello World");

    cy.get("[data-cy=btn-load-component")
      .click()
      .then(() => {
        cy.get("[data-cy=btn-load-component").should("not.exist");
        cy.get("[data-cy=dynamic-component]").should("be.visible");
      });
  });
});
