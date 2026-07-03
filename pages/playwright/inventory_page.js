class InventoryPage {

    constructor(page) {
        this.page = page;

        this.items = '.inventory_item';
        this.names = '.inventory_item_name';
        this.images = '.inventory_item_img img';
        this.desc = '.inventory_item_desc';
        this.prices = '.inventory_item_price';
        this.addBtn = 'button.btn_inventory';
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

    getPrices() {
        return this.page.locator(this.prices);
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
}

module.exports = InventoryPage;