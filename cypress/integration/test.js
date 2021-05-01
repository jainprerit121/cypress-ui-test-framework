import HomePage from '../support/Page Objects/homePO';
import AdminPage from '../support/Page Objects/adminPO';
import BrandingPage from '../support/Page Objects/brandingPO';

const homePage = new HomePage();
const adminPage = new AdminPage();
const brandingPage = new BrandingPage();

before(function () {
    cy.fixture('login').then(function (loginData) {
      this.loginData = loginData;
    })
    cy.fixture('contact').then(function (contactData) {
        this.contactData = contactData;
    })
    cy.fixture('branding').then(function (brandingData) {
        this.brandingData = brandingData;
    })
})

describe('Automation Testing Online tests', function() {
    
    // Test one: Verity that you can log in with valid credentials
    it('should be able to login', function() {
        homePage.login(this.loginData);
        adminPage.getNavbar().should('contain', 'Rooms');
    })

    //Test two: Check to see if rooms are saved and displayed in the UI
    it('should be able to save rooms', function() {
        homePage.login(this.loginData);
        adminPage.createRoom('101','101');
        adminPage.getRows().its('length').should('be.greaterThan', 1);
    })


    // Test three: Check to see the confirm message appears when branding is updated
    it('should be able to update branding', function() {
        homePage.login(this.loginData);

        adminPage.navigateToBranding();
        brandingPage.updateBrandingDetails(this.brandingData);

        brandingPage.getCloseDialog().should('be.visible');
        brandingPage.getBrandingUpdatedDialog().should('contain', 'Branding updated!');
        
    })

    // Test four: Check to see if the contact form shows a success message
    it('should see success message', function() {
        homePage.goto();
        homePage.submitContact(this.contactData);

        homePage.getContactSubmittedMsg().should('contain', 'Thanks for getting in touch');
    })

    // Test five: Check to see if unread messages are bolded
    it('should see unread messages are bolded', function() {
        homePage.login(this.loginData);
        homePage.getAdminMessageLink().click();

        adminPage.getUnReadMessages().its('length').should('be.at.least', 1);
    })


})