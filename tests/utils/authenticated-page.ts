import type { Browser, Page } from "@playwright/test";

export async function createAuthenticatedPage(
    browser: Browser,
    storageState: string,
): Promise<{
    page: Page;
    close: () => Promise<void>;
}> {
    const context = await browser.newContext({
        storageState,
    });

    const page = await context.newPage();

    return {
        page,

        close: async (): Promise<void> => {
            await context.close();
        },
    };
}