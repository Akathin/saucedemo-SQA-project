const { test, expect } = require('@playwright/test');
const LoginPage = require("../../../pages/playwright/login_page");
const InventoryPage = require("../../../pages/playwright/inventory_page");

test("sort name A-Z", async ({ page }) => {

  const login = new LoginPage(page);
  await login.open();
  await login.login("standard_user", "secret_sauce");

  const inventory = new InventoryPage(page);

  await inventory.waitForPage();

  await expect(inventory.sortDropdown).toBeVisible();

  await inventory.selectSort("az");

  const names = await inventory.getNames();
  expect(names).toEqual([...names].sort());
});


test("sort price low-high", async ({ page }) => {

  const login = new LoginPage(page);
  await login.open();
  await login.login("standard_user", "secret_sauce");

  const inventory = new InventoryPage(page);

  await inventory.waitForPage();

  await inventory.selectSort("lohi");

  const prices = await inventory.getPrices();
  expect(prices).toEqual([...prices].sort((a,b)=>a-b));
});