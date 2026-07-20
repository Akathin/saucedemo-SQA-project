from selenium.webdriver.common.by import By


class CartPage:

    def __init__(self, driver):
        self.driver = driver

        # Locators
        self.cart_items = (By.CLASS_NAME, "cart_item")
        self.item_names = (By.CLASS_NAME, "inventory_item_name")
        self.item_descs = (By.CLASS_NAME, "inventory_item_desc")
        self.item_prices = (By.CLASS_NAME, "inventory_item_price")

        self.remove_buttons = (By.CSS_SELECTOR, "button.cart_button")

        self.continue_button = (
            By.ID,
            "continue-shopping"
        )

        self.checkout_button = (
            By.ID,
            "checkout"
        )

        self.cart_badge = (
            By.CLASS_NAME,
            "shopping_cart_badge"
        )


    def openCart(self):
        self.driver.find_element(
            By.CLASS_NAME,
            "shopping_cart_link"
        ).click()


    def getCartItems(self):
        return self.driver.find_elements(
            *self.cart_items
        )


    def getCartItemNames(self):

        elements = self.driver.find_elements(
            *self.item_names
        )

        return [
            e.text for e in elements
        ]


    def getCartItemDescriptions(self):

        elements = self.driver.find_elements(
            *self.item_descs
        )

        return [
            e.text for e in elements
        ]


    def getCartItemPrices(self):

        elements = self.driver.find_elements(
            *self.item_prices
        )

        return [
            float(
                e.text.replace("$","")
            )
            for e in elements
        ]


    def clickRemove(self):

        self.driver.find_element(
            *self.remove_buttons
        ).click()


    def clickContinueShopping(self):

        self.driver.find_element(
            *self.continue_button
        ).click()


    def clickCheckout(self):

        self.driver.find_element(
            *self.checkout_button
        ).click()


    def getCartBadgeCount(self):

        return int(
            self.driver.find_element(
                *self.cart_badge
            ).text
        )

