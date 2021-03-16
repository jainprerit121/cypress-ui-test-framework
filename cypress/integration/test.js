// This assignment is about two things
// 1. Create meaningful, reproducible, reliable and non-flaky tests
// 2. creating clean, readable and maintainable code. 

// Below are five tests that (somehow) work but require cleaning up. Update this
// code to make it easier to maintain, more readable and has sensible ways of asserting
// data. You might want to research different approaches to improving UI automation such as
// Page Object Models.

// TypeScript is also installed and enabled, so if you are comfortable with it, please 
// feel free to use the same.

describe('Automation Testing Online tests', () => {

    // Test one: Verity that you can log in with valid credentials
    it('should be able to login', () => {
        cy.visit('https://automationintesting.online/#/')
        cy.get('footer p a:nth-child(5)').click();
        cy.xpath('//div[@class=\"form-group\"][1]/input').click();
        cy.xpath('//div[@class=\"form-group\"][1]/input').type('admin');
        cy.xpath('//div[@class=\"form-group\"][2]/input').type('password');

        cy.get('button.float-right').click();

        cy.wait(3000);
        cy.get('div.navbar-collapse').invoke('text').then(text => {
            expect(text).to.contain('Rooms');
        });
    })

    //Test two: Check to see if rooms are saved and displayed in the UI
    it('should be able to save rooms', () => {
        cy.visit('https://automationintesting.online/#/')
        cy.xpath('//a[@href=\"/#/admin\"]').click();
        cy.xpath('//div[@class=\"form-group\"][1]/input').type('admin');
        cy.xpath('//div[@class=\"form-group\"][2]/input').type('password');

        cy.get('button.float-right').click();

        cy.get('.room-form > div:nth-child(1) input').type('101');
        cy.get('.room-form > div:nth-child(4) input').type('101');

        cy.wait(2000);
        cy.get('button.btn-outline-primary').click();

        // debugger

        // cy.get('.detail').its('length').should('be.greaterThan', 1);
    })


    // Test three: Check to see the confirm message appears when branding is updated
    it('should be able to update branding', () => {
        cy.visit('https://automationintesting.online/#/admin')
        cy.xpath('//div[@class=\"form-group\"][1]/input').type('admin');
        cy.xpath('//div[@class=\"form-group\"][2]/input').type('password');

        cy.get('button.float-right').click();

        cy.visit('https://automationintesting.online/#/admin/branding');
        cy.wait(2000);
        cy.get('input.form-control').eq(0).type("Test");
        cy.get('button.btn-outline-primary').click();

        cy.wait(1000);
        cy.xpath('//button[text()="Close"]').its('length').then(elementCount => {
            if (elementCount === 1) { 
                expect(true).to.be.true;
            } else {
                expect(true).to.be.false;
            }
        });
    })

    // Test four: Check to see if the contact form shows a success message
    it('should see success message', () => {
        cy.visit('https://automationintesting.online')

        cy.get('input[placeholder=\"Name\"]').type('TEST123');
        cy.get('input[placeholder=\"Email\"]').type('TEST123@TEST.COM');
        cy.get('input[placeholder=\"Phone\"]').type('01212121311');
        cy.get('input[placeholder=\"Subject\"]').type('TEsTEST');
        cy.get('textarea').type('TEsTESTTEsTESTTEsTEST');

        cy.xpath("//button[text()=\"Submit\"]").click();

        cy.wait(3000);
        cy.get("div.contact").invoke('text').should('contain', 'Thanks for getting in touch')
    })

    // Test five: Check to see if unread messages are bolded
    it('should see unread messages are bolded', () => {
        cy.visit('https://automationintesting.online/#/admin/messages')

        cy.xpath('//div[@class=\"form-group\"][1]/input').type('admin');
        cy.xpath('//div[@class=\"form-group\"][2]/input').type('password');

        cy.get('button.float-right').click();

        cy.wait(2000);

        cy.get('div.read-false').its('length').should('be.at.least', 1);
    })


})