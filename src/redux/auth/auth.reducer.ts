import {
  AUTH_FAILED, CHECK_AUTH, LOGIN_SUCCESS, LOGOUT_SUCCESS,
} from './auth.types';

const initialState = {
  user: null as any,
  errorMessage: '' as string,
  isLoading: false as boolean,
};

type InitialState = typeof initialState
type ActionsType = any

export default function authReducer(state = initialState, action: ActionsType): InitialState {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        errorMessage: '',
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case CHECK_AUTH:
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
