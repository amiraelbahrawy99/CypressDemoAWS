
const login_locators = require('../fixtures/locators/loginLocators.json');
const dashBoardLocators = require("../fixtures/locators/dashBoardLocators.json");
const eventLocators = require("../fixtures/locators/eventLocators.json");
const groupLocators = require("../fixtures/locators/groupsLocators.json");
const userDetailsLocators = require("../fixtures/locators/userDetailsLocators.json");
const tripLocators = require("../fixtures/locators/tripLocators.json");


Cypress.Commands.add('login1stStep', (username, password) => {
    cy.step('Enter username');
    cy.get(login_locators.username).clear().type(username);

    cy.step('Enter password');
    cy.get(login_locators.password).clear().type(password);

    cy.step('Press on login page');
    cy.get(login_locators.loginButton).click();
});

Cypress.Commands.add('skip2FA', () => {
    cy.step('Skip 2FA code');
    cy.contains('Skip').click();
});

Cypress.Commands.add('login', (username, password) => {
    cy.login1stStep(username, password);
    cy.skip2FA();
});

Cypress.Commands.add('openGroupsPage', () => {
    cy.step('Select first event');
    cy.get(dashBoardLocators.firstEvent).click({ force: true });

    cy.step('Click on Registration on side bar');
    cy.get(eventLocators.registartionMenu).click({ force: true });

    cy.step('Choose Attendees');
    cy.contains('Attendees').click({ force: true });
});

Cypress.Commands.add('createGroup', () => {
    cy.step('Click on create group button');
    cy.contains('Create Group').click({ force: true });

    cy.step('Enter group name');
    cy.get(groupLocators.groupName).clear().type('GroupTest');

    cy.step('Choose a flight');
    cy.get(groupLocators.flightToggle).click({ force: true });

    cy.step('Click on save button');
    cy.get(groupLocators.saveButton).click({ force: true });
});


Cypress.Commands.add('addUser', (firstName, lastName, email, username) => {
    cy.step('Click on create group button');
    cy.contains('GroupTest').click({ force: true });

    cy.step('Click on add user button');
    cy.contains('Add User').click({ force: true });

    cy.step('Add required data');
    cy.get(userDetailsLocators.firstName).clear().type(firstName);
    cy.get(userDetailsLocators.lastName).clear().type(lastName);
    cy.get(userDetailsLocators.email).clear().type(email);
    cy.get(userDetailsLocators.username).clear().type(username);
    cy.get(userDetailsLocators.createButton).click({ force: true });
    cy.contains('Client Documents').should('be.visible');
});


Cypress.Commands.add('addTrip', () => {
    cy.step('Click on Trip Info');
    cy.get('.items-start li:nth-child(2)').click({ force: true });

    cy.step('Click on add trip');
    cy.contains('Add Trip').click({ force: true });

    cy.step('Choose package');
    cy.get(tripLocators.packagesMenu).select(1);

    cy.step('Click Create button');
    cy.get(tripLocators.createTripButton).click({ force: true });

});





