from pages.selenium.inventory_page import InventoryPage

def test_inventory_list(driver):
    inv = InventoryPage(driver)

    assert len(inv.get_items()) == 6


def test_inventory_info(driver):
    inv = InventoryPage(driver)

    assert len(inv.get_names()) == 6
    assert len(inv.get_images()) == 6
    assert len(inv.get_desc()) == 6
    assert len(inv.get_prices()) == 6


def test_add_to_cart_state(driver):
    inv = InventoryPage(driver)

    inv.get_add_buttons()[0].click()

    btn_after = inv.get_add_buttons()[0]
    assert btn_after.text == "Remove"
    


def test_navigation_by_name(driver):
    inv = InventoryPage(driver)

    name = inv.get_names()[0].text
    inv.click_first_name()

    assert inv.is_on_inventory_page()