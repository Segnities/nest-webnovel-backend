declare enum Role {
    SYSTEM = "SYSTEM",
    ADMIN = "ADMIN",
    MODERATOR = "MODERATOR",
    DEFAULT_USER = "DEFAULT_USER"
}
export declare class CreateUserDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    username: string;
    role: Role[];
}
export {};
