import {AUTH_FAILED, LOGIN_SUCCESS} from "./auth.types";

let initialState = {
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
        case AUTH_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state
    }
}