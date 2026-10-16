import { test, expect } from "@playwright/test";

test("SauceDemo homepage should load", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Swag Labs/);
    await expect(page.locator("#login-button")).toBeVisible();
});