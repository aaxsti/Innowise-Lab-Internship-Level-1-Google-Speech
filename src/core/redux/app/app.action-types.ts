export enum AppActionTypes {
  HIDE_LOADER = 'app/HIDE_LOADER',
  SHOW_LOADER = 'app/SHOW_LOADER',
  APP_START = 'app/APP_START',
}

export interface AppStartActionType {
  type: AppActionTypes.APP_START;
}

export interface ShowLoaderActionType {
  type: AppActionTypes.SHOW_LOADER;
}

export interface HideLoaderActionType {
  type: AppActionTypes.HIDE_LOADER;
}

export type AppActionsType = ShowLoaderActionType
  | HideLoaderActionType
  | AppStartActionType
