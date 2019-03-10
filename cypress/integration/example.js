/* eslint-disable */

describe('React Rollup example', function () {
   
    it("Clicks and loads", function () {
        
        cy.visit('/');
        cy.get("h1").should("contain", "React rollup example");
        cy.get("p").should("contain", "Hello World");

        cy.get("[data-cy=btn-load-component").click().then(() => {
            cy.get("[data-cy=btn-load-component").should("not.exist");
            cy.get("[data-cy=dynamic-component]").should("be.visible");
        });
    });

});