import { test, expect } from "@playwright/test";
import { users } from "./data/user";

test("should retrieve the standard user", async () => {
    const standardUser = users.standard;

    expect(standardUser.username).toBe("standard_user");
    expect(standardUser.password).toBe("secret_sauce");
    expect(standardUser.loginAttempts).toBe(3);
});

test("should retrieve the performance-glitch test user", async () => {
    const performanceGlitchUser = users.performanceGlitch;

    expect(performanceGlitchUser.username).toBe(
        "performance_glitch_user",
    );
});

test("should retrieve the problem test user", async () => {
    const problemUser = users.problem;

    expect(problemUser.username).toBe("problem_user");
});