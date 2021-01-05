export const LOGIN_SUCCES = "LOGIN_SUCCES"
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID"
export const LOG_OUT = "LOG_OUT"

export interface UserState {
    token?: string;
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    country?: string;
    city?: string;
    imageUrl?: string;
    createdAt?: string;
    updatedAt?: string;
  }

export interface User {
    token?: string;
    id: number;
    firstName?: string;
    lastName?: string;
    email: string;
    phone?: string;
    country?: string;
    city?: string;
    imageUrl?: string
    createdAt: string;
    updatedAt: string;
}

export interface UserWithoutToken {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
}

interface LoginAction {
    type: typeof LOGIN_SUCCES;
    payload: User
}

interface LogoutAction {
    type: typeof LOG_OUT
}

interface TokenValidAction {
    type: typeof TOKEN_STILL_VALID
    payload: UserWithoutToken
}

export type UserActionTypes = 
    | LoginAction
    | LogoutAction
    | TokenValidAction