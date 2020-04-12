import { User } from '../users/user.interface';

export interface RegisterResult {
    status: boolean;
    message: string;
    User?: User;
}

export interface RegisterResultado {
    register?: RegisterResult;
}

export interface RegisterData {
    name: string;
    lastname: string;
    email: string;
    password: string;
}