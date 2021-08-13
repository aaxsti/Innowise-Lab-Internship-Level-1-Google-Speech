import {
  all, call, put, takeEvery,
} from 'redux-saga/effects';
import { auth } from '../../firebase/firebase';
import { hideLoader, showLoader } from '../app/app.actions';
import { AuthActionTypes, UserLoginActionType, UserSignupActionType } from './auth.action-types';
import { User } from '../../interfaces/user';
import { SagaWithAction, SagaWithoutAction } from '../global/store';
import { AppActionTypes } from '../app/app.action-types';

function* authSagas(): any {
  yield all([
    takeEvery(AuthActionTypes.USER_LOGIN, loginSaga),
    takeEvery(AuthActionTypes.USER_SIGNUP, signUpSaga),
    takeEvery(AuthActionTypes.USER_LOGOUT, logoutSaga),
    takeEvery(AppActionTypes.APP_START, getAuthUserDataSaga),
  ]);
}

const onAuthStateChanged = (): Promise<Error | User> => {
  return new Promise<Error | User>((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error('You are not authorized!'));
      }
    });
  });
};

function* getAuthUserDataSaga(): SagaWithAction<User> {
  try {
    yield put(showLoader());
    const user = yield call(onAuthStateChanged);
    yield put(hideLoader());
    yield put({ type: AuthActionTypes.CHECK_AUTH, payload: { userId: user.uid, userEmail: user.email } });
  } catch (error) {
    yield put({ type: AuthActionTypes.AUTH_FAILED, payload: error.message });
    yield put(hideLoader());
  }
}

function* logoutSaga(): SagaWithoutAction {
  try {
    yield call([auth, auth.signOut]);
    yield put({ type: AuthActionTypes.LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: AuthActionTypes.LOGOUT_FAILED, payload: error.message });
  }
}

function* loginSaga(action: UserLoginActionType): SagaWithAction<User> {
  try {
    yield put(showLoader());
    yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.payload.email,
      action.payload.password,
    );
    const user = yield call(onAuthStateChanged);
    yield put({
      type: AuthActionTypes.LOGIN_SUCCESS,
      payload: { userId: user.uid, userEmail: user.email },
    });
    yield put(hideLoader());
  } catch (error) {
    yield put({ type: AuthActionTypes.AUTH_FAILED, payload: error.message });
    yield put(hideLoader());
  }
}

function* signUpSaga(action: UserSignupActionType): SagaWithAction<User> {
  try {
    yield put(showLoader());
    yield call(
      [auth, auth.createUserWithEmailAndPassword],
      action.payload.email,
      action.payload.password,
    );
    const user = yield call(onAuthStateChanged);
    yield put({
      type: AuthActionTypes.LOGIN_SUCCESS,
      payload: { userId: user.uid, userEmail: user.email },
    });
    yield put(hideLoader());
  } catch (error) {
    yield put({ type: AuthActionTypes.AUTH_FAILED, payload: error.message });
    yield put(hideLoader());
  }
}

export default authSagas;
