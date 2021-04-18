export default class BrandingPage{
    constructor(){
        this.name = '#name';
        this.logoUrl = "#logoUrl";
        this.description = "#description";
        this.latitude = "#latitude";
        this.longitude = "#longitude";
        this.contactName = "#contactName";
        this.contactAddress = "#contactAddress";
        this.contactPhone = "#contactPhone";
        this.contactEmail = "#contactEmail";
        this.updateBranding = '#updateBranding';
        this.closeDialog = '//button[text()="Close"]';
        this.brandingUpdatedMsg = '[role="dialog"] p';
    }
    getName(){
        return cy.get(this.name, {timeout: 1000});
    }

    getLogoUrl(){
        return cy.get(this.logoUrl);
    }

    getDescription(){
        return cy.get(this.description);
    }

    getLatitude(){
        return cy.get(this.latitude);
    }

    getLongitude(){
        return cy.get(this.longitude);
    }

    getContactName(){
        return cy.get(this.contactName);
    }

    getContactAddress(){
        return cy.get(this.contactAddress);
    }

    getContactPhone(){
        return cy.get(this.contactPhone);
    }

    getContactEmail(){
        return cy.get(this.contactEmail);
    }

    getUpdateBranding(){
        return cy.get(this.updateBranding);
    }

    getCloseDialog(){
        return cy.xpath(this.closeDialog);
    }

    getBrandingUpdatedDialog(){
        return cy.get(this.brandingUpdatedMsg);
    }

    updateBrandingDetails(brandingData){
        cy.log('Update branding details');
        this.getName().clear().type(brandingData.name);
        this.getLogoUrl().clear().type(brandingData.logoUrl);
        this.getDescription().clear().type(brandingData.description);
        this.getLatitude().clear().type(brandingData.latitude);
        this.getLongitude().clear().type(brandingData.longitude);
        this.getContactName().clear().type(brandingData.name);
        this.getContactAddress().clear().type(brandingData.address);
        this.getContactPhone().clear().type(brandingData.phone);
        this.getContactEmail().clear().type(brandingData.email);
        this.getUpdateBranding().click();
    }
}