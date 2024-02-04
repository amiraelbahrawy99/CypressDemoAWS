/// <reference types="cypress" />
const errorMsgs= require("../../fixtures/data/loginErrorMsgs.json");
const login_locators = require('../../fixtures/locators/loginLocators.json');

describe('Login', () => {

    let loginCredentials;

    beforeEach(() => {
        cy.step('Navigate to the website');
        cy.visit('/'); 
    });

    before(() => {
        cy.fixture('data/userCredentials.json').then((CredentialsData) => {
            loginCredentials = CredentialsData;
        });
    });


    it('Login with valid credentials', () => {
        cy.login(loginCredentials.validUserName, loginCredentials.validPassword);
        cy.contains('My Events').should('be.visible');
    });

    it('Check error messgae in case of invalid username', () => {
        cy.login1stStep(loginCredentials.invalidUserName, loginCredentials.validPassword);
        cy.get(login_locators.errorMsgLabel).should('have.text',errorMsgs.invalidUserNameMsg);
    });

    it('Check error messgae in case of invalid password', () => {
        cy.login1stStep(loginCredentials.validUserName, loginCredentials.invalidPassword);
        cy.get(login_locators.errorMsgLabel).should('have.text',errorMsgs.invalidPasswordMsg);
    });

});