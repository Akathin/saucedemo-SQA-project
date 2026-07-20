from pages.selenium.inventory_page import InventoryPage
from pages.selenium.cart_page import CartPage



def test_continue_shopping(driver):

    inventory = InventoryPage(driver)
    cart = CartPage(driver)


    inventory.clickCart()


    cart.clickContinueShopping()


    assert "inventory.html" in driver.current_url