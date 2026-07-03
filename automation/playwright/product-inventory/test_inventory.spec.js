const { test, expect } = require('@playwright/test');

const LoginPage = require('../../../pages/playwright/login_page');
const InventoryPage = require('../../../pages/playwright/inventory_page');

test.beforeEach(async ({ page }) => {

    const login = new LoginPage(page);

    await login.open();
    await login.login('standard_user', 'secret_sauce');

});

test('TC-INVENTORY-001 Inventory List', async ({ page }) => {

    const inventory = new InventoryPage(page);

    await expect(inventory.getItems()).toHaveCount(6);

});

test('TC-INVENTORY-002 Product Information', async ({ page }) => {

    const inventory = new InventoryPage(page);

    await expect(inventory.getNames()).toHaveCount(6);
    await expect(inventory.getImages()).toHaveCount(6);
    await expect(inventory.getDescriptions()).toHaveCount(6);
    await expect(inventory.getPrices()).toHaveCount(6);

});

test('TC-INVENTORY-003 Product Name Navigation', async ({ page }) => {

    const inventory = new InventoryPage(page);

    await inventory.clickFirstName();

    await expect(page).toHaveURL(/inventory-item/);

});

test('TC-INVENTORY-004 Add To Cart Button', async ({ page }) => {

    const inventory = new InventoryPage(page);

    await inventory.clickFirstAddButton();

    await expect(inventory.getAddButtons().first()).toHaveText('Remove');

});