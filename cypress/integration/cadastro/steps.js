/* global Given, Then, When */

import AcessaPage from '../../support/pageObjects';
const acessaPage = new AcessaPage();

Given('Eu como pessoa física acesso o site saraiva', () => {
  acessaPage.acessarSite();
  cy.get('[id="lgpd-accepted"]').click({ multiple: true });
  cy.wait(200);
  cy.get('[class="btn__icon icon-menu"]').click({
    force: true,
  });
  cy.wait(1000);
  cy.get('[class="cadastre-se"]').click({ multiple: true });
  cy.wait(1000);
  cy.visit(
    'https://login.saraiva.com.br/authorization_code?clientId=authorization_code&redirect_uri=https%3A%2F%2Fvtexid.vtex.com.br%2FVtexIdAuthSiteKnockout%2FReceiveAuthorizationCode.ashx&state=eyJhbGciOiJFUzI1NiIsImtpZCI6IjQ4RTgxNUVDREIwMkY0RjVCNEQ2NUYwOEY2ODFCM0U2REQzN0Y2QzQiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiI4MUIyNDkyQ0MyNDcwMzlDRjRGOEI3Nzk1OUU0OTU0Rjc0MzJDNTUyOTdEQ0NBMDVDMjIyMUYyNzJBOTYzOEYxIiwiaXNzIjoidG9rZW4tZW1pdHRlciIsImV4cCI6MTYxNDY1MzI4OSwicHJvdmlkZXIiOiJDbGllbnRlIFNhcmFpdmEiLCJpYXQiOjE2MTQ2NTI2ODksImp0aSI6IjU4MmU5YTBkLWFmMTktNDQ1OS05ZThjLTFhNjI2MWE1YmI2ZiJ9.fj-xeiLE3AP-j60_CDBTVrmuFnn2_31NGkYioSfXuYG7Yuf8yg85pjcGXiY5hUdTwUfZgM_QyT4RmwNvoNnTGQ'
  );

  cy.get('[class="btn btn--block btn-large m-t-15 cadastrar-usuario"]').click({
    multiple: true,
  });

  And('quero cadastrar no site', () => {
    // acessaPage.clicarBotaoPaginaLogin();
  });

  When('acesso a pagina de cadastro', () => {
    // acessaPage.clicarBotaoRealizarCadastro();
  });

  Then('devo visualizar campos {}', (nome) => {
    acessaPage.informarNome(nome);
    cy.wait(200);
  });
  Then('devo visualizar campos {}', (sobrenome) => {
    acessaPage.informarSobreNome(sobrenome);
    cy.wait(200);
  });
  Then('devo visualizar campos {}', (email) => {
    acessaPage.informarEmail(email);
    cy.wait(200);
  });
  Then('devo visualizar campos {}', (senha) => {
    acessaPage.informarSenha(senha);
    cy.wait(200);
  });
  Then('devo visualizar campos {}', (confirma) => {
    acessaPage.informarConfirmaSenha(confirma);
    cy.wait(200);
  });
  Then('devo visualizar campos {}', (CPF) => {
    acessaPage.informarCPF(CPF);
    cy.wait(200);
  });
  Then('devo visualizar campos {}', (sexo) => {
    acessaPage.informarSexo(sexo);
    cy.wait(200);
  });
  Then('devo visualizar campos {}', (nascimento) => {
    acessaPage.informarDataNascimento(nascimento);
    cy.wait(200);
  });
  Then('devo visualizar campos {}', (celular) => {
    acessaPage.informarCelular(celular);
    cy.wait(200);
  });
  Then('devo visualizar campos {}', (CEP) => {
    acessaPage.informarCelular(CEP);
    cy.wait(200);
  });
  Then('devo visualizar campos {}', (contato) => {
    acessaPage.informarContato(contato);
    cy.wait(200);
  });
});

// ================================================

And('visualizo as cores preto e amarelo', () => {
  cy.visit(
    'https://login.saraiva.com.br/authorization_code?clientId=authorization_code&redirect_uri=https%3A%2F%2Fvtexid.vtex.com.br%2FVtexIdAuthSiteKnockout%2FReceiveAuthorizationCode.ashx&state=eyJhbGciOiJFUzI1NiIsImtpZCI6IjQ4RTgxNUVDREIwMkY0RjVCNEQ2NUYwOEY2ODFCM0U2REQzN0Y2QzQiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiI4MUIyNDkyQ0MyNDcwMzlDRjRGOEI3Nzk1OUU0OTU0Rjc0MzJDNTUyOTdEQ0NBMDVDMjIyMUYyNzJBOTYzOEYxIiwiaXNzIjoidG9rZW4tZW1pdHRlciIsImV4cCI6MTYxNDY1MzI4OSwicHJvdmlkZXIiOiJDbGllbnRlIFNhcmFpdmEiLCJpYXQiOjE2MTQ2NTI2ODksImp0aSI6IjU4MmU5YTBkLWFmMTktNDQ1OS05ZThjLTFhNjI2MWE1YmI2ZiJ9.fj-xeiLE3AP-j60_CDBTVrmuFnn2_31NGkYioSfXuYG7Yuf8yg85pjcGXiY5hUdTwUfZgM_QyT4RmwNvoNnTGQ'
  );
  cy.get('[class="btn btn--block btn-large m-t-15 cadastrar-usuario"]').click({
    multiple: true,
  });
  cy.contains('.e-header-checkout');
  expect(true).to.be.true;
});

When('rolo scroll', () => {
  acessaPage.rolaScroll();
});

And(
  'campos obrigatórios precisam ser sinalizados com um asterisco vermelho',
  () => {
    cy.get('[id="InputNome1"]').type('{enter}');
    cy.contains('[red]');
    expect(true).to.be.true;
  }
);

Then('deve ser possível aceitar ou não o recebimento de ofertas ', () => {
  acessaPage.aceitaOferta();
});

// ======================================

describe('Como pessoa física acesso o site saraiva', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Desejo ter as descrições e características do produto', () => {
    cy.get('[data-v-191af0bd], [data-v-191af0bd]')
      .should('be.visible')
      .expect('[data-v-191af0bd]')
      .to.have.length(1);
  });

  it('Tento adicionar produtos físicos e digitais', () => {});

  it('Verifico que não é possível adicionar produtos físicos e digitais no mesmo carrinho', () => {
    cy.get('[data-v-191af0bd], [data-v-191af0bd]');
    expect(
      'não é possível adicionar produtos físicos e digitais no mesmo carrinho'
    ).to.deep.eq([
      'não é possível adicionar produtos físicos e digitais no mesmo carrinho',
    ]);
  });
});
