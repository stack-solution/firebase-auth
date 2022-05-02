export interface UserModel{
    readonly _id?: string;
    readonly name?: string | null;
    readonly email?: string;
    readonly isGuest?: boolean;
    readonly isCreditor?: boolean;
    readonly isAdmin?: boolean;
}

export interface ResponseModel<T>{
    readonly data?: T;
    readonly error?: Error;
}

export interface RequestModel{
    toHttpParams(): URLSearchParams;
}