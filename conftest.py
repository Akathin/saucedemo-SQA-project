import pytest
from selenium import webdriver
from pages.selenium.login_page import LoginPage


@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    driver.maximize_window()
    login = LoginPage(driver)
    login.open()
    login.login("standard_user", "secret_sauce")

    yield driver
    driver.quit()