const { test, expect } = require('@playwright/test');


const LoginPage =
require('../../../pages/playwright/login_page');


const InventoryPage =
require('../../../pages/playwright/inventory_page');


const CartPage =
require('../../../pages/playwright/cart_page');


const CheckoutPage =
require('../../../pages/playwright/checkout_page');




test("Checkout complete test", async ({page})=>{


    const login =
        new LoginPage(page);


    const inventory =
        new InventoryPage(page);


    const cart =
        new CartPage(page);


    const checkout =
        new CheckoutPage(page);



    await login.open();


    await login.login(
        "standard_user",
        "secret_sauce"
    );



    await inventory.clickFirstAddButton();


    await inventory.clickCart();



    await cart.clickCheckout();



    await checkout.enterFirstName(
        "John"
    );


    await checkout.enterLastName(
        "Test"
    );


    await checkout.enterPostalCode(
        "12345"
    );



    await checkout.clickContinue();



    await checkout.clickFinish();



    const message =
        await checkout.getCompleteMessage();



    expect(message)
        .toContain(
            "Thank you for your order"
        );


});