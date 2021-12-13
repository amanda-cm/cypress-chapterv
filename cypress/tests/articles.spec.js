/// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {
  beforeEach(() => { // hook trecho que deve ser executado antes de cada teste
    cy.login()
    cy.visit('/') // home é a url e /
  })
  it('Quando eu preencher todas as informações e salvar, então o article deve ser publicado', () => {
    // acessar formulário arrange
    articles.acessarForm()

    // preencher informações act
    articles.preencherForm()

    // clicar para finalizar act
    articles.submeterForm()

    // verificações assert
    articles.verificarForm()
  })
})
