import { AppActionsType, AppActionTypes } from './app.action-types';

const initialState = {
  isLoading: false,
};

type ActionsType = AppActionsType

const appReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case AppActionTypes.SHOW_LOADER:
      return { ...state, isLoading: true };
    case AppActionTypes.HIDE_LOADER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default appReducer;
