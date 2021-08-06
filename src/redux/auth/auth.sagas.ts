import {all, call, put, takeEvery} from 'redux-saga/effects'
// import {hideLoader, showLoader} from "../app/app.actions";
import {AUTH_FAILED, LOGIN_SUCCESS, USER_LOGIN, USER_SIGNUP} from "./auth.types";
import {auth} from "../../firebase";

export function* authSagas() {
    yield all([
        takeEvery(USER_LOGIN, loginSaga),
        takeEvery(USER_SIGNUP, signUpSaga),
    ])
}

function* loginSaga(action: any): any {
    try {
        const result = yield call(
            [auth, auth.signInWithEmailAndPassword],
            action.payload.email,
            action.payload.password
        )
        yield put ({type: LOGIN_SUCCESS, payload: {userId: result.user.uid, userEmail: result.user.email}})
    } catch (error) {
        yield put({type: AUTH_FAILED, payload: error.message})
    }
}

function* signUpSaga(action: any): any {
    try {
        const result = yield call(
            [auth, auth.createUserWithEmailAndPassword],
            action.payload.email,
            action.payload.password
        )
        yield put ({type: LOGIN_SUCCESS, payload: {userId: result.user.uid, userEmail: result.user.email}})
    } catch (error) {
        yield put({type: AUTH_FAILED, payload: error.message})
    }
}