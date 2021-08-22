import { AppActionsType, AppActionTypes } from './app.action-types';

interface InitialState {
  isLoading: boolean
}

const initialState = {
  isLoading: false,
} as InitialState;

type ActionsType = AppActionsType

const appReducer = (state = initialState, action: ActionsType): InitialState => {
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
