import { Locator, Page } from "@playwright/test";

export class LoginPage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(private readonly page: Page) {
        this.usernameInput = this.page.locator("#user-name");
        this.passwordInput = this.page.locator("#password");
        this.loginButton = this.page.locator("#login-button");
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}