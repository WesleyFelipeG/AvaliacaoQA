class ConsultaDadosPage {
  acessarSite() {
    cy.visit("https://dados.gov.br/");
  }

  pesquisar(termo) {
    cy.get("input[type='search']", { timeout: 15000 })
      .should("be.visible")
      .clear()
      .type(termo + "{enter}");
  }

  validarResultados(termo) {
    //verfica se há resultados
    cy.get(".dataset-item", { timeout: 15000 }).should("exist");

    //verifica se aparece na guia
    cy.contains(termo, { timeout: 15000 }).should("exist");
  }
}

export default ConsultaDadosPage;
