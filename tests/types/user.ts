export interface User {
    readonly username: string;
    readonly password: string;
    readonly loginAttempts: number;
}