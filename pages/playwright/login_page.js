class LoginPage {

    constructor(page) {
        this.page = page;

        // locators
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = '[data-test="error"]';
    }

    // 페이지 이동
    async open() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    // 로그인 액션
    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    // 에러 메시지 가져오기
    async getErrorMessage() {
        return await this.page.locator(this.errorMessage).textContent();
    }

    // URL 체크용 (선택)
    async isLoggedIn() {
        return this.page.url().includes('inventory');
    }
}

module.exports = LoginPage;