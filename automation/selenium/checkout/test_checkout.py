from pages.selenium.checkout_page import CheckoutPage
from pages.selenium.inventory_page import InventoryPage
from pages.selenium.cart_page import CartPage



def test_checkout_complete(driver):


    inventory = InventoryPage(driver)

    cart = CartPage(driver)

    checkout = CheckoutPage(driver)



    # 상품 추가
    inventory.clickFirstAddButton()


    # Cart 이동
    inventory.clickCart()


    # Checkout 이동
    cart.clickCheckout()



    # Information 입력

    checkout.enterFirstName(
        "John"
    )

    checkout.enterLastName(
        "Test"
    )

    checkout.enterPostalCode(
        "12345"
    )


    checkout.clickContinue()



    # Finish

    checkout.clickFinish()



    message = checkout.getCompleteMessage()


    assert message == "Thank you for your order!"