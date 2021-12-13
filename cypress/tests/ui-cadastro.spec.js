/// <reference types="cypress" />

describe('Cadastro', () => {
  it('Cadastro concluido com sucesso', () => {
    // mock para controlar o que retorna o front, não é resposta do servidor
    cy.intercept({ // ROUTMATCHER: Encontra a rota

      // url completa hostname+path: https://api.realworld.io/api/users
      // hostname: https://api.realworld.io
      // path: /api/users
      // Request Method: POST
      // especificando a rota

      method: 'POST',
      path: '/api/users'

    }, { // ROUTHANDLER: Manipula o conteúdo da rota
      statusCode: 200,
      fixture: 'cadastro-sucesso'

    }).as('postUsers')

    cy.visit('register')
    cy.get('.form-control[placeholder=Username]').type('Jubileu')
    cy.get('.form-control[placeholder=Email]').type('jubileu@mail.com')
    cy.get('.form-control[placeholder=Password]').type('tyuiop')
    cy.get('.btn[type=submit]').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuário duplicado', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 422,
      fixture: 'cadastro-erro-name'
    }).as('postUsers')

    cy.visit('register')
    cy.get('.form-control[placeholder=Username]').type('Jubileu')
    cy.get('.form-control[placeholder=Email]').type('jubileu@mail.com')
    cy.get('.form-control[placeholder=Password]').type('tyuiop')
    cy.get('.btn[type=submit]').click()

    cy.contains('username has already been taken').should('be.visible')
  })

  it('Cadastro com e-mail duplicado', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'cadastro-erro-email'
    })

    cy.visit('register')
    cy.get('.form-control[placeholder=Username]').type('Jubileu')
    cy.get('.form-control[placeholder=Email]').type('jubileu@mail.com')
    cy.get('.form-control[placeholder=Password]').type('tyuiop')
    cy.get('.btn[type=submit]').click()

    cy.contains('email has already been taken').should('be.visible')
  })
})
