
import HomePage from '../support/Page Objects/homePO';
import AdminPage from '../support/Page Objects/adminPO';

const homePage = new HomePage();
const adminPage = new AdminPage();
before(function () {
    cy.fixture('login').then(function (loginData) {
        this.loginData = loginData;
    })
})

describe('Automation Testing Online tests for Admin Message Page', () => {

    //Test two: Check to see if rooms are saved and displayed in the UI
    it('should be able to save rooms', function() {
        homePage.login(this.loginData);
        adminPage.createRoom('101','101');
        adminPage.getRows().its('length').should('be.greaterThan', 1);
    })

    // Test five: Check to see if unread messages are bolded
    it('should see unread messages are bolded', function() {
        homePage.login(this.loginData);
        homePage.getAdminMessageLink().click();

        adminPage.getUnReadMessages().its('length').should('be.at.least', 1);
    })
})