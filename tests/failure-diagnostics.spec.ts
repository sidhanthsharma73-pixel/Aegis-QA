import { test, expect } from "@playwright/test";

test("CI should capture browser evidence when an assertion fails", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("#login-button")).toBeVisible();

    // Deliberate failure for diagnostic testing
    await expect(page.locator("#login-button")).toHaveText("Wrong Button Text");
});
