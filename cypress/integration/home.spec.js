import HomePage from '../support/Page Objects/homePO';
import AdminPage from '../support/Page Objects/adminPO';

const homePage = new HomePage();
const adminPage = new AdminPage();

before(function () {
    cy.fixture('login').then(function (loginData) {
      this.loginData = loginData;
    })

    cy.fixture('contact').then(function (contactData) {
        this.contactData = contactData;
    })
})

describe('Automation Testing Online tests for Home Page', () => {

    // Test one: Verity that you can log in with valid credentials
    it('should be able to login', function() {
        homePage.login(this.loginData);
        adminPage.getNavbar().should('contain', 'Rooms');
    })

    // Test four: Check to see if the contact form shows a success message
    it('should see success message', function() {
        homePage.goto();
        homePage.submitContact(this.contactData);

        homePage.getContactSubmittedMsg().should('contain', 'Thanks for getting in touch');
    })
})