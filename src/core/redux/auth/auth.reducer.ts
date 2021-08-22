import { AuthActionsType, AuthActionTypes } from './auth.action-types';
import { UserData } from '../../interfaces/user-data';

interface InitialState {
  user: UserData | null
  errorMessage: string
  isLoading: boolean
}
type ActionsType = AuthActionsType

const initialState = {
  user: null,
  errorMessage: '',
  isLoading: false,
} as InitialState;

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
