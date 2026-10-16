import { test as base, expect, type Page } from "@playwright/test";

import { LoginPage } from "../pages/login.page";
import { standardAuthState } from "../config/auth";
import { createAuthenticatedPage } from "../utils/authenticated-page";

type CustomFixtures = {
    loginPage: LoginPage;
    authenticatedPage: Page;
    standardPage: Page;
};

export const test = base.extend<CustomFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    authenticatedPage: async ({ page }, use) => {
        await page.goto("/inventory.html");

        await expect(page).toHaveURL(/inventory\.html/);
        await expect(page.locator(".inventory_list")).toBeVisible();

        await use(page);
    },

    standardPage: async ({ browser }, use) => {
        const authenticated = await createAuthenticatedPage(
            browser,
            standardAuthState,
        );

        try {
            await use(authenticated.page);
        } finally {
            await authenticated.close();
        }
    },
});

export { expect };