const { test, expect } = require('@playwright/test');


const LoginPage = require('../../../pages/playwright/login_page');
const InventoryPage = require('../../../pages/playwright/inventory_page');
const CartPage = require('../../../pages/playwright/cart_page');



test.beforeEach(async ({page})=>{

    const login = new LoginPage(page);

    await login.open();

    await login.login(
        "standard_user",
        "secret_sauce"
    );

});



test("Cart item display", async({page})=>{


    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);


    await inventory.clickFirstAddButton();


    await cart.openCart();


    const names =
        await cart.getCartItemNames();


    const prices =
        await cart.getCartItemPrices();


    expect(names.length)
        .toBe(1);


    expect(prices.length)
        .toBe(1);

});




test("Remove item", async({page})=>{


    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);


    await inventory.clickFirstAddButton();


    await cart.openCart();


    expect(
        await cart.getCartBadgeCount()
    )
    .toBe(1);



    await cart.clickRemove();



    expect(
        await cart.getCartItems().count()
    )
    .toBe(0);


});




test("Continue Shopping", async({page})=>{


    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);



    await cart.openCart();



    await cart.clickContinueShopping();



    await expect(page)
        .toHaveURL(
            /inventory.html/
        );

});




test("Checkout", async({page})=>{


    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);



    await inventory.clickFirstAddButton();



    await cart.openCart();



    await cart.clickCheckout();



    await expect(page)
        .toHaveURL(
            /checkout-step-one.html/
        );


});