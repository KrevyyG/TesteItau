Cypress.Commands.add('InformacoesContaCorrente', (width, height) => {
    cy.viewport(width, height)
    
    if(width < 1270){
        cy.get('#hamburguer-menu') //Pegando o seletor do menu hambúrguer
        .should('be.visible')
        .click()

        cy.get('#button-search-mobile') //Pegando o seletor do campo de busca mobile
        .should('be.visible')
        .click()

      cy.get('#inputSearch-search') //Pegando o seletor do campo de busca
        .should('be.visible')
        .type('conta-corrente') //Escrevendo "conta-corrente" no campo de busca
        .blur() //Tirando o foco do campo em questão
    }
    else{
        cy.get(':nth-child(5) > .dropdown-toggle') //Pegando o seletor do link "busca"
        .should('be.visible') //Verificando se ele está visível para o usuário
        .click() //Clicando

        cy.get('#inputSearch-search') //Pegando o seletor do campo de busca
        .should('be.visible')
        .type('conta-corrente') //Escrevendo "conta-corrente" no campo de busca
        .blur() //Tirando o foco do campo em questão
    }

    cy.get('.button-container > .ng-star-inserted') //Pegando o seletor do botão "abra sua conta"
        .should('be.visible') //O correto seria verificar se o botão se encontra visível para o usuário, mas a aplicação não permite
        .click()

      cy.get('.title') //Pegando o seletor do título da página
        .first()
        .should('have.text', ' Abra uma Conta Corrente ') //Validando que as informações de abrir uma conta corrente estão válidas
})