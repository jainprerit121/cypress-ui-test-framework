export default class AdminPage{
    constructor(){
        this.navbar = 'div.navbar-collapse';
        this.createRoomBtn = '#createRoom';
        this.roomNumber = '#roomNumber';
        this.roomPrice = '#roomPrice';
        this.unreadMsg = 'div.read-false';
        this.rows = '.row.detail';
        this.brandingLink = '#brandingLink';
    }

    getNavbar(){
        return cy.get(this.navbar, { timeout: 3000 });
    }

    getCreateRoomBtn(){
        return cy.get(this.createRoomBtn, { timeout: 4000 });
    }

    getRoomNumberFld(){
        return cy.get(this.roomNumber);
    }

    getRoomPriceFld(){
        return cy.get(this.roomPrice);
    }

    getUnReadMessages(){
        return cy.get(this.unreadMsg, {timeout: 3000});
    }

    getRows(){
        return cy.get(this.rows);
    }

    getBrandingLink(){
        return cy.get(this.brandingLink);
    }

    navigateToBranding(){
        this.getBrandingLink().click();
    }

    createRoom(roomNo, roomPrice){
        cy.log('Create new room');
        this.getRoomNumberFld().type(roomNo);
        this.getRoomPriceFld().type(roomPrice);

        this.getCreateRoomBtn().click();
        cy.wait(1000);
    }
}