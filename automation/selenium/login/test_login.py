from pages.selenium.login_page import LoginPage

def test_valid_login(driver):
    login = LoginPage(driver)

    login.open()
    login.login("standard_user", "secret_sauce")

    assert login.is_login_success()


def test_invalid_login(driver):
    login = LoginPage(driver)

    login.open()
    login.login("standard_user", "wrong_password")

    assert "Epic sadface" in login.get_error()


def test_locked_user(driver):
    login = LoginPage(driver)

    login.open()
    login.login("locked_out_user", "secret_sauce")

    assert "locked out" in login.get_error()