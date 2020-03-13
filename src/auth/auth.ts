export  interface Auth{
    registerUser(email: string, password: string): Promise<AuthDetails>;
}

export interface AuthDetails {
    id: String;
}