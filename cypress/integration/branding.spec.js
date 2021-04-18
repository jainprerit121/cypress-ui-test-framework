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
    cy.fixture('branding').then(function (brandingData) {
        this.brandingData = brandingData;
    })
})

describe('Automation Testing Online tests for Branding Page', () => {

    // Test three: Check to see the confirm message appears when branding is updated
    it('should be able to update branding', function() {
        homePage.login(this.loginData);

        adminPage.navigateToBranding();
        brandingPage.updateBrandingDetails(this.brandingData);

        brandingPage.getCloseDialog().should('be.visible');
        brandingPage.getBrandingUpdatedDialog().should('contain', 'Branding updated!');
        
    })
})