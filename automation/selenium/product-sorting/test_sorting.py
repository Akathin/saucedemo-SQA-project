from pages.selenium.inventory_page import InventoryPage

def test_sort_name_az(driver):
    inventory = InventoryPage(driver)

    inventory.select_sort("Name (A to Z)")
    names = inventory.get_product_names()

    assert names == sorted(names)

def test_sort_price_low_high(driver):
    inventory = InventoryPage(driver)

    inventory.select_sort("Price (low to high)")
    prices = inventory.get_product_prices()

    assert prices == sorted(prices)