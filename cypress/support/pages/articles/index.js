const el = require('./elements').ELEMENTS // constante el vai fazer uma requisição na pasta elements e importar a constante ELEMENTS
class Articles {
  // funções para acessar formulário, preencher, submeter e verificar
  acessarForm () {
    cy.get(el.novoArtigo).click()
  }

  preencherForm () {
    cy.get(el.titulo).type('Título- Artigo teste')
    cy.get(el.descricao).type('Descrição para o artigo teste')
    cy.get(el.conteudo).type('Corpo do artigo')
    cy.get(el.tag).type('Teste cypress')
  }

  submeterForm () {
    cy.contains('button', 'Publish Article').click()
  }

  verificarForm () {
    cy.contains('Título- Artigo teste').should('be.visible')
  }
}

export default new Articles() // exportar nova instancia da classe
