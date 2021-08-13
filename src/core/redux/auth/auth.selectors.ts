import { createSelector } from 'reselect';
import { AppState } from '../global/store';

const user = (state: AppState) => state.auth;

export const selectUser = createSelector(
  [user],
  (user) => user.user,
);

export const selectAuthError = createSelector(
  [user],
  (user) => user.errorMessage,
);
