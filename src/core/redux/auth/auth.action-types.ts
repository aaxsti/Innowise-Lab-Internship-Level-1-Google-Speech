import { AuthData } from '../../interfaces/auth-data';

export enum AuthActionTypes {
  USER_LOGIN = 'app.auth/USER_LOGIN',
  USER_LOGOUT = 'app.auth/USER_LOGOUT',
  LOGIN_SUCCESS = 'app.auth/LOGIN_SUCCESS',
  USER_SIGNUP = 'app.auth/USER_SIGNUP',
  AUTH_FAILED = 'app.auth/AUTH_FAILED',
  LOGOUT_SUCCESS = 'app.auth/LOGOUT_SUCCESS',
  LOGOUT_FAILED = 'app.auth/LOGOUT_FAILED',
  CHECK_AUTH = 'app.auth/CHECK_AUTH',
}

export interface UserLoginActionType {
  type: AuthActionTypes.USER_LOGIN;
  payload: AuthData
}

export interface UserLogoutActionType {
  type: AuthActionTypes.USER_LOGOUT;
}

export interface UserSignupActionType {
  type: AuthActionTypes.USER_SIGNUP;
  payload: AuthData
}

export interface LoginSuccessActionType {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: AuthData
}

export interface LogoutSuccessActionType {
  type: AuthActionTypes.LOGOUT_SUCCESS;
}

export interface CheckAuthActionType {
  type: AuthActionTypes.CHECK_AUTH;
  payload: AuthData
}

export interface AuthFailedActionType {
  type: AuthActionTypes.AUTH_FAILED;
  payload: string
}

export type AuthActionsType = UserLoginActionType
  | UserSignupActionType
  | LoginSuccessActionType
  | LogoutSuccessActionType
  | CheckAuthActionType
  | AuthFailedActionType
  | UserLogoutActionType
