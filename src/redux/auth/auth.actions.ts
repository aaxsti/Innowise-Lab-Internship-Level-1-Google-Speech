import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP} from "./auth.types";

export const loginUser = (email: string, password: string) => {
    return {
        type: USER_LOGIN,
        payload: {
            email,
            password
        }
    }
}

export const signUpUser = (email: string, password: string) => {
    return {
        type: USER_SIGNUP,
        payload: {
            email,
            password
        }
    }
}

export const logoutUser = () => {
    return {
        type: USER_LOGOUT
    }
}