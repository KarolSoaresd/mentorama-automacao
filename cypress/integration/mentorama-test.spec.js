describe('Acessar blog do Thoughtbot', () => {
  beforeEach(() => {
    cy.visit('https://thoughtbot.com/blog/tags') // passo que deverá rodar sempre antes de cada teste
  })

  it('Positivo: Validar direcionamento para o artigo do item selecionado', () => {
    cy.get(':nth-child(6) > :nth-child(15) > .tags-list-link').click() // após acessar o blog iremos clicar no item 
    cy.url().should('be.equal', 'https://thoughtbot.com/blog/tags/bug') // é o assert para validar se a ação passada deu o resultado que esperavamos
    cy.get('.page-title').should('contain', 'Bug Articles') // assert para validar se o título do artigo corresponde ao item selecionada no primeiro passo
  })

  it('Negativo: Validar campo de pesquisa com texto inválido', () => {
    cy.get('.site-nav-search-icon').click() 
    cy.get('#query').type('kssksss')
    cy.get('.input-button-unit > .button').click()
    cy.get('.search-results-summary').should('be.visible')
    cy.get('.search-results-summary').should('contain', 'No articles found')
  })
})
