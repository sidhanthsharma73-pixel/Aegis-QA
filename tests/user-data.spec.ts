import { test, expect } from "@playwright/test";
import { getUser } from "./data/user";

test("should retrieve the standard user", async () => {
    const standardUser = getUser("standard");

    expect(standardUser.username).toBe("standard_user");
    expect(standardUser.password).toBe("secret_sauce");
    expect(standardUser.loginAttempts).toBe(3);
});

test("should retrieve the admin-labelled test user", async () => {
    const adminUser = getUser("admin");

    expect(adminUser.username).toBe("performance_glitch_user");
});

test("should be able to retrieve the manager labelled test user", async() => {
    const managerUser = getUser("manager");
    expect(managerUser.username).toBe("problem_user")
});