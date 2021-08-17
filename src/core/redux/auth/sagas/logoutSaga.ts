import { call, put } from 'redux-saga/effects';
import { SagaWithoutAction } from '../../global/store';
import { auth } from '../../../firebase/firebase';
import { AuthActionTypes } from '../auth.action-types';

function* logoutSagaWorker(): SagaWithoutAction {
  try {
    yield call([auth, auth.signOut]);
    yield put({ type: AuthActionTypes.LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: AuthActionTypes.LOGOUT_FAILED, payload: error.message });
  }
}

export default logoutSagaWorker;
