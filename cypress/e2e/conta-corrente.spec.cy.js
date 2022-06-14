describe('Conta-corrente', () => {
  beforeEach(() => {
    cy.visit('') //Acessando Url configurada como baseUrl no arquivo cypress.config.js
  })

  it('Teste em viewport Desktop', () => {
    cy.InformacoesContaCorrente(1366, 768) //Comando personalizado afim de evitar duplicidade de código - comando se encontra em cypress/support/commands.js
  })

  it('Teste em viewport Mobile', () => {
    cy.InformacoesContaCorrente(820, 1180)
  })
})