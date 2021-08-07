import {AUTH_FAILED, CHECK_AUTH, LOGIN_SUCCESS, LOGOUT_SUCCESS} from "./auth.types";

const initialState = {
    user: null as any,
    errorMessage: '' as string
}

type InitialState = typeof initialState
type ActionsType = any

export const authReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: null
            };
        case CHECK_AUTH:
            return {
                ...state,
                user: action.payload
            };
        case AUTH_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state
    }
}