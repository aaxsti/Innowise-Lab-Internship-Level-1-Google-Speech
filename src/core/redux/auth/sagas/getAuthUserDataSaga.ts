import firebase from 'firebase';
import { call, put } from 'redux-saga/effects';
import { SagaWithAction } from '../../global/store';
import { hideLoader, showLoader } from '../../app/app.actions';
import onAuthStateChanged from '../../../utils/check-auth-helper';
import { authIsFailed, checkAuth } from '../auth.actions';

function* getAuthUserDataSagaWorker(): SagaWithAction<firebase.User> {
  try {
    yield put(showLoader());
    const user = yield call(onAuthStateChanged);
    yield put(hideLoader());
    yield put(checkAuth(user.uid, user.email));
  } catch (error) {
    yield put(authIsFailed(error.message));
    yield put(hideLoader());
  }
}

export default getAuthUserDataSagaWorker;
