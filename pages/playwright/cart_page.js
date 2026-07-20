class CartPage {

    constructor(page){

        this.page = page;


        // Selectors

        this.cartItems = ".cart_item";

        this.itemNames = ".inventory_item_name";

        this.itemDescriptions = ".inventory_item_desc";

        this.itemPrices = ".inventory_item_price";


        this.removeButtons = "button.cart_button";


        this.continueButton = "#continue-shopping";

        this.checkoutButton = "#checkout";


        this.cartBadge = ".shopping_cart_badge";

    }



    async openCart(){

        await this.page
            .locator(".shopping_cart_link")
            .click();

    }



    getCartItems(){

        return this.page.locator(
            this.cartItems
        );

    }



    async getCartItemNames(){

        return await this.page
            .locator(this.itemNames)
            .allTextContents();

    }



    async getCartItemDescriptions(){

        return await this.page
            .locator(this.itemDescriptions)
            .allTextContents();

    }



    async getCartItemPrices(){

        const prices =
            await this.page
            .locator(this.itemPrices)
            .allTextContents();


        return prices.map(
            price =>
            Number(
                price.replace("$","")
            )
        );

    }



    async clickRemove(){

        await this.page
            .locator(this.removeButtons)
            .first()
            .click();

    }



    async clickContinueShopping(){

        await this.page
            .locator(this.continueButton)
            .click();

    }



    async clickCheckout(){

        await this.page
            .locator(this.checkoutButton)
            .click();

    }



    async getCartBadgeCount(){

        const count =
            await this.page
            .locator(this.cartBadge)
            .textContent();


        return Number(count);

    }

}


module.exports = CartPage;