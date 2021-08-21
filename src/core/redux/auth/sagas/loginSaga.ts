import firebase from 'firebase';
import { call, put } from 'redux-saga/effects';
import { AuthActionTypes, UserLoginActionType } from '../auth.action-types';
import { SagaWithAction } from '../../global/store';
import { hideLoader, showLoader } from '../../app/app.actions';
import { auth } from '../../../firebase/firebase';
import onAuthStateChanged from '../../../utils/auth-saga-helper';

function* loginSagaWorker(action: UserLoginActionType): SagaWithAction<firebase.User> {
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

export default loginSagaWorker;
