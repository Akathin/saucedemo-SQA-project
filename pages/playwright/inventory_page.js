class InventoryPage {

    constructor(page) {
        this.page = page;

        this.items = '.inventory_item';
        this.names = '.inventory_item_name';
        this.images = '.inventory_item_img img';
        this.desc = '.inventory_item_desc';
        this.prices = '.inventory_item_price';
        this.addBtn = 'button.btn_inventory';

        this.sortDropdown = this.page.locator('.product_sort_container');
        
    }

    getItems() {
        return this.page.locator(this.items);
    }

    getNames() {
        return this.page.locator(this.names);
    }

    getImages() {
        return this.page.locator(this.images);
    }

    getDescriptions() {
        return this.page.locator(this.desc);
    }

    async getPrices() {
  const prices = await this.page.locator('.inventory_item_price').allTextContents();

  return prices.map(p => parseFloat(p.replace('$', '').trim()));
}

    getAddButtons() {
        return this.page.locator(this.addBtn);
    }

    async clickFirstName() {
        await this.getNames().first().click();
    }

    async clickFirstImage() {
        await this.getImages().first().click();
    }

    async clickFirstAddButton() {
        await this.getAddButtons().first().click();
    }

    async selectSort(optionValue) {
  await this.sortDropdown.selectOption(optionValue);
}

    async getNames() {
  return await this.page.locator('.inventory_item_name').allTextContents();
}

    async waitForPage() {
await this.page.waitForSelector('.product_sort_container', {
    state: 'visible'
  });
}

}

module.exports = InventoryPage;