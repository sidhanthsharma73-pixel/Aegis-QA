import { test, expect } from "./fixture/test";

test("standard user should access the inventory page", async ({
    standardPage,
}) => {
    await standardPage.goto("/inventory.html");

    await expect(standardPage).toHaveURL(/inventory\.html/);

    await expect(
        standardPage.locator(".inventory_list"),
    ).toBeVisible();
});