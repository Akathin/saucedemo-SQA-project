class CheckoutPage{


    constructor(page){

        this.page = page;


        // Information

        this.firstName =
            "#first-name";


        this.lastName =
            "#last-name";


        this.postalCode =
            "#postal-code";


        this.continueButton =
            "#continue";



        // Overview

        this.finishButton =
            "#finish";



        // Complete

        this.backHomeButton =
            "#back-to-products";


        this.completeMessage =
            ".complete-header";

    }



    async enterFirstName(value){

        await this.page
            .locator(this.firstName)
            .fill(value);

    }



    async enterLastName(value){

        await this.page
            .locator(this.lastName)
            .fill(value);

    }



    async enterPostalCode(value){

        await this.page
            .locator(this.postalCode)
            .fill(value);

    }



    async clickContinue(){

        await this.page
            .locator(this.continueButton)
            .click();

    }



    async clickFinish(){

        await this.page
            .locator(this.finishButton)
            .click();

    }



    async clickBackHome(){

        await this.page
            .locator(this.backHomeButton)
            .click();

    }



    async getCompleteMessage(){

        return await this.page
            .locator(this.completeMessage)
            .textContent();

    }


}


module.exports = CheckoutPage;