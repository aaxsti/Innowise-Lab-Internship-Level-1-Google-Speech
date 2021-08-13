import { AppActionsType, AppActionTypes } from './app.action-types';

export const appInitialize = (): AppActionsType => ({
  type: AppActionTypes.APP_START,
});

export const showLoader = (): AppActionsType => ({
  type: AppActionTypes.SHOW_LOADER,
});

export const hideLoader = (): AppActionsType => ({
  type: AppActionTypes.HIDE_LOADER,
});
