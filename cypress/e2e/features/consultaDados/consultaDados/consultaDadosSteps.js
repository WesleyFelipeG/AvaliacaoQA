import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ConsultaDadosPage from "../../../../pages/consultaDados.page";

const consulta = new ConsultaDadosPage();

Given("que estou na página inicial do Dados.gov.br", () => {
  consulta.acessarSite();
});

When("pesquiso por {string}", (termo) => {
  consulta.pesquisar(termo);
});

Then("vejo resultados relacionados a {string}", (termo) => {
  consulta.validarResultados(termo);
});
