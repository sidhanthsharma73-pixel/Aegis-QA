import type { User } from "../types/user";

export const users = {
    standard: {
        username: "standard_user",
        password: "secret_sauce",
        loginAttempts: 3,
    },
    problem: {
        username: "problem_user",
        password: "secret_sauce",
        loginAttempts: 2,
    },
    performanceGlitch: {
        username: "performance_glitch_user",
        password: "secret_sauce",
        loginAttempts: 1,
    },
} satisfies Record<string, User>;