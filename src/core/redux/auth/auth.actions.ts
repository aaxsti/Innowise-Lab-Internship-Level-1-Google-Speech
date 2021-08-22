import { AuthActionsType, AuthActionTypes } from './auth.action-types';

export const loginUser = (email: string, password: string): AuthActionsType => ({
  type: AuthActionTypes.USER_LOGIN,
  payload: {
    email,
    password,
  },
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
