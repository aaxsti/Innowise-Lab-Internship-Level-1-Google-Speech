import firebase from 'firebase';
import { call, put } from 'redux-saga/effects';
import { SagaWithAction } from '../../global/store';
import { hideLoader, showLoader } from '../../app/app.actions';
import { AuthActionTypes } from '../auth.action-types';
import onAuthStateChanged from '../../../utils/auth-saga-helper';

function* getAuthUserDataSagaWorker(): SagaWithAction<firebase.User> {
  try {
    yield put(showLoader());
    const user = yield call(onAuthStateChanged);
    yield put(hideLoader());
    yield put({
      type: AuthActionTypes.CHECK_AUTH,
      payload: { userId: user.uid, userEmail: user.email },
    });
  } catch (error) {
    yield put({ type: AuthActionTypes.AUTH_FAILED, payload: error.message });
    yield put(hideLoader());
  }
}

export default getAuthUserDataSagaWorker;
