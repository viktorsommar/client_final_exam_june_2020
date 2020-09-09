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
    cy.get("[data-cy=image]").should("be.visible")
  })
})