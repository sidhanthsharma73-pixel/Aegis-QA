import { test as setup, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { LoginPage } from "./pages/login.page";
import { users } from "./data/user";
import { standardAuthState } from "./config/auth";

setup("authenticate standard user", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto("/");

    await loginPage.login(
        users.standard.username,
        users.standard.password,
    );

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator(".inventory_list")).toBeVisible();
    await mkdir(dirname(standardAuthState), { recursive: true });
    await page.context().storageState({
        path: standardAuthState,
    });

    console.log("Saved authentication state for standard user");
});