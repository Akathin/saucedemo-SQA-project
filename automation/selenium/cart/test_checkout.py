from pages.selenium.inventory_page import InventoryPage
from pages.selenium.cart_page import CartPage



def test_checkout(driver):

    inventory = InventoryPage(driver)
    cart = CartPage(driver)


    inventory.clickFirstAddButton()


    cart.openCart()


    cart.clickCheckout()


    assert "checkout-step-one.html" in driver.current_url