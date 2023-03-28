/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../pageObjects/HomePage';

const homePage = new HomePage();


Given('I am on the DemoBlaze website home page', () => {
    cy.visit(Cypress.env('demoBlazeUrl'));
})

When('I click on the Monitors filter button', function() {
    homePage.clickMonitorsFilterButton();
})

Then('only Monitor products appear', () => {
    cy.wait(2000)
    homePage.getNumberOfDisplayedProducts().should('have.length', 2);
    
})

