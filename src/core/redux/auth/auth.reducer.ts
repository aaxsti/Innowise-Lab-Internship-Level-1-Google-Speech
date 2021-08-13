import { AuthActionsType, AuthActionTypes } from './auth.action-types';

const initialState = {
  user: null as any,
  errorMessage: '' as string,
  isLoading: false as boolean,
};

type InitialState = typeof initialState
type ActionsType = AuthActionsType

const authReducer = (state = initialState, action: ActionsType): InitialState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        errorMessage: '',
      };
    case AuthActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        errorMessage: '',
      };
    case AuthActionTypes.CHECK_AUTH:
      return {
        ...state,
        user: action.payload,
      };
    case AuthActionTypes.AUTH_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
