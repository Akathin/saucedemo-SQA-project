from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select

class InventoryPage:

    SORT_DROPDOWN = (By.CLASS_NAME, "product_sort_container")

    def __init__(self, driver):
        self.driver = driver

    SORT_DROPDOWN = (By.CLASS_NAME, "product_sort_container")

    PRODUCT_NAMES = (By.CLASS_NAME, "inventory_item_name")
    PRODUCT_PRICES = (By.CLASS_NAME, "inventory_item_price")

    # Sorting
    def select_sort(self, option_text):
        select = Select(self.driver.find_element(*self.SORT_DROPDOWN))
        select.select_by_visible_text(option_text)

    def get_product_names(self):
        elements = self.driver.find_elements(*self.PRODUCT_NAMES)
        return [e.text for e in elements]
    
    def get_product_prices(self):
        elements = self.driver.find_elements(*self.PRODUCT_PRICES)
        return [float(e.text.replace("$", "")) for e in elements]

    # Locators
    ITEMS = (By.CLASS_NAME, "inventory_item")
    NAMES = (By.CLASS_NAME, "inventory_item_name")
    IMAGES = (By.CSS_SELECTOR, ".inventory_item_img img")
    DESC = (By.CLASS_NAME, "inventory_item_desc")
    PRICES = (By.CLASS_NAME, "inventory_item_price")
    ADD_BTNS = (By.CSS_SELECTOR, "button.btn_inventory")

    # Get Elements
    def get_items(self):
        return self.driver.find_elements(*self.ITEMS)

    def get_names(self):
        return self.driver.find_elements(*self.NAMES)

    def get_images(self):
        return self.driver.find_elements(*self.IMAGES)

    def get_desc(self):
        return self.driver.find_elements(*self.DESC)

    def get_prices(self):
        return self.driver.find_elements(*self.PRICES)

    def get_add_buttons(self):
        return self.driver.find_elements(*self.ADD_BTNS)

    # Actions
    def click_first_name(self):
        self.get_names()[0].click()

    def click_first_image(self):
        self.get_images()[0].click()

    def click_first_add_button(self):
        self.get_add_buttons()[0].click()

    # Validation
    def is_on_inventory_page(self):
        return "inventory" in self.driver.current_url

    def clickFirstAddButton(self):

        self.driver.find_element(
            By.CSS_SELECTOR,
            "button.btn_inventory"
        ).click()
        
    def clickCart(self):

        self.driver.find_element(
            By.CLASS_NAME,
            "shopping_cart_link"
        ).click()
    