/// <reference types="cypress" />
const loginCredentials = require("../../fixtures/data/userCredentials.json");

describe('Adding Attendee with Trip', () => {

    before(() => {
        cy.step('Navigate to the website');
        cy.visit('/');
        cy.login(loginCredentials.validUserName, loginCredentials.validPassword);
    });

    it('Adding attendee with trip', () => {
        cy.openGroupsPage();
        cy.createGroup();
        cy.addUser('Itatshi', 'Uticha', `${Date.now()}@gmail.com`,`${Date.now()}`);
        cy.addTrip();

        cy.step('check that trip is added successfully')
        cy.contains('Add Stay').should('exist');
    });


});