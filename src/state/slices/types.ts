import {RefreshResponce} from "../../models/response/RefreshResponse";

// состоянии статусов об.сервера
export type ResponseStatus = 'pending' | 'resolve' | 'rejected'

// статусы ошибки сервера
export interface UserUnknownState {
    status: "unknown";
}

export interface ServerUnreachable {
    status: "server-unreachable";
}

export interface LoggedOut {
    status: "logged-out";
}

export interface LoggedIn {
    status: "logged-in";
    response?: RefreshResponce;
}

export type UserStatus =
    | UserUnknownState
    | ServerUnreachable
    | LoggedOut
    | LoggedIn;

// тип стора
export interface IAuthState {
    userStatus: UserStatus;
    responseStatus: ResponseStatus;
    isAuth: boolean;
    isLoading: boolean;
    error: any;
    userRole: string;
    user: RefreshResponce;
}