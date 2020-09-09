describe("User can see list of shows", () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:list_of_shows.json"
    })
    cy.visit("/")
  })

  it("on display with several titles", () => {
    cy.get("#greys-anatomy").should("be.visible")
    cy.get("#hawaii-five-0").should("be.visible")
    cy.get("#partisan").should("be.visible")
    cy.get("#seal-team").should("be.visible")
    cy.get("#vampire-diaries-the").should("be.visible")
    cy.get("#scrubs").should("be.visible")
    cy.get("#office-the").should("be.visible")
    cy.get("#svenska-fall").should("be.visible")
    cy.get("#areakuten").should("be.visible")
    cy.get("#american-dad").should("be.visible")
  })
})