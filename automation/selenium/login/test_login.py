from pages.login_page import LoginPage

def test_valid_login(driver):
    login = LoginPage(driver)
    login.login("standard_user", "secret_sauce")

    assert "inventory" in driver.current_url


def test_invalid_login(driver):
    login = LoginPage(driver)
    login.login("standard_user", "wrong_password")

    assert "Epic sadface" in login.get_error_message()


def test_locked_user(driver):
    login = LoginPage(driver)
    login.login("locked_out_user", "secret_sauce")

    assert "locked out" in login.get_error_message()