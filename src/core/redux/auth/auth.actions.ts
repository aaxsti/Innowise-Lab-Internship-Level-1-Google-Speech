import { AuthActionsType, AuthActionTypes } from './auth.action-types';

export const loginUser = (email: string, password: string): AuthActionsType => ({
  type: AuthActionTypes.USER_LOGIN,
  payload: {
    email,
    password,
  },
});

export const loginSuccess = (userId: string, userEmail: string | null): AuthActionsType => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: { userId, userEmail },
});

export const signUpUser = (email: string, password: string): AuthActionsType => ({
  type: AuthActionTypes.USER_SIGNUP,
  payload: {
    email,
    password,
  },
});

export const logoutUser = (): AuthActionsType => ({
  type: AuthActionTypes.USER_LOGOUT,
});

export const logoutUserSuccess = (): AuthActionsType => ({
  type: AuthActionTypes.LOGOUT_SUCCESS,
});

export const authIsFailed = (errorMessage: string): AuthActionsType => ({
  type: AuthActionTypes.AUTH_FAILED,
  payload: errorMessage,
});

export const checkAuth = (userId: string, userEmail: string | null): AuthActionsType => ({
  type: AuthActionTypes.CHECK_AUTH,
  payload: {
    userId,
    userEmail,
  },
});
