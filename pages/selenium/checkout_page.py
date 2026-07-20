from selenium.webdriver.common.by import By


class CheckoutPage:

    def __init__(self, driver):

        self.driver = driver


        # Checkout Information
        self.first_name = (By.ID, "first-name")
        self.last_name = (By.ID, "last-name")
        self.postal_code = (By.ID, "postal-code")

        self.continue_button = (By.ID, "continue")
        self.cancel_button = (By.ID, "cancel")


        # Overview
        self.finish_button = (By.ID, "finish")


        # Complete
        self.back_home_button = (By.ID, "back-to-products")

        self.complete_message = (
            By.CLASS_NAME,
            "complete-header"
        )



    def enterFirstName(self, value):

        self.driver.find_element(
            *self.first_name
        ).send_keys(value)



    def enterLastName(self, value):

        self.driver.find_element(
            *self.last_name
        ).send_keys(value)



    def enterPostalCode(self, value):

        self.driver.find_element(
            *self.postal_code
        ).send_keys(value)



    def clickContinue(self):

        self.driver.find_element(
            *self.continue_button
        ).click()



    def clickFinish(self):

        self.driver.find_element(
            *self.finish_button
        ).click()



    def clickBackHome(self):

        self.driver.find_element(
            *self.back_home_button
        ).click()



    def getCompleteMessage(self):

        return self.driver.find_element(
            *self.complete_message
        ).text