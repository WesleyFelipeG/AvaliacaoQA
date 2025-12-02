Feature: Consulta de dados públicos no portal Dados.gov.br

  Scenario: Pesquisar datasets do Ministério da Saúde
    Given que estou na página inicial do Dados.gov.br
    When pesquiso por "Ministério da Saúde"
    Then devo visualizar resultados relacionados ao termo "Ministério da Saúde"
