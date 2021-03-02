/// <reference types= "Cypress" />

import AcessoElements from '../elements';
const acessaElements = new AcessoElements();
// const url = Cypress.config('baseUrl');

class AcessaPage {
  // Acessa o site que será testado
  acessarSite() {
    cy.visit('/');
  }

  // Clica no botão cookie
  clicarBotaoCookie() {
    cy.get(acessaElements.botaoCookie()).click({ force: true });
  }

  // Clica no botão que acessa a página de cadastro do site
  clicarBotaoPaginaLogin() {
    cy.get(acessaElements.botaoLogin()).click({ multiple: true });
  }

  // Clica no botão de cadastro
  clicarBotaoCadastrar() {
    cy.get(acessaElements.botaoCadastrar()).click({ multiple: true });
  }

  // Clica no botão de realizar cadastro
  clicarBotaoRealizarCadastro() {
    cy.get(acessaElements.botaoRealizarCadastro()).click({ multiple: true });
  }

  // Informa nome no input do nome
  informarNome(nome) {
    cy.get(acessaElements.inputNome()).type(nome);
  }

  // Informa sobrenome no input do sobrenome
  informarSobreNome(sobrenome) {
    cy.get(acessaElements.inputSobreNome()).type(sobrenome);
  }

  // Informa email no input do email
  informarEmail(email) {
    cy.get(acessaElements.inputEmail()).type(email);
  }

  // Informa senha no input do senha
  informarSenha(senha) {
    cy.get(acessaElements.inputSenha1()).type(senha);
  }

  // Informa senha no input do confirma senha
  informarConfirmaSenha(confirma) {
    cy.get(acessaElements.inputConfirmaSenha1()).type(confirma);
  }

  // Informa CPF no input do CPF
  informarCPF(CPF) {
    cy.get(acessaElements.inputCPF()).type(CPF);
  }

  // Informa sexo no input do sexo
  informarSexo(sexo) {
    cy.get(acessaElements.inputSexo()).type(sexo);
  }

  // Informa nascimento no input do nascimento
  informarDataNascimento(nascimento) {
    cy.get(acessaElements.inputDataNascimento()).type(nascimento);
  }

  // Informa celular no input do celular
  informarCelular(celular) {
    cy.get(acessaElements.inputCelular()).type(celular);
  }

  // Informa CEP no input do CEP
  informarCEP(CEP) {
    cy.get(acessaElements.inputCEP()).type(CEP);
  }

  // Informa contato no input do contato
  informarContato(contato) {
    cy.get(acessaElements.inputContato()).type(contato);
  }

  // rola scroll
  rolaScroll() {
    cy.contain('Faça o seu cadastro').scrollTo('center');
  }

  // aceita ou não as ofertas com radiobutton
  aceitaOferta() {
    cy.get('[type="checkbox"]').check();
  }
}

export default AcessaPage;
