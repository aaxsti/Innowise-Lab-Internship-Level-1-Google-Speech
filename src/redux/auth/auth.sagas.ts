import {all, call, put, takeEvery} from 'redux-saga/effects'
import {
    APP_START,
    AUTH_FAILED,
    CHECK_AUTH,
    LOGIN_SUCCESS,
    LOGOUT_FAILED,
    LOGOUT_SUCCESS,
    USER_LOGIN,
    USER_LOGOUT,
    USER_SIGNUP
} from "./auth.types";
import {auth} from "../../firebase";
import {User} from '../../types/types';

export function* authSagas(): any {
    yield all([
        takeEvery(USER_LOGIN, loginSaga),
        takeEvery(USER_SIGNUP, signUpSaga),
        takeEvery(USER_LOGOUT, logoutSaga),
        takeEvery(APP_START, getAuthUserDataSaga),
    ])
}

function onAuthStateChanged(): Promise<Error | User> {
    return new Promise<Error | User>((resolve, reject) => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                resolve(user);
            } else {
                reject(new Error('You are not authorized!'));
            }
        });
    });
}

function* getAuthUserDataSaga(): any {
    try {
        // yield put(showLoader())

        const user = yield call(onAuthStateChanged)

        // yield put(hideLoader())
        yield put({type: CHECK_AUTH, payload: {userId: user.uid, userEmail: user.email}})
    } catch (error) {
        yield put({type: AUTH_FAILED, payload: error.message})
    }
}

function* logoutSaga(): any {
    try {
        yield call([auth, auth.signOut])
        yield put({type: LOGOUT_SUCCESS})
    } catch (error) {
        yield put({type: LOGOUT_FAILED, payload: error.message})
    }
}


function* loginSaga(action: any): any {
    try {
        const result = yield call(
            [auth, auth.signInWithEmailAndPassword],
            action.payload.email,
            action.payload.password
        )
        yield put({type: LOGIN_SUCCESS, payload: {userId: result.user.uid, userEmail: result.user.email}})
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
        yield put({type: LOGIN_SUCCESS, payload: {userId: result.user.uid, userEmail: result.user.email}})
    } catch (error) {
        yield put({type: AUTH_FAILED, payload: error.message})
    }
}