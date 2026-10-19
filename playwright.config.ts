import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",

    fullyParallel: true,

    forbidOnly: Boolean(process.env.CI),

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: "html",

    use: {
        baseURL: "https://www.saucedemo.com",

        trace: "on-first-retry",

        screenshot: "only-on-failure",

        video: "retain-on-failure",
    },

    projects: [
        {
            name: "setup",

            testMatch: /.*\.setup\.spec\.ts/,
        },

        {
            name: "chromium",

            testMatch: /.*\.spec\.ts/,

            testIgnore: [
                /.*\.setup\.spec\.ts/,
                /.*\/api\/.*\.spec\.ts/,
            ],

            use: {
                ...devices["Desktop Chrome"],

                storageState: "playwright/.auth/standard.json",
            },

            dependencies: ["setup"],
        },
        {
            name: "api",

            testMatch: /.*\/api\/.*\.spec\.ts/,

        }
    ],
});