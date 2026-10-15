import type { User } from "../types/user";
import type { Role } from "../types/role";

export const user: Record<Role, User> = {
    standard: {
        username: "standard_user",
        password: "secret_sauce",
        loginAttempts: 3,
    },
    manager: {
        username: "problem_user",
        password: "secret_sauce",
        loginAttempts: 2,
    },
    admin: {
        username: "performance_glitch_user",
        password: "secret_sauce",
        loginAttempts: 1,
    },
};

export function getUser(role: Role): User {
    return user[role];
}