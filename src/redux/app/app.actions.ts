import {HIDE_LOADER, SHOW_LOADER} from "./app.types";
import {APP_START} from "../auth/auth.types";

export const appInitialize = () => {
    return {
        type: APP_START
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}