from pages.selenium.inventory_page import InventoryPage
from pages.selenium.cart_page import CartPage



def test_remove_item(driver):

    inventory = InventoryPage(driver)
    cart = CartPage(driver)


    inventory.clickFirstAddButton()


    cart.openCart()


    assert cart.getCartBadgeCount() == 1


    cart.clickRemove()


    assert len(cart.getCartItems()) == 0