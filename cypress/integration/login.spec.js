import HomePage from '../support/Page Objects/homePO';
import AdminPage from '../support/Page Objects/adminPO';

const homePage = new HomePage();
const adminPage = new AdminPage();

before(function () {
    cy.fixture('login').then(function (loginData) {
      this.loginData = loginData;
    })
})

describe('Automation Testing Online tests for Home Page', () => {

    // Test one: Verity that you can log in with valid credentials
    it('should be able to login', function() {
        homePage.login(this.loginData);
        adminPage.getNavbar().should('contain', 'Rooms');
    })
})