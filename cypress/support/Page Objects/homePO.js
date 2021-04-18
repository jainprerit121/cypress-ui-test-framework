export default class HomePage{
    constructor(){
        this.username = '#username';
        this.password = '#password';
        this.loginbtn = '#doLogin';
        this.name = '#name';
        this.email = '#email';
        this.phone = '#phone';
        this.subject = '#subject';
        this.message = '#description';
        this.submitContactBtn = '#submitContact';
        this.contactSubmittedMsg = 'div.contact';
        this.adminlink = 'a[href="/#/admin"]';
        this.adminMessageLink = 'a[href="#/admin/messages"]';
    }

    goto(){
        cy.log('Opening application URL');
        cy.visit('/');
    }

    getUsername(){
        return cy.get(this.username);
    }

    getPassword(){
        return cy.get(this.password);
    }

    getLoginBtn(){
        return cy.get(this.loginbtn);
    }

    getAdminPanel(){
        return cy.get(this.adminlink);
    }

    getNameFld(){
        return cy.get(this.name);
    }

    getEmailFld(){
        return cy.get(this.email);
    }

    getPhoneFld(){
        return cy.get(this.phone);
    }

    getSubjectFld(){
        return cy.get(this.subject);
    }

    getMessageTxtArea(){
        return cy.get(this.message);
    }

    getSubmitContactBtn(){
        return cy.get(this.submitContactBtn);
    }

    getContactSubmittedMsg(){
        return cy.get(this.contactSubmittedMsg);
    }

    getAdminMessageLink(){
        return cy.get(this.adminMessageLink);
    }

    login(loginData){
        cy.log('Login to application');
        this.goto();
        this.getAdminPanel().click();

        this.getUsername().clear().type(loginData.username);
        this.getPassword().clear().type(loginData.password);

        this.getLoginBtn().click();
    }

    submitContact(contactData){
        cy.log('Submit contact details');
        this.getNameFld().clear().type(contactData.name);
        this.getEmailFld().clear().type(contactData.email);
        this.getPhoneFld().clear().type(contactData.phone);
        this.getSubjectFld().clear().type(contactData.subject);
        this.getMessageTxtArea().clear().type(contactData.message);

        this.getSubmitContactBtn().click();
    }
}
