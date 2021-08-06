import {USER_LOGIN} from "./auth.types";

export const authUser = (email: string, password: string) => {
    return {
        type: USER_LOGIN,
        payload: {
            email,
            password
        }
    }
}

