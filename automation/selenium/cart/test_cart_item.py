from pages.selenium.inventory_page import InventoryPage
from pages.selenium.cart_page import CartPage


def test_cart_item_display(driver):

    inventory = InventoryPage(driver)
    cart = CartPage(driver)


    # Add product
    inventory.clickFirstAddButton()


    # Open Cart
    cart.openCart()


    # Verify item
    names = cart.getCartItemNames()
    prices = cart.getCartItemPrices()
    descs = cart.getCartItemDescriptions()


    assert len(names) == 1
    assert len(prices) == 1
    assert len(descs) == 1