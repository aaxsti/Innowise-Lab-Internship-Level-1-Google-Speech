import { createSelector } from 'reselect';
import { AppState } from '../global/store';

const app = (state: AppState) => state.app;

export const selectLoading = createSelector(
  [app],
  (app) => app.isLoading,
);
