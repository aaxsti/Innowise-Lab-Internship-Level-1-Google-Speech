import { all, takeEvery } from 'redux-saga/effects';
import { AuthActionTypes } from '../auth.action-types';
import { SagaWithoutAction } from '../../global/store';
import { AppActionTypes } from '../../app/app.action-types';
import logoutSagaWorker from './logoutSaga';
import signUpSagaWorker from './signUpSaga';
import loginSagaWorker from './loginSaga';
import getAuthUserDataSagaWorker from './getAuthUserDataSaga';

function* authSagasWatcher(): SagaWithoutAction {
  yield all([
    takeEvery(AuthActionTypes.USER_LOGIN, loginSagaWorker),
    takeEvery(AuthActionTypes.USER_SIGNUP, signUpSagaWorker),
    takeEvery(AuthActionTypes.USER_LOGOUT, logoutSagaWorker),
    takeEvery(AppActionTypes.APP_START, getAuthUserDataSagaWorker),
  ]);
}

export default authSagasWatcher;
